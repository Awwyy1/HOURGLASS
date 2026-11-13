import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import { applyNoTrackParam } from "./lib/owner";
import "./styles.css";

applyNoTrackParam();

// After a deploy, a tab opened on the previous version can ask for script
// files that no longer exist. Reload once to pick up the new version instead
// of showing a broken page. The timestamp stops a reload loop.
window.addEventListener("vite:preloadError", (event) => {
  try {
    const key = "hourglass-reloaded-at";
    const last = Number(sessionStorage.getItem(key) ?? 0);
    if (Date.now() - last < 10_000) return;
    sessionStorage.setItem(key, String(Date.now()));
  } catch {
    return;
  }
  event.preventDefault();
  window.location.reload();
});

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: { queryClient },
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Every page arrives as prerendered HTML (scripts/prerender.mjs). Load the
// route's code first, so React replaces that HTML with the same page rather
// than flashing an empty one while the route's chunk downloads.
router.load().finally(() => {
  createRoot(document.getElementById("app")!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
});

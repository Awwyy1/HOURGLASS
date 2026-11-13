/**
 * Build-time renderer used by scripts/prerender.mjs. It renders one path of
 * the app to HTML, along with the head data the page reported while
 * rendering. It never runs in the browser or on a server.
 */
import { renderToString } from "react-dom/server";
import { RouterProvider, createMemoryHistory, createRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import { finishHeadCollection, socialFor, startHeadCollection } from "./lib/head";

export async function render(path: string) {
  const router = createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
    history: createMemoryHistory({ initialEntries: [path] }),
  });
  await router.load();

  startHeadCollection();
  const html = renderToString(<RouterProvider router={router} />);
  const head = finishHeadCollection();

  return { html, head, ...socialFor(path) };
}

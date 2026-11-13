/**
 * Writes every page in the sitemap to static HTML after the client build.
 *
 * Until this step every URL served the same empty shell: the homepage's title,
 * description and canonical, and an empty <div id="app">. Search engines that
 * did not run the page's JavaScript, and every link preview and AI crawler,
 * saw that shell instead of the page. Each page now carries its own head and
 * its full text, and the browser app takes over from there.
 *
 * Output follows Vercel's cleanUrls layout: / -> index.html,
 * /weeks -> weeks.html, /journal/<slug> -> journal/<slug>.html, plus
 * 404.html, which Vercel serves with a real 404 status.
 */
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);
const template = await readFile(join(dist, "index.html"), "utf8");
const sitemap = await readFile(join(root, "public", "sitemap.xml"), "utf8");

const paths = [...sitemap.matchAll(/<loc>https:\/\/www\.justhourglass\.me([^<]*)<\/loc>/g)].map(
  (m) => m[1] || "/",
);
if (paths.length === 0) throw new Error("No URLs found in public/sitemap.xml");

const escAttr = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
const escText = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// JSON inside <script> must not be able to close the tag.
const escJson = (data) => JSON.stringify(data).replace(/</g, "\\u003c");

function replaceOnce(html, pattern, replacement, what) {
  if (!pattern.test(html)) throw new Error(`index.html template has no ${what}`);
  return html.replace(pattern, () => replacement);
}

function setMeta(html, attr, key, value) {
  const pattern = new RegExp(`<meta ${attr}="${key}" content="[^"]*" />`);
  return replaceOnce(html, pattern, `<meta ${attr}="${key}" content="${escAttr(value)}" />`, key);
}

function pageHtml(path, { html, head, url, image }) {
  const title = head.title;
  const description =
    head.description ?? (head.notFound ? "The page you were looking for does not exist." : null);
  if (!title || !description) throw new Error(`${path}: the page reported no title or description`);
  if (!/<h1[\s>]/.test(html)) throw new Error(`${path}: the rendered page has no <h1>`);

  let out = template;
  out = replaceOnce(out, /<title>[^<]*<\/title>/, `<title>${escText(title)}</title>`, "<title>");
  out = setMeta(out, "name", "description", description);
  out = setMeta(out, "name", "robots", head.notFound ? "noindex" : "index, follow");

  const canonical = /<link rel="canonical" href="[^"]*" \/>/;
  out = head.notFound
    ? replaceOnce(out, canonical, "", "canonical link")
    : replaceOnce(
        out,
        canonical,
        `<link rel="canonical" href="${escAttr(url)}" />`,
        "canonical link",
      );

  out = setMeta(out, "property", "og:type", head.ogType ?? "website");
  out = setMeta(out, "property", "og:url", url);
  out = setMeta(out, "property", "og:title", title);
  out = setMeta(out, "property", "og:description", description);
  out = setMeta(out, "property", "og:image", image);
  out = setMeta(out, "property", "og:image:alt", title);
  out = setMeta(out, "name", "twitter:title", title);
  out = setMeta(out, "name", "twitter:description", description);
  out = setMeta(out, "name", "twitter:image", image);

  const jsonLd = Object.entries(head.jsonLd)
    .map(([id, data]) => `<script id="${id}" type="application/ld+json">${escJson(data)}</script>`)
    .join("");
  out = replaceOnce(out, /<\/head>/, `${jsonLd}</head>`, "</head>");
  out = replaceOnce(out, /<div id="app"><\/div>/, `<div id="app">${html}</div>`, '<div id="app">');
  return out;
}

function fileFor(path) {
  if (path === "/") return join(dist, "index.html");
  return join(dist, `${path.replace(/^\/|\/$/g, "")}.html`);
}

let written = 0;
for (const path of paths) {
  const result = await render(path);
  if (result.head.notFound) throw new Error(`${path} is in the sitemap but renders as not found`);
  const file = fileFor(path);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, pageHtml(path, result));
  written++;
}

const missing = await render("/this-page-does-not-exist");
if (!missing.head.notFound) throw new Error("The not-found page did not report itself");
await writeFile(join(dist, "404.html"), pageHtml("/404", missing));

await rm(ssrDir, { recursive: true, force: true });
console.log(`prerender: wrote ${written} pages and 404.html`);

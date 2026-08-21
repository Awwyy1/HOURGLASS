import { useEffect } from "react";

interface Props {
  title: string;
  description: string;
  /** Use the title verbatim instead of appending " | HOURGLASS". */
  exactTitle?: boolean;
  /** Open Graph type. Articles should pass "article"; everything else stays "website". */
  ogType?: "website" | "article";
}

/** Create the tag if it is missing, then set the attribute. */
function setTag(
  selector: string,
  attr: string,
  value: string,
  make: () => Element,
) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = make();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function PageSEO({
  title,
  description,
  exactTitle = false,
  ogType = "website",
}: Props) {
  useEffect(() => {
    const full = exactTitle ? title : `${title} | HOURGLASS`;
    document.title = full;

    setTag('meta[name="description"]', "content", description, () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    });

    const og: [string, string][] = [
      ["og:title", full],
      ["og:description", description],
      ["og:type", ogType],
    ];
    og.forEach(([property, value]) =>
      setTag(`meta[property="${property}"]`, "content", value, () => {
        const m = document.createElement("meta");
        m.setAttribute("property", property);
        return m;
      }),
    );

    const twitter: [string, string][] = [
      ["twitter:title", full],
      ["twitter:description", description],
    ];
    twitter.forEach(([name, value]) =>
      setTag(`meta[name="${name}"]`, "content", value, () => {
        const m = document.createElement("meta");
        m.setAttribute("name", name);
        return m;
      }),
    );
  }, [title, description, exactTitle, ogType]);

  return null;
}

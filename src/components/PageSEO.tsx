import { useEffect } from "react";

interface Props {
  title: string;
  description: string;
}

export function PageSEO({ title, description }: Props) {
  useEffect(() => {
    document.title = title + " | HOURGLASS";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);
  return null;
}

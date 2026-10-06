import { createFileRoute } from "@tanstack/react-router";
import html from "../site/nexora.html?raw";

// The Nexora site is a self-contained page (WebGL scene + vanilla JS) served as-is at "/".
export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(html, {
          headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" },
        }),
    },
  },
});

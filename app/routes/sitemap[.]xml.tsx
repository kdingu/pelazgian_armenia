import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

const domain = "https://armeniapellazgjike.com";

export const loader: LoaderFunction = async () => {
  const urls = ["/", "/books", "/author", "/contact"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => {
        return `<url>
          <loc>${domain}${url}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`;
      })
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};

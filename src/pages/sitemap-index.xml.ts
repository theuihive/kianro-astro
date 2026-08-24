import { getCollection } from "astro:content";
import { siteConfig } from "@/config/site";

export async function GET() {
  const blogEntries = await getCollection("blog");
  const posts = blogEntries.map((post) => post.id).sort();

  const pages = ["", "/about", "/blog", "/contact", "/faq", "/license", "/privacy-policy", "/projects", "/services", "/terms-conditions"];

  const { siteUrl } = siteConfig;
  const urls = [...pages.map((path) => `<url><loc>${siteUrl}${path}</loc></url>`), ...posts.map((slug) => `<url><loc>${siteUrl}/blog/${slug}</loc></url>`)];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join("\n  ")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/en", "/ar"],
      disallow: ["/api/"],
    },
    sitemap: "https://www.nexora-tech.com/sitemap.xml",
  };
}

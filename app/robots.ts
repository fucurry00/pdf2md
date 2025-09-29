import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://pdf2md.app";

  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/?lang=ja",
        "/?lang=ko",
        "/?lang=zh",
        "/?lang=de",
        "/?lang=fr",
        "/?lang=es",
        "/?lang=it",
        "/?lang=pt",
        "/?lang=ru",
        "/?lang=ar",
        "/?lang=hi",
      ],
      disallow: ["/api/", "/_next/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

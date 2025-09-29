import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pdf2md.app";

  return [
    // デフォルト（英語）
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // 日本語
    {
      url: `${baseUrl}/?lang=ja`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // 韓国語
    {
      url: `${baseUrl}/?lang=ko`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // 中国語
    {
      url: `${baseUrl}/?lang=zh`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // ドイツ語
    {
      url: `${baseUrl}/?lang=de`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // フランス語
    {
      url: `${baseUrl}/?lang=fr`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // スペイン語
    {
      url: `${baseUrl}/?lang=es`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // イタリア語
    {
      url: `${baseUrl}/?lang=it`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // ポルトガル語
    {
      url: `${baseUrl}/?lang=pt`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // ロシア語
    {
      url: `${baseUrl}/?lang=ru`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // アラビア語
    {
      url: `${baseUrl}/?lang=ar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // ヒンディー語
    {
      url: `${baseUrl}/?lang=hi`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}

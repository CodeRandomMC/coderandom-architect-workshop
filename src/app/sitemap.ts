import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.coderandom.com";
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/#mission`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#featured`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#case-studies`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}

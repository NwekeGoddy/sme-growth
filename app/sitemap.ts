
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL;

  return [
    {
      url: `${baseUrl}/sme-growth-loan`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

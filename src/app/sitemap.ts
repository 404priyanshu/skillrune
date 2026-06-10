import { MetadataRoute } from "next";
import { skills } from "@/lib/skills";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/skills`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/categories`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/submit`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/docs/package-format`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...skills.map((skill) => ({
      url: `${siteConfig.url}/skills/${skill.slug}`,
      lastModified: new Date(skill.lastUpdated),
      changeFrequency: "monthly" as const,
      priority: skill.featured ? 0.8 : 0.65,
    })),
  ];
}

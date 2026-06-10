import { categories, skills } from "@/lib/skills";
import { siteConfig } from "@/lib/site";

export function GET() {
  const featured = skills
    .filter((skill) => skill.featured)
    .map((skill) => `- ${skill.name}: ${skill.shortDescription}`)
    .join("\n");

  const body = [
    "# SkillRune",
    "",
    siteConfig.description,
    "",
    "## Product",
    "",
    "SkillRune is an MVP registry for reusable AI agent skills. A skill is a packaged instruction set, workflow, script, template, or capability that teaches an AI agent how to perform a specific task reliably.",
    "",
    "## Primary Pages",
    "",
    `- Catalog: ${siteConfig.url}/skills`,
    `- Categories: ${siteConfig.url}/categories`,
    `- Submit: ${siteConfig.url}/submit`,
    "",
    "## Categories",
    "",
    categories.map((category) => `- ${category}`).join("\n"),
    "",
    "## Featured Skills",
    "",
    featured,
    "",
    "## MVP Boundaries",
    "",
    "SkillRune currently uses local mock data and client-side submission persistence. Real accounts, payments, admin moderation, database persistence, and a production CLI are not part of this release.",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}

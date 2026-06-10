import { categories, skills } from "@/lib/skills";
import { siteConfig } from "@/lib/site";

export function GET() {
  const skillLines = skills
    .map(
      (skill) =>
        `- ${skill.name} (${skill.category}, ${skill.version}, ${skill.license}): ${skill.shortDescription} Install: skillrune install ${skill.slug}`,
    )
    .join("\n");

  const body = [
    "# SkillRune Full Context",
    "",
    siteConfig.description,
    "",
    "## Positioning",
    "",
    "SkillRune is npm-like discovery for AI agent skills. It is not a prompt dump. Each skill listing exposes install command, files, compatibility, safety notes, source links, author, license, version, downloads, and rating.",
    "",
    "## Current Release Boundary",
    "",
    "This release is a polished local-data MVP/demo. It uses static seed data, client-side browse/search/filter/sort, generated manifest downloads, client-side localStorage submission review queue, and release metadata. It does not include accounts, payments, production database persistence, admin auth, or a real CLI.",
    "",
    "## Public Routes",
    "",
    `- Home: ${siteConfig.url}/`,
    `- Skills catalog: ${siteConfig.url}/skills`,
    `- Categories: ${siteConfig.url}/categories`,
    `- Package format: ${siteConfig.url}/docs/package-format`,
    `- Submit: ${siteConfig.url}/submit`,
    `- API index: ${siteConfig.url}/api/skills`,
    "",
    "## Categories",
    "",
    categories.map((category) => `- ${category}`).join("\n"),
    "",
    "## Seed Skills",
    "",
    skillLines,
    "",
    "## Submission Workflow",
    "",
    "Submit page validates required fields, GitHub URL shape, and stores submissions in browser localStorage with pending, approved, and rejected review states. This models the future moderation workflow without backend storage.",
    "",
    "## Package Format",
    "",
    "Skill manifests use schemaVersion 0.1 and include slug, name, version, description, category, tags, supportedAgents, author, license, source.repository, source.documentation, install.command, safety.notes, and files.",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}

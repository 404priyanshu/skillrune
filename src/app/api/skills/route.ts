import { createSkillManifest } from "@/lib/skill-package";
import { skills } from "@/lib/skills";

export function GET() {
  return Response.json(
    {
      schemaVersion: "0.1",
      count: skills.length,
      skills: skills.map((skill) => ({
        ...createSkillManifest(skill),
        detailUrl: `/skills/${skill.slug}`,
        manifestUrl: `/api/skills/${skill.slug}/manifest`,
        downloadUrl: `/api/skills/${skill.slug}/download`,
      })),
    },
    {
      headers: {
        "cache-control": "public, max-age=300, s-maxage=3600",
      },
    },
  );
}

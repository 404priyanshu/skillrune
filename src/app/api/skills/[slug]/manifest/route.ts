import { createSkillManifest } from "@/lib/skill-package";
import { getSkill } from "@/lib/skills";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const skill = getSkill(slug);

  if (!skill) {
    return Response.json({ error: "Skill not found" }, { status: 404 });
  }

  return Response.json(createSkillManifest(skill), {
    headers: {
      "cache-control": "public, max-age=300, s-maxage=3600",
    },
  });
}

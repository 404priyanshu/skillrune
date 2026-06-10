import { createSkillManifest, manifestToMarkdown } from "@/lib/skill-package";
import { getSkill } from "@/lib/skills";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const skill = getSkill(slug);

  if (!skill) {
    return new Response("Skill not found", { status: 404 });
  }

  return new Response(manifestToMarkdown(createSkillManifest(skill)), {
    headers: {
      "content-disposition": `attachment; filename="${skill.slug}.skill.md"`,
      "content-type": "text/markdown; charset=utf-8",
    },
  });
}

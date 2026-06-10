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

  const body = [
    `# ${skill.name}`,
    "",
    skill.shortDescription,
    "",
    "## Install",
    "",
    `\`\`\`sh`,
    `skillrune install ${skill.slug}`,
    `\`\`\``,
    "",
    "## Metadata",
    "",
    `- Category: ${skill.category}`,
    `- Version: ${skill.version}`,
    `- Author: ${skill.author}`,
    `- License: ${skill.license}`,
    `- Supported agents: ${skill.supportedAgents.join(", ")}`,
    "",
    "## Safety Notes",
    "",
    ...skill.safetyNotes.map((note) => `- ${note}`),
    "",
    "## Files",
    "",
    ...skill.files.map((file) => `- \`${file.path}\`: ${file.description}`),
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-disposition": `attachment; filename="${skill.slug}.skill.md"`,
      "content-type": "text/markdown; charset=utf-8",
    },
  });
}

import { Skill } from "@/lib/skills";

export type SkillPackageManifest = {
  schemaVersion: "0.1";
  slug: string;
  name: string;
  version: string;
  description: string;
  category: string;
  tags: string[];
  supportedAgents: string[];
  author: string;
  license: string;
  source: {
    repository: string;
    documentation: string;
  };
  install: {
    command: string;
  };
  safety: {
    notes: string[];
  };
  files: {
    path: string;
    description: string;
  }[];
};

export function createSkillManifest(skill: Skill): SkillPackageManifest {
  return {
    schemaVersion: "0.1",
    slug: skill.slug,
    name: skill.name,
    version: skill.version,
    description: skill.shortDescription,
    category: skill.category,
    tags: skill.tags,
    supportedAgents: skill.supportedAgents,
    author: skill.author,
    license: skill.license,
    source: {
      repository: skill.githubUrl,
      documentation: skill.docsUrl,
    },
    install: {
      command: `skillrune install ${skill.slug}`,
    },
    safety: {
      notes: skill.safetyNotes,
    },
    files: skill.files,
  };
}

export function manifestToMarkdown(manifest: SkillPackageManifest) {
  return [
    `# ${manifest.name}`,
    "",
    manifest.description,
    "",
    "## Install",
    "",
    "```sh",
    manifest.install.command,
    "```",
    "",
    "## Manifest",
    "",
    "```json",
    JSON.stringify(manifest, null, 2),
    "```",
    "",
    "## Safety Notes",
    "",
    ...manifest.safety.notes.map((note) => `- ${note}`),
    "",
  ].join("\n");
}

export function validateSubmittedSkill(input: {
  name: string;
  shortDescription: string;
  tags: string;
  agents: string;
  githubUrl: string;
  license: string;
  author: string;
  contact: string;
  safetyNotes: string;
}) {
  const required = [
    "name",
    "shortDescription",
    "tags",
    "agents",
    "githubUrl",
    "license",
    "author",
    "contact",
    "safetyNotes",
  ] as const;
  const missing = required.filter((key) => input[key].trim().length === 0);

  const hasValidGithubUrl = isGitHubRepositoryUrl(input.githubUrl);

  return {
    ok: missing.length === 0 && hasValidGithubUrl,
    missing,
    hasValidGithubUrl,
  };
}

function isGitHubRepositoryUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return true;
  if (!trimmed.startsWith("https://github.com/")) return false;
  return trimmed.replace("https://github.com/", "").split("/").filter(Boolean).length >= 2;
}

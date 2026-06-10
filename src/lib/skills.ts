export type SkillCategory =
  | "Coding"
  | "Research"
  | "File Operations"
  | "Browser Automation"
  | "Data Analysis"
  | "Writing"
  | "Design"
  | "DevOps"
  | "Security"
  | "Productivity"
  | "Education";

export type Skill = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: SkillCategory;
  tags: string[];
  supportedAgents: string[];
  downloads: number;
  rating: number;
  lastUpdated: string;
  license: string;
  version: string;
  author: string;
  githubUrl: string;
  docsUrl: string;
  safetyNotes: string[];
  files: { path: string; description: string }[];
  readme: string[];
  featured?: boolean;
};

export const categories: SkillCategory[] = [
  "Coding",
  "Research",
  "File Operations",
  "Browser Automation",
  "Data Analysis",
  "Writing",
  "Design",
  "DevOps",
  "Security",
  "Productivity",
  "Education",
];

export const skills: Skill[] = [
  {
    slug: "pdf-extractor-rune",
    name: "PDF Extractor Rune",
    shortDescription:
      "Extracts structured facts, tables, citations, and action items from dense PDF documents.",
    longDescription:
      "PDF Extractor Rune gives an agent a careful workflow for reading long PDF files, isolating tables, preserving citations, and reporting uncertainty when OCR or layout makes a claim ambiguous.",
    category: "File Operations",
    tags: ["pdf", "ocr", "tables", "citations"],
    supportedAgents: ["Codex", "Research agents", "Local automation agents"],
    downloads: 2410,
    rating: 4.8,
    lastUpdated: "2026-05-28",
    license: "MIT",
    version: "1.2.0",
    author: "Nora Field",
    githubUrl: "https://github.com/skillrune/pdf-extractor-rune",
    docsUrl: "https://skillrune.com/docs/pdf-extractor-rune",
    safetyNotes: [
      "Treats extracted numbers as unverified until a citation is available.",
      "Does not upload source PDFs unless the host agent already has network permission.",
      "Flags scanned or low-confidence pages instead of guessing.",
    ],
    files: [
      { path: "SKILL.md", description: "Main extraction workflow and verification rules." },
      { path: "scripts/extract_tables.ts", description: "Optional table extraction helper." },
      { path: "references/citation-checklist.md", description: "Checklist for source-grounded summaries." },
    ],
    readme: [
      "Use this skill when an agent needs to turn a PDF into structured notes without flattening citations.",
      "The skill separates facts, inferred claims, uncertain text, and tables so downstream writing can preserve provenance.",
    ],
    featured: true,
  },
  {
    slug: "repo-cartographer",
    name: "Repo Cartographer",
    shortDescription:
      "Maps a codebase before edits, including entrypoints, ownership areas, tests, and likely risks.",
    longDescription:
      "Repo Cartographer helps an agent build a compact mental model of a repository before touching code. It emphasizes entrypoints, data flow, test boundaries, and files that should not be changed casually.",
    category: "Coding",
    tags: ["codebase", "architecture", "review", "onboarding"],
    supportedAgents: ["Codex", "CLI agents", "Claude Desktop"],
    downloads: 3820,
    rating: 4.9,
    lastUpdated: "2026-06-02",
    license: "MIT",
    version: "0.8.2",
    author: "Mira K.",
    githubUrl: "https://github.com/skillrune/repo-cartographer",
    docsUrl: "https://skillrune.com/docs/repo-cartographer",
    safetyNotes: [
      "Read-only by default.",
      "Requires explicit approval before destructive git or filesystem operations.",
      "Reports uncertainty when ownership boundaries are unclear.",
    ],
    files: [
      { path: "SKILL.md", description: "Repository mapping workflow." },
      { path: "scripts/map_repo.ts", description: "Optional file inventory helper." },
      { path: "references/review-checklist.md", description: "Review guide for risky edits." },
    ],
    readme: [
      "Start here before a large code edit or unfamiliar repository review.",
      "The output is a short map: important folders, runtime entrypoints, tests, configuration, and likely blast radius.",
    ],
    featured: true,
  },
  {
    slug: "testsmith",
    name: "Testsmith",
    shortDescription:
      "Generates and maintains focused unit, integration, and regression tests from observed behavior.",
    longDescription:
      "Testsmith gives an agent a disciplined test-writing workflow: identify public behavior, choose the narrowest useful test level, avoid brittle internals, and verify failures before patching.",
    category: "Coding",
    tags: ["testing", "unit-tests", "regression", "coverage"],
    supportedAgents: ["Codex", "Claude Desktop", "CI agents"],
    downloads: 3290,
    rating: 4.7,
    lastUpdated: "2026-05-21",
    license: "Apache-2.0",
    version: "1.0.4",
    author: "Ilan Ro",
    githubUrl: "https://github.com/skillrune/testsmith",
    docsUrl: "https://skillrune.com/docs/testsmith",
    safetyNotes: [
      "Does not rewrite application code to satisfy a generated test without user approval.",
      "Avoids snapshot churn unless snapshots already protect stable UI output.",
    ],
    files: [
      { path: "SKILL.md", description: "Test selection and maintenance workflow." },
      { path: "references/test-risk-matrix.md", description: "Risk guide for test level selection." },
    ],
    readme: [
      "Use Testsmith after a bug report, refactor, or untested feature path.",
      "The skill first asks what behavior must be protected, then chooses a focused test shape.",
    ],
    featured: true,
  },
  {
    slug: "api-scribe",
    name: "API Scribe",
    shortDescription:
      "Turns route handlers, schemas, and examples into readable API documentation.",
    longDescription:
      "API Scribe helps an agent produce docs from the code that actually handles requests. It prioritizes request shapes, response examples, authentication notes, and failure modes.",
    category: "Writing",
    tags: ["api", "docs", "openapi", "developer-experience"],
    supportedAgents: ["Codex", "Documentation agents"],
    downloads: 1610,
    rating: 4.6,
    lastUpdated: "2026-05-17",
    license: "MIT",
    version: "0.6.1",
    author: "Jules B.",
    githubUrl: "https://github.com/skillrune/api-scribe",
    docsUrl: "https://skillrune.com/docs/api-scribe",
    safetyNotes: [
      "Marks undocumented authentication or rate limits as gaps.",
      "Does not invent endpoint behavior absent from code or source material.",
    ],
    files: [
      { path: "SKILL.md", description: "API documentation workflow." },
      { path: "templates/endpoint.md", description: "Endpoint documentation template." },
    ],
    readme: [
      "Use this skill when API docs need to be generated from real handlers rather than marketing copy.",
      "It can summarize routes, schemas, examples, and caveats into a consistent docs page.",
    ],
  },
  {
    slug: "browser-scout",
    name: "Browser Scout",
    shortDescription:
      "Guides browser agents through research, screenshots, form checks, and source capture.",
    longDescription:
      "Browser Scout defines a careful browser automation workflow for local and remote pages. It keeps navigation, source capture, screenshot evidence, and form interactions explicit.",
    category: "Browser Automation",
    tags: ["browser", "qa", "screenshots", "research"],
    supportedAgents: ["Browser agents", "Codex", "Chrome automation"],
    downloads: 1975,
    rating: 4.7,
    lastUpdated: "2026-06-01",
    license: "MIT",
    version: "0.9.0",
    author: "Sel Vance",
    githubUrl: "https://github.com/skillrune/browser-scout",
    docsUrl: "https://skillrune.com/docs/browser-scout",
    safetyNotes: [
      "Never submits forms that change real accounts unless the user explicitly asks.",
      "Captures source URLs for claims gathered from web pages.",
      "Avoids credential entry in untrusted pages.",
    ],
    files: [
      { path: "SKILL.md", description: "Browser investigation and verification workflow." },
      { path: "references/form-safety.md", description: "Rules for safe form interaction." },
    ],
    readme: [
      "Use Browser Scout when an agent needs proof from an actual rendered page.",
      "The skill pairs screenshots with concise notes about what was clicked, typed, or observed.",
    ],
    featured: true,
  },
  {
    slug: "dataset-distiller",
    name: "Dataset Distiller",
    shortDescription:
      "Profiles CSV and spreadsheet data, flags missing values, and summarizes column meaning.",
    longDescription:
      "Dataset Distiller gives an agent a low-risk path for understanding tabular data before analysis. It inspects shape, types, missingness, outliers, and fields that need human interpretation.",
    category: "Data Analysis",
    tags: ["csv", "spreadsheets", "profiling", "analysis"],
    supportedAgents: ["Data agents", "Codex", "Spreadsheet agents"],
    downloads: 1420,
    rating: 4.5,
    lastUpdated: "2026-04-30",
    license: "BSD-3",
    version: "0.5.3",
    author: "Ari Chen",
    githubUrl: "https://github.com/skillrune/dataset-distiller",
    docsUrl: "https://skillrune.com/docs/dataset-distiller",
    safetyNotes: [
      "Redacts likely secrets before summarizing columns.",
      "Does not upload private data by default.",
      "Separates profiling observations from causal claims.",
    ],
    files: [
      { path: "SKILL.md", description: "Dataset profiling workflow." },
      { path: "scripts/profile_csv.py", description: "Optional local CSV profiler." },
    ],
    readme: [
      "Use this skill before asking an agent to chart or model unfamiliar data.",
      "The output is a compact data profile with caveats and next analysis steps.",
    ],
  },
  {
    slug: "email-triage-sigil",
    name: "Email Triage Sigil",
    shortDescription:
      "Classifies mail into urgent, waiting, FYI, and task buckets without drafting replies by accident.",
    longDescription:
      "Email Triage Sigil helps mailbox-connected agents separate action from noise. It extracts owners, deadlines, waiting states, and threads that need a deliberate reply.",
    category: "Productivity",
    tags: ["email", "triage", "tasks", "inbox"],
    supportedAgents: ["Outlook agents", "Automation agents"],
    downloads: 1180,
    rating: 4.4,
    lastUpdated: "2026-05-06",
    license: "MIT",
    version: "0.4.8",
    author: "Tessa Lin",
    githubUrl: "https://github.com/skillrune/email-triage-sigil",
    docsUrl: "https://skillrune.com/docs/email-triage-sigil",
    safetyNotes: [
      "Does not send or draft replies unless explicitly invoked.",
      "Marks inferred deadlines separately from stated deadlines.",
      "Preserves original sender and thread context.",
    ],
    files: [
      { path: "SKILL.md", description: "Inbox triage workflow." },
      { path: "references/task-taxonomy.md", description: "Mailbox bucket definitions." },
    ],
    readme: [
      "Use this skill when a mailbox needs to become a task list.",
      "The skill reports urgent, reply-soon, waiting, delegated, and FYI buckets.",
    ],
  },
  {
    slug: "release-note-forge",
    name: "Release Note Forge",
    shortDescription:
      "Turns commits and merged pull requests into concise release notes with risk callouts.",
    longDescription:
      "Release Note Forge helps an agent translate shipped changes into user-facing release notes. It groups changes by outcome, avoids commit-message noise, and flags migration or rollback risks.",
    category: "DevOps",
    tags: ["release-notes", "git", "changelog", "ci"],
    supportedAgents: ["GitHub agents", "Codex", "CI agents"],
    downloads: 1535,
    rating: 4.6,
    lastUpdated: "2026-05-25",
    license: "MIT",
    version: "1.1.1",
    author: "Noah Prism",
    githubUrl: "https://github.com/skillrune/release-note-forge",
    docsUrl: "https://skillrune.com/docs/release-note-forge",
    safetyNotes: [
      "Does not claim a fix shipped unless it appears in the selected commit range.",
      "Keeps internal-only changes out of public release copy by default.",
    ],
    files: [
      { path: "SKILL.md", description: "Release note drafting workflow." },
      { path: "templates/release-notes.md", description: "Public release note template." },
    ],
    readme: [
      "Use this skill after a release branch or merged pull request batch.",
      "The output is grouped, plain-language release copy with risk and migration notes.",
    ],
  },
  {
    slug: "threat-model-lens",
    name: "Threat Model Lens",
    shortDescription:
      "Reviews architecture notes for trust boundaries, secret exposure, and misuse cases.",
    longDescription:
      "Threat Model Lens gives an agent a structured security review path for systems, APIs, and automation workflows. It focuses on assets, actors, boundaries, failure modes, and mitigations.",
    category: "Security",
    tags: ["security", "threat-modeling", "privacy", "review"],
    supportedAgents: ["Security agents", "Codex"],
    downloads: 980,
    rating: 4.5,
    lastUpdated: "2026-04-18",
    license: "Apache-2.0",
    version: "0.7.0",
    author: "Priya Shah",
    githubUrl: "https://github.com/skillrune/threat-model-lens",
    docsUrl: "https://skillrune.com/docs/threat-model-lens",
    safetyNotes: [
      "Produces review notes, not a compliance certification.",
      "Requires the user to confirm sensitive architecture details before sharing.",
    ],
    files: [
      { path: "SKILL.md", description: "Threat modeling workflow." },
      { path: "references/boundary-prompts.md", description: "Trust boundary prompts." },
    ],
    readme: [
      "Use this skill before launching a workflow that touches accounts, secrets, payments, or customer data.",
      "It reports assets, actors, boundaries, abuse cases, and unresolved questions.",
    ],
  },
  {
    slug: "design-critic",
    name: "Design Critic",
    shortDescription:
      "Audits interface screenshots for spacing, hierarchy, copy clarity, and responsive defects.",
    longDescription:
      "Design Critic helps visual agents review UI with specific evidence. It looks for type scale drift, cramped controls, weak hierarchy, contrast problems, and responsive collapse issues.",
    category: "Design",
    tags: ["ui-review", "frontend", "screenshots", "accessibility"],
    supportedAgents: ["Vision agents", "Codex", "Browser agents"],
    downloads: 1265,
    rating: 4.6,
    lastUpdated: "2026-05-12",
    license: "MIT",
    version: "0.8.5",
    author: "Mae Tan",
    githubUrl: "https://github.com/skillrune/design-critic",
    docsUrl: "https://skillrune.com/docs/design-critic",
    safetyNotes: [
      "Separates objective defects from taste preferences.",
      "Requires screenshots or rendered pages as evidence.",
    ],
    files: [
      { path: "SKILL.md", description: "Interface review workflow." },
      { path: "references/visual-qa.md", description: "Visual QA checklist." },
    ],
    readme: [
      "Use this skill when a rendered interface needs a senior design review.",
      "The skill returns prioritized defects with evidence and suggested fixes.",
    ],
  },
  {
    slug: "devops-watchtower",
    name: "DevOps Watchtower",
    shortDescription:
      "Reads deployment logs, environment diffs, and check failures to narrow production regressions.",
    longDescription:
      "DevOps Watchtower guides agents through incident triage without panic. It compares recent deploys, failed checks, environment changes, and user-visible symptoms.",
    category: "DevOps",
    tags: ["deployments", "logs", "ci", "incident"],
    supportedAgents: ["Ops agents", "Vercel agents", "Codex"],
    downloads: 1105,
    rating: 4.4,
    lastUpdated: "2026-05-31",
    license: "MIT",
    version: "0.9.3",
    author: "Owen Vale",
    githubUrl: "https://github.com/skillrune/devops-watchtower",
    docsUrl: "https://skillrune.com/docs/devops-watchtower",
    safetyNotes: [
      "Does not roll back, restart services, or change infrastructure without explicit approval.",
      "Redacts secrets from logs before summarizing.",
    ],
    files: [
      { path: "SKILL.md", description: "Incident investigation workflow." },
      { path: "references/deploy-diff.md", description: "Deployment diff checklist." },
    ],
    readme: [
      "Use this skill when a deployment or CI check fails and the cause is not obvious.",
      "It builds a short timeline, candidate causes, and verification steps.",
    ],
  },
  {
    slug: "tutor-thread",
    name: "Tutor Thread",
    shortDescription:
      "Turns a concept into short drills, worked examples, and review prompts for a learner.",
    longDescription:
      "Tutor Thread helps an agent teach a concept through incremental practice. It builds examples, drills, answers, and review prompts tailored to the learner's current level.",
    category: "Education",
    tags: ["learning", "drills", "examples", "teaching"],
    supportedAgents: ["Teaching agents", "Chat agents"],
    downloads: 870,
    rating: 4.3,
    lastUpdated: "2026-04-09",
    license: "CC-BY-4.0",
    version: "0.3.2",
    author: "Leah Stone",
    githubUrl: "https://github.com/skillrune/tutor-thread",
    docsUrl: "https://skillrune.com/docs/tutor-thread",
    safetyNotes: [
      "Avoids giving unsourced medical, legal, or financial advice.",
      "Separates hints from final answers for practice tasks.",
    ],
    files: [
      { path: "SKILL.md", description: "Teaching workflow." },
      { path: "templates/drill-set.md", description: "Practice drill template." },
    ],
    readme: [
      "Use this skill to turn a topic into active practice.",
      "The skill builds short drills, worked examples, answer keys, and spaced review prompts.",
    ],
  },
  {
    slug: "find-skills",
    name: "Find Skills",
    shortDescription:
      "A utility skill for searching and discovering other agent skills in the ecosystem.",
    longDescription:
      "Find Skills gives your agent access to searching the global directory, fetching metadata, and identifying relevant skills for task execution without manual context bloating.",
    category: "Research",
    tags: ["search", "discovery", "registry", "telemetry"],
    supportedAgents: ["Claude Code", "Cursor", "Antigravity", "Cline"],
    downloads: 115950,
    rating: 4.9,
    lastUpdated: "2026-06-08",
    license: "MIT",
    version: "1.0.0",
    author: "Vercel Labs",
    githubUrl: "https://github.com/vercel-labs/skills",
    docsUrl: "https://skills.sh/docs/find-skills",
    safetyNotes: [
      "Read-only access to registry lists.",
      "No network credentials required."
    ],
    files: [
      { path: "SKILL.md", description: "Fuzzy matching and directory search instructions." }
    ],
    readme: [
      "Use this skill to help agents search the registry for other skills.",
      "Prevents manual query steps by performing fuzzy matching."
    ],
    featured: true,
  },
  {
    slug: "frontend-design",
    name: "Frontend Design",
    shortDescription:
      "Audits and improves frontend design details, accessibility, CSS visual details, and React layout conventions.",
    longDescription:
      "Frontend Design provides guidelines and instructions for visual design checks: typography scales, accessibility contrasts, spacing parameters, responsive layouts, and modern CSS conventions.",
    category: "Design",
    tags: ["frontend", "design", "css", "accessibility", "react"],
    supportedAgents: ["Claude Code", "Cursor", "Cline", "Antigravity"],
    downloads: 524300,
    rating: 4.9,
    lastUpdated: "2026-06-05",
    license: "MIT",
    version: "2.1.2",
    author: "Anthropic",
    githubUrl: "https://github.com/anthropics/skills",
    docsUrl: "https://skills.sh/docs/frontend-design",
    safetyNotes: [
      "Does not modify build pipelines.",
      "Vets color contrasts using WCAG standard equations."
    ],
    files: [
      { path: "SKILL.md", description: "Design auditing rules and contrast checklists." }
    ],
    readme: [
      "Use this skill when auditing UI styling, layouts, spacing, or component structures.",
      "Helps agents adhere to clean visual guidelines."
    ],
    featured: true,
  },
  {
    slug: "vercel-react-best-practices",
    name: "React Best Practices",
    shortDescription:
      "Standardized React patterns, server component guidelines, and Next.js performance optimization rules.",
    longDescription:
      "React Best Practices provides structured advice for React 19 and Next.js development. Covers layout structuring, client-side caching, fetching priorities, and hydration warning fixes.",
    category: "Coding",
    tags: ["react", "nextjs", "coding", "performance", "optimization"],
    supportedAgents: ["Claude Code", "Cursor", "Windsurf", "Antigravity"],
    downloads: 464400,
    rating: 4.8,
    lastUpdated: "2026-06-03",
    license: "MIT",
    version: "1.1.0",
    author: "Vercel Labs",
    githubUrl: "https://github.com/vercel-labs/agent-skills",
    docsUrl: "https://skills.sh/docs/vercel-react-best-practices",
    safetyNotes: [
      "Suggests adjustments without executing code by default.",
      "Complies with Next.js App Router rules."
    ],
    files: [
      { path: "SKILL.md", description: "React 19 pattern compliance and hydration rules." }
    ],
    readme: [
      "Injects React and Next.js guidelines to help agents build efficient frontends.",
      "Ensures correct Client/Server boundary separation."
    ],
    featured: true,
  },
  {
    slug: "skill-creator",
    name: "Skill Creator",
    shortDescription:
      "Iteratively build, configure, document, and publish custom skills for agent workflows.",
    longDescription:
      "Skill Creator helps agents build new skills matching the open standard. It constructs metadata headers, generates SKILL.md templates, validates folders, and prepares GitHub releases.",
    category: "DevOps",
    tags: ["skills", "cli", "publish", "generator", "standard"],
    supportedAgents: ["Claude Code", "Cursor", "Antigravity"],
    downloads: 387600,
    rating: 4.7,
    lastUpdated: "2026-06-07",
    license: "MIT",
    version: "0.9.1",
    author: "Anthropic",
    githubUrl: "https://github.com/anthropics/skills",
    docsUrl: "https://skills.sh/docs/skill-creator",
    safetyNotes: [
      "Requires write permissions for local directories.",
      "Prompts for confirmation before pushing to GitHub."
    ],
    files: [
      { path: "SKILL.md", description: "Skill creation guides and manifest templates." }
    ],
    readme: [
      "Builds and packages new skills for the Agent Skills ecosystem.",
      "Walks developers through writing metadata, READMEs, and files."
    ],
    featured: true,
  },
];

export const allTags = Array.from(
  new Set(skills.flatMap((skill) => skill.tags)),
).sort();

export function getSkill(slug: string) {
  return skills.find((skill) => skill.slug === slug);
}

export function getRelatedSkills(skill: Skill, limit = 3) {
  return skills
    .filter((candidate) => candidate.slug !== skill.slug)
    .filter(
      (candidate) =>
        candidate.category === skill.category ||
        candidate.tags.some((tag) => skill.tags.includes(tag)),
    )
    .slice(0, limit);
}

export function formatDownloads(downloads: number) {
  return new Intl.NumberFormat("en", {
    notation: downloads >= 1000 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(downloads);
}

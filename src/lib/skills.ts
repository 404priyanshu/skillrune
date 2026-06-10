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
  {
    slug: "agent-browser",
    name: "agent-browser",
    shortDescription:
      "Fast persistent browser automation with session continuity across sequential agent commands.",
    longDescription:
      "agent-browser gives agents a browser automation CLI for navigation, page inspection, interaction, data extraction, cookie handling, and JavaScript execution across local, Chrome-profile, and cloud browser modes.",
    category: "Browser Automation",
    tags: ["browser", "automation", "chrome", "testing", "scraping"],
    supportedAgents: ["Claude Code", "Codex", "Cursor", "GitHub Copilot", "Windsurf"],
    downloads: 434700,
    rating: 4.8,
    lastUpdated: "2026-06-09",
    license: "MIT",
    version: "1.0.0",
    author: "Vercel Labs",
    githubUrl: "https://github.com/vercel-labs/agent-browser",
    docsUrl: "https://www.skills.sh/vercel-labs/agent-browser/agent-browser",
    safetyNotes: [
      "Can interact with live websites and authenticated browser profiles.",
      "Review form submissions and account-changing actions before execution.",
      "Use cloud or proxy sessions only when network routing is expected.",
    ],
    files: [
      { path: "SKILL.md", description: "Discovery stub and core workflow entrypoint." },
      { path: "agent-browser skills get core", description: "CLI-loaded full command reference." },
    ],
    readme: [
      "Use this skill when an agent needs durable browser state across a multi-step task.",
      "It supports screenshots, accessibility snapshots, JavaScript execution, and data extraction workflows.",
    ],
    featured: true,
  },
  {
    slug: "web-design-guidelines",
    name: "Web Design Guidelines",
    shortDescription:
      "Audits UI code against Vercel's web interface guidelines for design and accessibility.",
    longDescription:
      "Web Design Guidelines helps agents review interface code against a current rule source, returning terse file and line findings for design, accessibility, and UX problems.",
    category: "Design",
    tags: ["ui-review", "accessibility", "frontend", "vercel", "quality"],
    supportedAgents: ["Claude Code", "Codex", "Cursor", "Windsurf"],
    downloads: 378700,
    rating: 4.7,
    lastUpdated: "2026-06-06",
    license: "MIT",
    version: "1.0.0",
    author: "Vercel Labs",
    githubUrl: "https://github.com/vercel-labs/agent-skills",
    docsUrl: "https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines",
    safetyNotes: [
      "Fetches remote guidelines before review.",
      "Produces review findings only; does not rewrite files by itself.",
      "Best used with explicit file paths or globs.",
    ],
    files: [
      { path: "SKILL.md", description: "Review workflow and guideline source." },
      { path: "command.md", description: "Remote web interface guideline rule source." },
    ],
    readme: [
      "Use this skill before shipping a web UI or after a visual redesign.",
      "It helps catch practical interface defects in a quick file:line format.",
    ],
  },
  {
    slug: "remotion-best-practices",
    name: "Remotion Best Practices",
    shortDescription:
      "Domain-specific guidance for building videos with Remotion and React.",
    longDescription:
      "Remotion Best Practices gives agents rules for Remotion projects, covering animations, audio, assets, charts, text, transitions, metadata, media inspection, and parametrized compositions.",
    category: "Design",
    tags: ["remotion", "video", "react", "animation", "media"],
    supportedAgents: ["Claude Code", "Codex", "Cursor", "Windsurf"],
    downloads: 360900,
    rating: 4.7,
    lastUpdated: "2026-06-04",
    license: "MIT",
    version: "1.0.0",
    author: "Remotion",
    githubUrl: "https://github.com/remotion-dev/skills",
    docsUrl: "https://www.skills.sh/remotion-dev/skills/remotion-best-practices",
    safetyNotes: [
      "May scaffold or modify Remotion project files when asked.",
      "Media inspection and FFmpeg steps should be run locally for private assets.",
      "Generated video output should be reviewed visually before delivery.",
    ],
    files: [
      { path: "SKILL.md", description: "Main Remotion workflow." },
      { path: "rules/*.md", description: "Topic rules for media, animation, audio, and composition." },
    ],
    readme: [
      "Use this skill when writing or reviewing Remotion code.",
      "It brings Remotion-specific patterns into React video generation work.",
    ],
  },
  {
    slug: "grill-me",
    name: "Grill Me",
    shortDescription:
      "Stress-tests plans and designs through systematic questioning before implementation.",
    longDescription:
      "Grill Me interviews a developer about a plan, explores code when possible, and walks through decision branches until design risks and missing assumptions are exposed.",
    category: "Productivity",
    tags: ["planning", "architecture", "review", "questions"],
    supportedAgents: ["Claude Code", "Codex", "Cursor", "Windsurf"],
    downloads: 290400,
    rating: 4.8,
    lastUpdated: "2026-06-07",
    license: "MIT",
    version: "1.0.0",
    author: "Matt Pocock",
    githubUrl: "https://github.com/mattpocock/skills",
    docsUrl: "https://www.skills.sh/mattpocock/skills/grill-me",
    safetyNotes: [
      "Read-only exploration unless paired with another implementation skill.",
      "Can produce many questions; keep scope bounded for short tasks.",
    ],
    files: [
      { path: "SKILL.md", description: "Questioning workflow for plan review." },
    ],
    readme: [
      "Use this skill before implementing a large or ambiguous plan.",
      "It is strongest when the next costliest mistake is hidden product or architecture ambiguity.",
    ],
  },
  {
    slug: "improve-codebase-architecture",
    name: "Improve Codebase Architecture",
    shortDescription:
      "Finds architectural friction and proposes deeper module interfaces for better maintainability.",
    longDescription:
      "Improve Codebase Architecture explores a codebase for shallow modules, coupling, and testability pain, then proposes refactors grounded in deep module design and concrete trade-offs.",
    category: "Coding",
    tags: ["architecture", "refactoring", "testing", "modules", "rfc"],
    supportedAgents: ["Claude Code", "Codex", "Cursor"],
    downloads: 236700,
    rating: 4.8,
    lastUpdated: "2026-06-08",
    license: "MIT",
    version: "1.0.0",
    author: "Matt Pocock",
    githubUrl: "https://github.com/mattpocock/skills",
    docsUrl: "https://www.skills.sh/mattpocock/skills/improve-codebase-architecture",
    safetyNotes: [
      "Produces architectural recommendations before code changes.",
      "Refactors should be backed by tests or focused verification.",
      "Large changes should be split into reviewable increments.",
    ],
    files: [
      { path: "SKILL.md", description: "Architecture exploration and refactor proposal workflow." },
      { path: "LANGUAGE.md", description: "Shared glossary for module-depth terminology." },
    ],
    readme: [
      "Use this skill when a codebase feels hard to change or hard for agents to navigate.",
      "It focuses on module depth, locality, testability, and explicit interfaces.",
    ],
  },
  {
    slug: "tdd",
    name: "TDD",
    shortDescription:
      "Behavior-first test-driven development using vertical slices and red-green-refactor loops.",
    longDescription:
      "TDD guides agents through one behavior at a time: plan the public interface, write a failing behavior-focused test, implement minimally, verify, and refactor only after tests pass.",
    category: "Coding",
    tags: ["tdd", "testing", "refactor", "integration-tests"],
    supportedAgents: ["Claude Code", "Codex", "Cursor", "Windsurf"],
    downloads: 224100,
    rating: 4.8,
    lastUpdated: "2026-06-07",
    license: "MIT",
    version: "1.0.0",
    author: "Matt Pocock",
    githubUrl: "https://github.com/mattpocock/skills",
    docsUrl: "https://www.skills.sh/mattpocock/skills/tdd",
    safetyNotes: [
      "Avoids testing private implementation details.",
      "Encourages one failing test and one implementation slice at a time.",
      "Refactoring waits until the behavior is green.",
    ],
    files: [
      { path: "SKILL.md", description: "TDD philosophy and workflow." },
      { path: "tests.md", description: "Examples of behavior-focused tests." },
      { path: "mocking.md", description: "Mocking guidance." },
    ],
    readme: [
      "Use this skill when adding behavior where regressions matter.",
      "It keeps test design tied to public behavior instead of implementation shape.",
    ],
  },
  {
    slug: "supabase-postgres-best-practices",
    name: "Supabase Postgres Best Practices",
    shortDescription:
      "Performance and schema guidance for Supabase Postgres projects.",
    longDescription:
      "Supabase Postgres Best Practices helps agents write SQL, design schemas, tune indexes, review performance issues, configure pooling, and handle Row-Level Security for Postgres-backed apps.",
    category: "Data Analysis",
    tags: ["supabase", "postgres", "sql", "database", "rls"],
    supportedAgents: ["Claude Code", "Codex", "Cursor", "Windsurf"],
    downloads: 220900,
    rating: 4.7,
    lastUpdated: "2026-06-05",
    license: "MIT",
    version: "1.0.0",
    author: "Supabase",
    githubUrl: "https://github.com/supabase/agent-skills",
    docsUrl: "https://www.skills.sh/supabase/agent-skills/supabase-postgres-best-practices",
    safetyNotes: [
      "Review generated migrations before applying them.",
      "RLS and permission changes should be tested with multiple roles.",
      "Production database changes need backups and rollback plans.",
    ],
    files: [
      { path: "SKILL.md", description: "Postgres performance and schema rule set." },
    ],
    readme: [
      "Use this skill for Supabase schema work, SQL review, and database performance tuning.",
      "It prioritizes practical Postgres rules by operational impact.",
    ],
  },
  {
    slug: "shadcn",
    name: "shadcn/ui",
    shortDescription:
      "Component lifecycle guidance for adding, searching, fixing, styling, and composing shadcn/ui.",
    longDescription:
      "shadcn/ui helps agents manage components, inspect project context, add registry components, merge updates, and follow rules for forms, composition, semantic color, spacing, icons, and Tailwind usage.",
    category: "Design",
    tags: ["shadcn", "react", "tailwind", "components", "ui"],
    supportedAgents: ["Claude Code", "Codex", "Cursor", "Windsurf"],
    downloads: 183400,
    rating: 4.7,
    lastUpdated: "2026-06-06",
    license: "MIT",
    version: "1.0.0",
    author: "shadcn",
    githubUrl: "https://github.com/shadcn/ui",
    docsUrl: "https://www.skills.sh/shadcn/ui/shadcn",
    safetyNotes: [
      "Contains shell command directives and should be reviewed before installing.",
      "CLI component additions modify project source files.",
      "Dry-run and diff modes are recommended before merging upstream changes.",
    ],
    files: [
      { path: "SKILL.md", description: "Component management and usage rules." },
      { path: "npx shadcn@latest info --json", description: "Project context command used by the skill." },
    ],
    readme: [
      "Use this skill when working with shadcn/ui components in React apps.",
      "It keeps component additions aligned with project config and registry conventions.",
    ],
  },
  {
    slug: "docx",
    name: "DOCX",
    shortDescription:
      "Create, read, edit, and manipulate Word documents with full formatting control.",
    longDescription:
      "DOCX gives agents workflows for generating and editing .docx files, handling XML-level changes, tracked changes, comments, document analysis, legacy conversion, tables, images, headers, footers, and professional formatting.",
    category: "File Operations",
    tags: ["docx", "word", "documents", "formatting", "xml"],
    supportedAgents: ["Claude Code", "Codex", "Document agents"],
    downloads: 120300,
    rating: 4.7,
    lastUpdated: "2026-06-03",
    license: "Repository license",
    version: "1.0.0",
    author: "Anthropic",
    githubUrl: "https://github.com/anthropics/skills",
    docsUrl: "https://www.skills.sh/anthropics/skills/docx",
    safetyNotes: [
      "Inspect generated documents visually before delivery.",
      "Preserve existing template styles when editing established documents.",
      "Tracked changes and comments should be intentional and reviewable.",
    ],
    files: [
      { path: "SKILL.md", description: "DOCX creation, editing, and analysis workflow." },
      { path: "references/", description: "Document formatting and XML reference material." },
    ],
    readme: [
      "Use this skill for Word document generation, revision, and structural inspection.",
      "It treats .docx files as XML packages when targeted edits are needed.",
    ],
  },
  {
    slug: "xlsx",
    name: "XLSX",
    shortDescription:
      "Create, edit, and analyze Excel spreadsheets with formulas, formatting, and recalculation checks.",
    longDescription:
      "XLSX helps agents work with .xlsx, .xlsm, .csv, and .tsv files using pandas, openpyxl, and LibreOffice recalculation, with checks for formula errors and financial-model formatting conventions.",
    category: "Data Analysis",
    tags: ["excel", "spreadsheets", "formulas", "csv", "finance"],
    supportedAgents: ["Claude Code", "Codex", "Spreadsheet agents"],
    downloads: 106300,
    rating: 4.7,
    lastUpdated: "2026-06-03",
    license: "Repository license",
    version: "1.0.0",
    author: "Anthropic",
    githubUrl: "https://github.com/anthropics/skills",
    docsUrl: "https://www.skills.sh/anthropics/skills/xlsx",
    safetyNotes: [
      "All formulas should be recalculated and checked for errors.",
      "Existing spreadsheet conventions override generic formatting rules.",
      "Hardcoded assumptions should be documented clearly.",
    ],
    files: [
      { path: "SKILL.md", description: "Spreadsheet output and validation requirements." },
      { path: "scripts/", description: "Helpers for rendering, recalculation, and validation." },
    ],
    readme: [
      "Use this skill for spreadsheet analysis, model building, and Excel deliverables.",
      "It emphasizes formula correctness and professional workbook formatting.",
    ],
  },
  {
    slug: "webapp-testing",
    name: "Webapp Testing",
    shortDescription:
      "Native Playwright workflows for testing local web apps with server lifecycle management.",
    longDescription:
      "Webapp Testing guides agents to test rendered web applications using Python Playwright scripts, server lifecycle helpers, screenshot reconnaissance, selector discovery, DOM inspection, and console log capture.",
    category: "Browser Automation",
    tags: ["playwright", "testing", "webapp", "qa", "screenshots"],
    supportedAgents: ["Claude Code", "Codex", "Browser agents"],
    downloads: 92300,
    rating: 4.6,
    lastUpdated: "2026-06-04",
    license: "Repository license",
    version: "1.0.0",
    author: "Anthropic",
    githubUrl: "https://github.com/anthropics/skills",
    docsUrl: "https://www.skills.sh/anthropics/skills/webapp-testing",
    safetyNotes: [
      "Local servers started for tests should be stopped after verification.",
      "Use safe test accounts for any authenticated flows.",
      "Avoid real transactions or destructive form submissions.",
    ],
    files: [
      { path: "SKILL.md", description: "Web application testing workflow." },
      { path: "scripts/with_server.py", description: "Server lifecycle helper for Playwright tests." },
    ],
    readme: [
      "Use this skill after frontend changes that need real browser verification.",
      "It favors inspect-first automation over guessing selectors.",
    ],
  },
  {
    slug: "sentry-cli",
    name: "Sentry CLI",
    shortDescription:
      "Query and manage Sentry issues, projects, organizations, logs, spans, and traces from the command line.",
    longDescription:
      "Sentry CLI helps agents inspect production issues, events, projects, dashboards, repositories, teams, logs, spans, traces, and API resources with JSON output and built-in issue explanation workflows.",
    category: "DevOps",
    tags: ["sentry", "observability", "errors", "logs", "tracing"],
    supportedAgents: ["Claude Code", "Codex", "Ops agents"],
    downloads: 73300,
    rating: 4.5,
    lastUpdated: "2026-06-02",
    license: "Repository license",
    version: "1.0.0",
    author: "Sentry",
    githubUrl: "https://github.com/getsentry/cli",
    docsUrl: "https://www.skills.sh/sentry/dev/sentry-cli",
    safetyNotes: [
      "Requires access to a Sentry account or configured project.",
      "Prefer read-only investigation commands before mutating project settings.",
      "Redact sensitive event data before sharing summaries.",
    ],
    files: [
      { path: "SKILL.md", description: "Sentry CLI usage guide for agents." },
      { path: "sentry schema", description: "Interactive API schema discovery command." },
    ],
    readme: [
      "Use this skill when debugging production errors or traces in Sentry.",
      "It encourages CLI-native issue inspection before raw API calls.",
    ],
  },
  {
    slug: "mcp-builder",
    name: "MCP Builder",
    shortDescription:
      "Build high-quality MCP servers that connect LLMs to external services.",
    longDescription:
      "MCP Builder gives agents a four-phase workflow for researching, implementing, testing, and evaluating MCP servers, with guidance for schemas, pagination, tool naming, annotations, and verifiable eval questions.",
    category: "Coding",
    tags: ["mcp", "tools", "typescript", "python", "agents"],
    supportedAgents: ["Claude Code", "Codex", "MCP builders"],
    downloads: 71900,
    rating: 4.6,
    lastUpdated: "2026-06-01",
    license: "Repository license",
    version: "1.0.0",
    author: "Anthropic",
    githubUrl: "https://github.com/anthropics/skills",
    docsUrl: "https://www.skills.sh/anthropics/skills/mcp-builder",
    safetyNotes: [
      "External-service integrations need least-privilege credentials.",
      "Destructive and open-world tools should be annotated clearly.",
      "Evaluation questions should be read-only and independently verifiable.",
    ],
    files: [
      { path: "SKILL.md", description: "MCP server development guide." },
      { path: "references/", description: "Protocol, SDK, and implementation references." },
    ],
    readme: [
      "Use this skill when creating an MCP server for an API or SaaS product.",
      "It focuses on tool coverage, schema quality, and agent-usable errors.",
    ],
  },
  {
    slug: "next-best-practices",
    name: "Next.js Best Practices",
    shortDescription:
      "Current Next.js guidance for file structure, RSC boundaries, data fetching, optimization, and errors.",
    longDescription:
      "Next.js Best Practices helps agents write and review Next.js apps using App Router conventions, route segments, React Server Component boundaries, metadata, image and font optimization, route handlers, Suspense, caching, and deployment patterns.",
    category: "Coding",
    tags: ["nextjs", "react", "app-router", "rsc", "performance"],
    supportedAgents: ["Claude Code", "Codex", "Cursor", "Windsurf"],
    downloads: 103000,
    rating: 4.6,
    lastUpdated: "2026-06-06",
    license: "MIT",
    version: "1.0.0",
    author: "Vercel Labs",
    githubUrl: "https://github.com/vercel-labs/next-skills",
    docsUrl: "https://www.skills.sh/vercel-labs/next-skills/next-best-practices",
    safetyNotes: [
      "Next.js conventions change quickly; verify against the installed framework version.",
      "Runtime and caching changes should be tested with production builds.",
      "Hydration and RSC boundary fixes need browser verification.",
    ],
    files: [
      { path: "SKILL.md", description: "Next.js best-practice entrypoint." },
      { path: "file-conventions.md", description: "Route and file convention reference." },
    ],
    readme: [
      "Use this skill for modern Next.js App Router implementation and review.",
      "It is especially useful when framework conventions differ across versions.",
    ],
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

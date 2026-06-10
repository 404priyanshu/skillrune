import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Download,
  FileJson,
  Search,
  ShieldCheck,
  Sparkles,
  Award,
  BookMarked,
  Scroll,
} from "lucide-react";
import { RuneMark } from "@/components/RuneMark";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsBrowser } from "@/app/skills/SkillsBrowser";
import { HeroConsole } from "@/components/HeroConsole";
import { categories, skills } from "@/lib/skills";

const newestSkills = [...skills]
  .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
  .slice(0, 5);
const popularSkills = [...skills].sort((a, b) => b.downloads - a.downloads).slice(0, 5);

const quickStats = [
  { label: "Equippable Runes", value: skills.length },
  { label: "Study Categories", value: categories.length },
  {
    label: "Total Equips",
    value: `${Math.round(skills.reduce((sum, skill) => sum + skill.downloads, 0) / 1000)}k+`,
  },
];

const registryNotes = [
  {
    icon: Scroll,
    title: "Inspectable Manifests",
    text: "Examine execution parameters and file boundaries before installing.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Auditing",
    text: "Clear warnings for network rules, write scopes, and potential risks.",
  },
  {
    icon: Download,
    title: "One-Click Equip",
    text: "Equip your agent immediately via simple CLI manifest fetch.",
  },
];

const agents = [
  { name: "Antigravity", file: "antigravity.svg" },
  { name: "Claude Code", file: "claude-code.svg" },
  { name: "Cursor", file: "cursor.svg" },
  { name: "Gemini", file: "gemini.svg" },
  { name: "GitHub Copilot", file: "copilot.svg" },
  { name: "Cline", file: "cline.svg" },
  { name: "Roo Code", file: "roo.svg" },
  { name: "Windsurf", file: "windsurf.svg" },
  { name: "Trae", file: "trae.svg" },
  { name: "Zed", file: "zed.svg" },
  { name: "VS Code", file: "vscode.svg" },
  { name: "AMP", file: "amp.svg" },
  { name: "ClawdBot", file: "clawdbot.svg" },
  { name: "Droid", file: "droid.svg" },
  { name: "Goose", file: "goose.svg" },
  { name: "Kilo", file: "kilo.svg" },
  { name: "Kiro CLI", file: "kiro-cli.svg" },
  { name: "Nous Research", file: "nous-research.svg" },
  { name: "OpenCode", file: "opencode.svg" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--parchment)]">
        {/* Hero Section */}
        <section className="border-b border-[var(--border-soft)] relative overflow-hidden bg-radial from-[var(--ivory)] to-[var(--parchment)] py-12 lg:py-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* Left Column: Branding and Intro */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--ivory)] px-3.5 py-1.5 font-ui text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--stone)] shadow-sm">
                  <RuneMark className="h-5 w-5" />
                  <span>The Scholar's Agent Registry · Beta v0.1.0</span>
                </div>
                
                {/* Large ASCII Art Logo */}
                <div className="relative overflow-hidden select-none font-mono text-[8px] leading-[1.15] sm:text-[9px] md:text-[10px] text-[var(--brand)] max-w-full">
                  <pre className="tracking-tight font-bold">
{`███████  ██  ██  ██  ██       ██       ██████   ██    ██  ███   ██  ███████
██       ██ ██   ██  ██       ██       ██   ██  ██    ██  ████  ██  ██     
███████  ████    ██  ██       ██       ██████   ██    ██  ██ ██ ██  █████  
     ██  ██ ██   ██  ██       ██       ██   ██  ██    ██  ██  ████  ██     
███████  ██  ██  ██  ███████  ███████  ██   ██   ██████   ██   ███  ███████`}
                  </pre>
                </div>

                <h1 className="font-serif text-3xl font-medium leading-tight text-[var(--near-black)] sm:text-4xl lg:text-5xl">
                  Equip reusable capabilities on AI agents.
                </h1>
                
                <p className="max-w-xl text-base leading-7 text-[var(--olive)] sm:text-lg">
                  SkillRune is a ledger of certified instruction manifests and utility scripts. Equip your agents with advanced tools, safety checks, and workflow protocols.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row pt-2">
                  <Link
                    href="/skills"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 font-serif text-sm font-medium text-[var(--ivory)] shadow transition-all duration-200 hover:bg-[var(--brand-light)] hover:shadow-md active:scale-95 cursor-pointer"
                  >
                    <Search className="h-4 w-4" />
                    Inspect Runes
                  </Link>
                  <Link
                    href="/submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--brand)] bg-[var(--ivory)] px-6 py-3 font-serif text-sm font-medium text-[var(--brand)] shadow-sm transition-all duration-200 hover:bg-[var(--brand-tint)] active:scale-95 cursor-pointer"
                  >
                    <Sparkles className="h-4 w-4" />
                    Share a Rune
                  </Link>
                </div>
              </div>

              {/* Right Column: Console and Quick Stats */}
              <div className="flex flex-col items-center lg:items-end gap-8">
                {/* Typing Console */}
                <div className="w-full flex justify-center lg:justify-end">
                  <HeroConsole />
                </div>

                {/* Quick Stats Banner */}
                <div className="grid w-full grid-cols-3 gap-1 rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-1.5 shadow-sm sm:max-w-[420px]">
                  {quickStats.map((stat) => (
                    <div key={stat.label} className="px-2 py-3 text-center border-r border-[var(--border-soft)] last:border-r-0">
                      <div className="font-serif text-xl sm:text-2xl font-bold text-[var(--brand)]">
                        {stat.value}
                      </div>
                      <div className="mt-1 font-ui text-[10px] uppercase font-bold tracking-wider text-[var(--stone)]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Agents Marquee Section */}
        <section className="py-6 border-b border-[var(--border-soft)] bg-[var(--ivory)]/40 overflow-hidden">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="text-[10px] font-ui font-bold tracking-[0.15em] text-[var(--stone)] uppercase text-center mb-4">
              Compatible with major agent frameworks
            </h2>
            <div className="relative w-full overflow-hidden flex">
              {/* Fade overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--parchment)] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--parchment)] to-transparent z-10 pointer-events-none"></div>
              
              <div className="animate-carousel flex items-center gap-10">
                {/* Set 1 */}
                {agents.map((agent, i) => (
                  <img
                    key={`agent-a-${i}`}
                    src={`/agents/${agent.file}`}
                    alt={agent.name}
                    title={agent.name}
                    className="h-10 sm:h-12 lg:h-14 w-auto object-contain flex-shrink-0 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
                  />
                ))}
                {/* Set 2 (for seamless loop) */}
                {agents.map((agent, i) => (
                  <img
                    key={`agent-b-${i}`}
                    src={`/agents/${agent.file}`}
                    alt={agent.name}
                    title={agent.name}
                    className="h-10 sm:h-12 lg:h-14 w-auto object-contain flex-shrink-0 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leaderboard Section */}
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-ui text-xs font-bold uppercase tracking-[0.1em] text-[var(--brand-light)]">
                Registry Leaderboard
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium text-[var(--near-black)]">
                Most active agent capabilities.
              </h2>
            </div>
            <Link
              href="/docs/package-format"
              className="inline-flex items-center gap-1.5 self-start font-ui text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-light)] transition-colors"
            >
              Package Specifications
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <SkillsBrowser compact />
        </section>

        {/* Feature Highlights Grid */}
        <section className="border-y border-[var(--border-soft)] bg-[var(--ivory)]/60 py-12">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-3">
            {registryNotes.map((item) => (
              <article key={item.title} className="flex gap-4 p-4 rounded-xl hover:bg-[var(--parchment)]/30 transition-all duration-200">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--parchment)] text-[var(--brand)] shadow-sm">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[var(--near-black)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--olive)]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <div className="rounded-xl border border-[var(--line)] bg-[var(--ivory)] p-6 md:p-8 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-8 gold-illuminate">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[var(--near-black)]">
                Author a new agent rune?
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--olive)]">
                Create a structured manifest containing safety notes, files, and executable parameters to share.
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:mt-0 sm:flex-row shrink-0">
              <Link
                href="/submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-5 py-2.5 font-serif text-sm font-medium text-[var(--ivory)] transition-all duration-200 hover:bg-[var(--brand-light)] hover:shadow active:scale-95"
              >
                Submit Rune
              </Link>
              <Link
                href="/docs/package-format"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--brand)] px-5 py-2.5 font-serif text-sm font-medium text-[var(--brand)] hover:bg-[var(--brand-tint)] transition-all duration-200 active:scale-95"
              >
                <BookOpen className="h-4 w-4" />
                Read Specifications
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

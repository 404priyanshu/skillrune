import Link from "next/link";
import { ArrowRight, Boxes } from "lucide-react";
import { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { categories, skills } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse SkillRune categories for coding, research, automation, DevOps, security, design, writing, and more.",
};

const categoryDescriptions: Record<string, string> = {
  Coding: "Repo maps, tests, refactors, API docs, and code review workflows.",
  Research: "Source capture, synthesis, citations, and evidence-first summaries.",
  "File Operations": "PDFs, documents, archives, metadata, and local file workflows.",
  "Browser Automation": "Rendered pages, form checks, screenshots, and browser QA.",
  "Data Analysis": "CSV, spreadsheets, profiling, charting, and structured analysis.",
  Writing: "Documentation, release notes, summaries, and editorial workflows.",
  Design: "Interface critique, visual QA, accessibility, and frontend review.",
  DevOps: "Deployments, logs, CI failures, changelogs, and incident triage.",
  Security: "Threat modeling, permission review, secret handling, and abuse cases.",
  Productivity: "Inbox triage, tasks, calendar support, and workflow cleanup.",
  Education: "Tutoring, drills, examples, and review prompts.",
};

export default function CategoriesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="mb-10">
          <p className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--brand)]">
            Categories
          </p>
          <h1 className="mt-3 font-serif text-5xl font-medium tracking-normal text-[var(--near-black)] sm:text-6xl">
            Browse by capability shape.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--olive)]">
            Each shelf starts small, but every listing is designed to expose the
            metadata developers need before equipping an agent.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const categorySkills = skills.filter((skill) => skill.category === category);
            return (
              <Link
                href={`/skills?category=${encodeURIComponent(category)}`}
                key={category}
                className="group rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-6 transition-all duration-300 hover:-translate-y-1 gold-illuminate"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--parchment)] text-[var(--brand)] shadow-sm">
                    <Boxes className="h-5 w-5" />
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--parchment)] text-[var(--stone)] transition group-hover:bg-[var(--brand-tint)] group-hover:text-[var(--brand)]">
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-2 border-b border-[var(--border-soft)] pb-2 mb-3">
                  <h2 className="font-serif text-2xl font-bold text-[var(--near-black)]">
                    {category}
                  </h2>
                  <span className="font-mono text-xs font-bold text-[var(--stone)] bg-[var(--parchment)] border border-[var(--border)] rounded px-1.5 py-0.5">
                    {categorySkills.length} runes
                  </span>
                </div>
                <p className="min-h-[72px] text-sm leading-6 text-[var(--olive)] font-ui">
                  {categoryDescriptions[category]}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {categorySkills.length > 0 ? (
                    categorySkills.slice(0, 3).map((skill) => (
                      <span
                        key={skill.slug}
                        className="rounded-full bg-[var(--brand-tint)] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--brand)] border border-[var(--border-soft)]"
                      >
                        {skill.name}
                      </span>
                    ))
                  ) : (
                    <span className="rounded-full bg-[var(--parchment)] px-2.5 py-0.5 font-ui text-[10px] uppercase font-bold tracking-wider text-[var(--stone)] border border-[var(--border-soft)]">
                      Awaiting first rune
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

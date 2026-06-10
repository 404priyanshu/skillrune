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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const categorySkills = skills.filter((skill) => skill.category === category);
            return (
              <Link
                href={`/skills?category=${encodeURIComponent(category)}`}
                key={category}
                className="group rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-6 transition hover:-translate-y-0.5 hover:border-[var(--line)] hover:shadow-[0_10px_30px_rgba(20,19,19,0.07)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <Boxes className="h-5 w-5 text-[var(--brand)]" />
                  <ArrowRight className="h-4 w-4 text-[var(--stone)] transition group-hover:translate-x-0.5 group-hover:text-[var(--brand)]" />
                </div>
                <h2 className="mt-6 font-serif text-2xl font-medium text-[var(--near-black)]">
                  {category}
                </h2>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-[var(--olive)]">
                  {categoryDescriptions[category]}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {categorySkills.length > 0 ? (
                    categorySkills.slice(0, 3).map((skill) => (
                      <span
                        key={skill.slug}
                        className="rounded-full bg-[var(--brand-tint)] px-2.5 py-1 font-ui text-xs text-[var(--brand)]"
                      >
                        {skill.name}
                      </span>
                    ))
                  ) : (
                    <span className="rounded-full bg-[var(--warm-sand)] px-2.5 py-1 font-ui text-xs text-[var(--stone)]">
                      Awaiting first skill
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

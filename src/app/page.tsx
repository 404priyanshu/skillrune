import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Download,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { RuneMark } from "@/components/RuneMark";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillCard } from "@/components/SkillCard";
import { categories, skills } from "@/lib/skills";

const featuredSkills = skills.filter((skill) => skill.featured).slice(0, 4);

const workflow = [
  {
    title: "Discover useful agent skills",
    description: "Browse by category, tag, support surface, rating, and download activity.",
  },
  {
    title: "Inspect instructions and files",
    description: "Read the README preview, file tree, compatibility details, and safety notes.",
  },
  {
    title: "Download or copy install instructions",
    description: "Use the planned command shape: skillrune install <slug>.",
  },
  {
    title: "Equip your agent and start using it",
    description: "Bring reusable workflows into coding, research, browser, and automation agents.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 lg:pb-24 lg:pt-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_460px] lg:items-center">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3 font-ui text-xs uppercase tracking-[0.08em] text-[var(--stone)]">
                <RuneMark className="h-8 w-8" />
                <span>SkillRune · v0.1 registry concept</span>
              </div>
              <h1 className="max-w-4xl font-serif text-6xl font-medium leading-[1.03] tracking-normal text-[var(--near-black)] sm:text-7xl lg:text-8xl">
                Reusable skills for AI agents.
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-[var(--olive)]">
                Discover, inspect, and download agent skills that give models new
                capabilities.
              </p>
              <div className="mt-7 flex flex-wrap gap-5 font-ui text-sm text-[var(--stone)]">
                <span>
                  <b className="font-medium text-[var(--dark-warm)]">12</b> seed skills
                </span>
                <span>
                  <b className="font-medium text-[var(--dark-warm)]">11</b> categories
                </span>
                <span>
                  <b className="font-medium text-[var(--dark-warm)]">1 command</b>{" "}
                  install pattern
                </span>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/skills"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-7 py-3.5 font-serif text-base font-medium text-[var(--ivory)] transition hover:bg-[var(--brand-light)]"
                >
                  Browse Skills
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/submit"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--brand)] px-7 py-3.5 font-serif text-base font-medium text-[var(--brand)] transition hover:bg-[var(--brand-tint)]"
                >
                  Submit a Skill
                </Link>
              </div>
            </div>

            <div className="screen-frame dark-panel rounded-xl border border-[#2e3545] p-5 text-[#faf9f5]">
              <div className="flex items-center justify-between gap-4 font-ui text-xs text-[#c8c2ad]">
                <span className="flex items-center gap-2 font-serif text-lg text-[#faf9f5]">
                  <RuneMark className="h-7 w-7" />
                  SkillRune
                </span>
                <span>Featured · Newest · Rated</span>
              </div>
              <div className="mt-5 rounded-lg border border-[#303746] bg-[#191d27] px-4 py-3 font-ui text-sm text-[#c8c2ad]">
                Search skills, tags, agents, or workflows
              </div>
              <div className="mt-4 grid gap-3">
                {featuredSkills.slice(0, 3).map((skill) => (
                  <Link
                    href={`/skills/${skill.slug}`}
                    key={skill.slug}
                    className="rounded-lg border border-[#303746] bg-[#181c25] p-4 transition hover:border-[#5a6b8a]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="font-serif text-lg font-medium leading-tight">
                          {skill.name}
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-[#c8c2ad]">
                          {skill.shortDescription}
                        </p>
                      </div>
                      <span className="rounded-full bg-[#202737] px-2.5 py-1 font-ui text-xs text-[#b7c5d7]">
                        {skill.category}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border-soft)]">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-3">
            <div>
              <p className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--brand)]">
                What is a skill?
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-[var(--near-black)]">
                A packaged instruction set for repeatable agent work.
              </h2>
            </div>
            <p className="text-base leading-7 text-[var(--olive)] md:col-span-2">
              A skill is a workflow, script, checklist, template, or capability
              that teaches an AI agent how to perform a specific task reliably.
              SkillRune makes those packages discoverable, inspectable, and easy
              to equip.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--brand)]">
                Featured skills
              </p>
              <h2 className="mt-3 font-serif text-4xl font-medium text-[var(--near-black)]">
                Practical runes for the first catalog.
              </h2>
            </div>
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 font-serif text-base font-medium text-[var(--brand)]"
            >
              View all skills
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredSkills.map((skill) => (
              <SkillCard key={skill.slug} skill={skill} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Search,
                title: "Searchable registry",
                text: "Find skills by name, category, tag, agent support, or workflow shape.",
              },
              {
                icon: BookOpen,
                title: "Inspectable packages",
                text: "Read instructions, files, README previews, safety notes, and metadata.",
              },
              {
                icon: Download,
                title: "Download UX",
                text: "Copy an install command or download a generated skill manifest.",
              },
              {
                icon: ShieldCheck,
                title: "Safety-forward listings",
                text: "Make permissions, network use, file writes, and sharp edges visible.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[var(--border)] bg-[var(--ivory)] p-5"
              >
                <item.icon className="h-5 w-5 text-[var(--brand)]" />
                <h3 className="mt-4 font-serif text-xl font-medium text-[var(--near-black)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--olive)]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--brand)]">
                Categories
              </p>
              <h2 className="mt-3 font-serif text-4xl font-medium text-[var(--near-black)]">
                Start with useful shelves.
              </h2>
              <p className="mt-4 leading-7 text-[var(--olive)]">
                The first taxonomy keeps browsing simple while the product grows
                into fuller search and review workflows.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {categories.slice(0, 8).map((category) => (
                <Link
                  key={category}
                  href={`/skills?category=${encodeURIComponent(category)}`}
                  className="group rounded-lg border border-[var(--border)] bg-[var(--ivory)] p-4 transition hover:border-[var(--line)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-serif text-lg font-medium text-[var(--brand)]">
                      {category}
                    </span>
                    <ArrowRight className="h-4 w-4 text-[var(--stone)] transition group-hover:translate-x-0.5 group-hover:text-[var(--brand)]" />
                  </div>
                  <p className="mt-2 font-ui text-xs text-[var(--stone)]">
                    {skills.filter((skill) => skill.category === category).length} seed skills
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="rounded-xl border border-[var(--line)] bg-[var(--ivory)] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--brand)]">
                  How it works
                </p>
                <h2 className="mt-3 font-serif text-4xl font-medium text-[var(--near-black)]">
                  From registry to equipped agent.
                </h2>
              </div>
              <ol className="grid gap-4">
                {workflow.map((step, index) => (
                  <li
                    key={step.title}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--border-soft)] pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="font-serif text-xl font-medium text-[var(--brand)]">
                      {index + 1}
                    </span>
                    <span>
                      <b className="block font-serif text-lg font-medium text-[var(--near-black)]">
                        {step.title}
                      </b>
                      <span className="mt-1 block text-sm leading-6 text-[var(--olive)]">
                        {step.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8">
          <div className="dark-panel rounded-xl border border-[#2e3545] p-8 text-[#faf9f5] sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="font-ui text-xs uppercase tracking-[0.08em] text-[#b7c5d7]">
                  MVP demo
                </p>
                <h2 className="mt-3 font-serif text-4xl font-medium">
                  Browse the seed registry.
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-[#c8c2ad]">
                  Search, filter, inspect detail pages, download a generated
                  skill manifest, and submit a future skill for review.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/skills"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#faf9f5] px-6 py-3 font-serif text-sm font-medium text-[var(--brand)]"
                >
                  <Boxes className="h-4 w-4" />
                  Browse Skills
                </Link>
                <Link
                  href="/submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#5a6b8a] px-6 py-3 font-serif text-sm font-medium text-[#faf9f5] transition hover:bg-[#202737]"
                >
                  <Sparkles className="h-4 w-4" />
                  Submit a Skill
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

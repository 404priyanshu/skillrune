import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Braces, FileJson, ShieldCheck } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createSkillManifest } from "@/lib/skill-package";
import { skills } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Skill Package Format",
  description:
    "SkillRune package manifest format for reusable AI agent skills.",
};

const exampleManifest = createSkillManifest(skills[1]);

export default function PackageFormatPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="min-w-0">
            <p className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--brand)]">
              Package format
            </p>
            <h1 className="mt-3 font-serif text-5xl font-medium leading-tight text-[var(--near-black)] sm:text-6xl">
              One manifest every agent can inspect.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--olive)]">
              SkillRune v0.1 packages expose a small JSON contract: identity,
              compatibility, install command, source links, safety notes, and
              files. It is deliberately boring so humans and agents can audit it.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                {
                  icon: Braces,
                  title: "schemaVersion",
                  text: "Starts at 0.1. Consumers can reject unknown future formats.",
                },
                {
                  icon: FileJson,
                  title: "source + install",
                  text: "Repository, docs URL, and command live beside metadata.",
                },
                {
                  icon: ShieldCheck,
                  title: "safety.notes",
                  text: "Risk notes stay part of the package, not hidden in prose.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-[var(--border)] bg-[var(--ivory)] p-5"
                >
                  <item.icon className="h-5 w-5 text-[var(--brand)]" />
                  <h2 className="mt-3 font-serif text-xl font-medium text-[var(--near-black)]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--olive)]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="min-w-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-5">
            <div className="flex flex-col gap-3 border-b border-[var(--border-soft)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--stone)]">
                  Example
                </p>
                <h2 className="mt-1 font-serif text-2xl font-medium text-[var(--near-black)]">
                  Repo Cartographer manifest
                </h2>
              </div>
              <Link
                href="/api/skills/repo-cartographer/manifest"
                className="inline-flex items-center gap-2 font-ui text-sm text-[var(--brand)]"
              >
                JSON route
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <pre className="mt-5 max-h-[720px] w-full max-w-full overflow-auto rounded-lg bg-[var(--dark-panel)] p-5 font-mono text-xs leading-6 text-[#d8d5c8]">
              {JSON.stringify(exampleManifest, null, 2)}
            </pre>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

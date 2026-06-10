import { Suspense } from "react";
import { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsBrowser } from "@/app/skills/SkillsBrowser";

export const metadata: Metadata = {
  title: "Browse Skills",
  description:
    "Search and filter the SkillRune registry by category, tag, rating, downloads, and supported agents.",
};

export default async function SkillsPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const initialCategory = params?.category ?? "All";

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="mb-8">
          <p className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--brand)]">
            Browse
          </p>
          <h1 className="mt-3 font-serif text-5xl font-medium tracking-normal text-[var(--near-black)] sm:text-6xl">
            Find a skill your agent can equip.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--olive)]">
            Search the seed registry, compare metadata, and open a skill detail
            page before downloading or copying install instructions.
          </p>
        </div>
        <Suspense fallback={<div className="rounded-lg bg-[var(--ivory)] p-8">Loading skills...</div>}>
          <SkillsBrowser initialCategory={initialCategory} />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}

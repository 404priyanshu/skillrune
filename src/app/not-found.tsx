import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
        <p className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--brand)]">
          Not found
        </p>
        <h1 className="mt-3 font-serif text-5xl font-medium text-[var(--near-black)]">
          This rune is not in the registry.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--olive)]">
          The skill may be unpublished, misspelled, or waiting for review.
        </p>
        <Link
          href="/skills"
          className="mt-8 rounded-full bg-[var(--brand)] px-6 py-3 font-serif text-sm font-medium text-[var(--ivory)] transition hover:bg-[var(--brand-light)]"
        >
          Browse skills
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}

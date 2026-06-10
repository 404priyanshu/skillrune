import Link from "next/link";
import { GitBranch, Send } from "lucide-react";
import { RuneMark } from "@/components/RuneMark";

const navItems = [
  { href: "/skills", label: "Skills" },
  { href: "/categories", label: "Categories" },
  { href: "/submit", label: "Submit" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--border-soft)] bg-[var(--parchment)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <RuneMark className="h-8 w-8" />
          <span className="font-serif text-xl font-medium tracking-normal text-[var(--near-black)]">
            SkillRune
          </span>
        </Link>
        <nav className="hidden items-center gap-7 font-ui text-xs font-medium uppercase tracking-[0.08em] text-[var(--stone)] md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[var(--brand)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/skillrune"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--olive)] transition hover:bg-[var(--ivory)] hover:text-[var(--brand)] sm:inline-flex"
            aria-label="SkillRune on GitHub"
          >
            <GitBranch className="h-4 w-4" />
          </Link>
          <Link
            href="/submit"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--brand)] bg-[var(--brand)] px-4 py-2 font-serif text-sm font-medium text-[var(--ivory)] transition hover:bg-[var(--brand-light)]"
          >
            <Send className="h-4 w-4" />
            Submit
          </Link>
        </div>
      </div>
    </header>
  );
}

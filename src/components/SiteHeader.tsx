import Link from "next/link";
import { GitBranch, Send } from "lucide-react";
import { RuneMark } from "@/components/RuneMark";

const navItems = [
  { href: "/skills", label: "Skills" },
  { href: "/categories", label: "Categories" },
  { href: "/docs/package-format", label: "Format" },
  { href: "/submit", label: "Submit" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] parchment-glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <RuneMark className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-xl font-medium tracking-tight text-[var(--near-black)] transition-colors group-hover:text-[var(--brand)]">
              SkillRune
            </span>
            <span className="rounded bg-[var(--brand-tint)] border border-[var(--border-soft)] px-1.5 py-0.5 font-mono text-[9px] font-bold text-[var(--brand)] uppercase tracking-wider leading-none">
              Beta v0.1.0
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 font-ui text-xs font-semibold uppercase tracking-[0.1em] text-[var(--stone)] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-1 transition-colors duration-200 hover:text-[var(--brand)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--brand)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/skillrune"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--olive)] transition-all duration-200 hover:bg-[var(--ivory)] hover:text-[var(--brand)] hover:shadow-sm sm:inline-flex"
            aria-label="SkillRune on GitHub"
          >
            <GitBranch className="h-4 w-4" />
          </Link>
          <Link
            href="/submit"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--brand)] bg-[var(--brand)] px-4 py-1.5 font-serif text-sm font-medium text-[var(--ivory)] transition-all duration-200 hover:bg-[var(--brand-light)] hover:shadow-md active:scale-95"
          >
            <Send className="h-3.5 w-3.5" />
            Submit
          </Link>
        </div>
      </div>
    </header>
  );
}

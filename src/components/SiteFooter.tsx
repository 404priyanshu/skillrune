import Link from "next/link";
import { RuneMark } from "@/components/RuneMark";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--ivory)] py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 border-b border-[var(--border-soft)] pb-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-3">
              <RuneMark className="h-8 w-8" />
              <span className="font-serif text-xl font-medium text-[var(--near-black)]">
                SkillRune
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-6 text-[var(--olive)]">
              Discover and equip capabilities for AI agents. Runes provide structured instruction manifests, safety protocols, and automation files.
            </p>
          </div>
          <div>
            <h4 className="font-ui text-xs font-semibold uppercase tracking-[0.1em] text-[var(--stone)] mb-3">Registry</h4>
            <ul className="space-y-2 font-ui text-sm">
              <li>
                <Link href="/skills" className="text-[var(--olive)] hover:text-[var(--brand)] transition-colors">
                  All Runes
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-[var(--olive)] hover:text-[var(--brand)] transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-[var(--olive)] hover:text-[var(--brand)] transition-colors">
                  Submit a Rune
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-ui text-xs font-semibold uppercase tracking-[0.1em] text-[var(--stone)] mb-3">Resources</h4>
            <ul className="space-y-2 font-ui text-sm">
              <li>
                <Link href="/docs/package-format" className="text-[var(--olive)] hover:text-[var(--brand)] transition-colors">
                  Manifest Format
                </Link>
              </li>
              <li>
                <Link href="/static-kami-index.html" className="text-[var(--olive)] hover:text-[var(--brand)] transition-colors">
                  Static Preview
                </Link>
              </li>
              <li>
                <a href="https://github.com/404priyanshu/skillrune" className="text-[var(--olive)] hover:text-[var(--brand)] transition-colors" target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-[var(--stone)]">
          <p>© {new Date().getFullYear()} SkillRune. Built for autonomous systems.</p>
          <p className="italic">A small catalog first. A sharper agent ecosystem next.</p>
        </div>
      </div>
    </footer>
  );
}

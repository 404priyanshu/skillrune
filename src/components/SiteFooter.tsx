import Link from "next/link";
import { RuneMark } from "@/components/RuneMark";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--parchment)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="flex items-start gap-4">
          <RuneMark className="h-12 w-12" />
          <div>
            <p className="font-serif text-2xl font-medium text-[var(--near-black)]">
              SkillRune
            </p>
            <p className="mt-1 text-sm text-[var(--olive)]">
              Equip agents with reusable capabilities.
            </p>
          </div>
        </div>
        <div className="max-w-xl text-left md:text-right">
          <div className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--stone)]">
            <Link href="/skills" className="hover:text-[var(--brand)]">
              Skills
            </Link>
            <span className="mx-2">·</span>
            <Link href="/categories" className="hover:text-[var(--brand)]">
              Categories
            </Link>
            <span className="mx-2">·</span>
            <Link href="/submit" className="hover:text-[var(--brand)]">
              Submit
            </Link>
            <span className="mx-2">·</span>
            <Link href="/docs/package-format" className="hover:text-[var(--brand)]">
              Format
            </Link>
            <span className="mx-2">·</span>
            <Link href="/static-kami-index.html" className="hover:text-[var(--brand)]">
              Static preview
            </Link>
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--olive)]">
            A small catalog first. A sharper agent ecosystem next.
          </p>
        </div>
      </div>
    </footer>
  );
}

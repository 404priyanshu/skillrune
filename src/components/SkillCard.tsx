import Link from "next/link";
import { Download, Star } from "lucide-react";
import { Skill, formatDownloads } from "@/lib/skills";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article className="flex min-h-[290px] flex-col rounded-lg border border-[var(--border)] bg-[var(--ivory)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md gold-illuminate">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.08em] text-[var(--brand-light)]">
            {skill.category}
          </span>
          <h3 className="mt-1.5 font-serif text-xl font-medium leading-tight text-[var(--near-black)]">
            {skill.name}
          </h3>
        </div>
        <span className="rounded-full bg-[var(--brand-tint)] px-2.5 py-1 font-mono text-xs font-semibold text-[var(--brand)] border border-[var(--border-soft)] shrink-0">
          v{skill.version}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-[var(--olive)] line-clamp-3">
        {skill.shortDescription}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {skill.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[var(--parchment)] px-2.5 py-0.5 font-ui text-[10px] uppercase font-semibold tracking-wider text-[var(--stone)] border border-[var(--border-soft)]"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-4">
        <div className="flex items-center justify-between border-t border-[var(--border-soft)] pt-4">
          <div className="flex items-center gap-3.5 font-ui text-xs text-[var(--stone)]">
            <span className="inline-flex items-center gap-1.5">
              <Download className="h-3.5 w-3.5 text-[var(--brand-light)]" />
              {formatDownloads(skill.downloads)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-[var(--brand)] text-[var(--brand)]" />
              {skill.rating.toFixed(1)}
            </span>
          </div>
          <span className="font-ui text-[10px] uppercase font-bold tracking-wider text-[var(--stone)] border border-[var(--border)] rounded px-2 py-0.5 bg-[var(--parchment)]">
            {skill.license}
          </span>
        </div>
        <Link
          href={`/skills/${skill.slug}`}
          className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-[var(--brand)] px-4 py-2 font-serif text-sm font-medium text-[var(--brand)] transition-all duration-200 hover:bg-[var(--brand)] hover:text-[var(--ivory)] hover:shadow active:scale-[0.98] cursor-pointer"
        >
          Equip Rune
        </Link>
      </div>
    </article>
  );
}

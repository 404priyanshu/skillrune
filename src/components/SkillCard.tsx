import Link from "next/link";
import { Download, Star } from "lucide-react";
import { Skill, formatDownloads } from "@/lib/skills";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article className="flex min-h-[280px] flex-col rounded-lg border border-[var(--border)] bg-[var(--ivory)] p-5 shadow-[0_1px_2px_rgba(20,19,19,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(20,19,19,0.07)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--brand)]">
            {skill.category}
          </p>
          <h3 className="mt-2 font-serif text-xl font-medium leading-tight text-[var(--near-black)]">
            {skill.name}
          </h3>
        </div>
        <span className="rounded-full bg-[var(--brand-tint)] px-2.5 py-1 font-ui text-xs text-[var(--brand)]">
          {skill.version}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-[var(--olive)]">
        {skill.shortDescription}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {skill.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[var(--warm-sand)] px-2.5 py-1 font-ui text-xs text-[var(--dark-warm)]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-5">
        <div className="flex flex-wrap items-center gap-4 border-t border-[var(--border-soft)] pt-4 font-ui text-xs text-[var(--stone)]">
          <span className="inline-flex items-center gap-1.5">
            <Download className="h-3.5 w-3.5" />
            {formatDownloads(skill.downloads)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-[var(--brand)] text-[var(--brand)]" />
            {skill.rating.toFixed(1)}
          </span>
          <span>{skill.license}</span>
        </div>
        <Link
          href={`/skills/${skill.slug}`}
          className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-[var(--brand)] px-4 py-2.5 font-serif text-sm font-medium text-[var(--brand)] transition hover:bg-[var(--brand-tint)]"
        >
          View Skill
        </Link>
      </div>
    </article>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Download,
  ExternalLink,
  FileText,
  GitBranch,
  ShieldCheck,
  Star,
  Tag,
  User,
  AlertTriangle,
} from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillCard } from "@/components/SkillCard";
import { FileTree } from "@/components/FileTree";
import { InstallTabs } from "@/components/InstallTabs";
import { formatDownloads, getRelatedSkills, getSkill, skills } from "@/lib/skills";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) {
    return { title: "Skill Not Found" };
  }
  return {
    title: skill.name,
    description: skill.shortDescription,
    openGraph: {
      title: `${skill.name} · SkillRune`,
      description: skill.shortDescription,
      type: "article",
    },
  };
}

export default async function SkillDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const skill = getSkill(slug);

  if (!skill) {
    notFound();
  }

  const related = getRelatedSkills(skill);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8 bg-[var(--parchment)]">
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 font-ui text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-light)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Rune Archives
        </Link>

        {/* Title and Intro Grid */}
        <section className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-5">
            <div>
              <span className="rounded-full bg-[var(--brand-tint)] px-3 py-1 font-mono text-xs font-semibold text-[var(--brand)] border border-[var(--border-soft)] uppercase">
                {skill.category}
              </span>
              <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-[var(--near-black)] sm:text-5xl">
                {skill.name}
              </h1>
            </div>
            
            <p className="text-base leading-7 text-[var(--olive)] sm:text-lg sm:leading-8">
              {skill.longDescription}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--parchment)] px-3 py-1 font-ui text-xs text-[var(--stone)] border border-[var(--border-soft)]"
                >
                  <Tag className="h-3 w-3 text-[var(--stone)]" />
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick installation & actions side widget */}
          <div className="space-y-6">
            <InstallTabs slug={skill.slug} />
            
            <div className="flex gap-3">
              <a
                href={`/api/skills/${skill.slug}/download`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-4 py-2.5 font-serif text-sm font-medium text-[var(--ivory)] shadow transition-all duration-200 hover:bg-[var(--brand-light)] hover:shadow-md active:scale-95"
              >
                <Download className="h-4 w-4" />
                Download Manifest
              </a>
            </div>
          </div>
        </section>

        {/* Metadata grid & compatibility shields */}
        <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Metadata Ledger */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-6 shadow-sm">
            <h2 className="font-serif text-xl font-bold text-[var(--near-black)] border-b border-[var(--border-soft)] pb-3 mb-5">
              Rune Specifications
            </h2>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-3">
              <Meta icon={Download} label="Downloads" value={formatDownloads(skill.downloads)} />
              <Meta icon={Star} label="Rating / Power" value={`${skill.rating.toFixed(1)} / 5.0`} />
              <Meta icon={GitBranch} label="Current Version" value={skill.version} />
              <Meta icon={Calendar} label="Last Scribed" value={skill.lastUpdated} />
              <Meta icon={User} label="Scribe Author" value={skill.author} />
              <Meta icon={ShieldCheck} label="License Type" value={skill.license} />
            </div>
          </div>

          {/* Compatibility */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--near-black)] border-b border-[var(--border-soft)] pb-3 mb-4">
                Compatible Agents
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {skill.supportedAgents.map((agent) => (
                  <span
                    key={agent}
                    className="rounded-full bg-[var(--parchment)] px-3 py-1 font-mono text-xs font-semibold text-[var(--dark-warm)] border border-[var(--border-soft)]"
                  >
                    {agent}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-2.5 font-ui text-xs font-bold uppercase tracking-wider text-[var(--brand)] pt-4 border-t border-[var(--border-soft)]">
              <a href={skill.githubUrl} className="flex items-center gap-1.5 hover:text-[var(--brand-light)] transition-colors" target="_blank" rel="noopener noreferrer">
                GitHub Repository <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a href={skill.docsUrl} className="flex items-center gap-1.5 hover:text-[var(--brand-light)] transition-colors" target="_blank" rel="noopener noreferrer">
                Scribe Documentation <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Detailed file tree layout and spell description */}
        <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Scroll README */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-6 shadow-sm">
            <div className="flex items-center gap-2 border-b border-[var(--border-soft)] pb-3 mb-5">
              <BookOpen className="h-5 w-5 text-[var(--brand)]" />
              <h2 className="font-serif text-xl font-bold text-[var(--near-black)]">
                Spellbook Manual (README)
              </h2>
            </div>
            
            {/* Scroll paper style text box */}
            <div className="rounded-lg border border-[var(--border-soft)] bg-[var(--parchment)] p-5 text-base leading-7 text-[var(--olive)] space-y-4 shadow-inner">
              {skill.readme.map((paragraph, index) => (
                <p key={index} className="first-of-type:first-letter:text-3xl first-of-type:first-letter:font-bold first-of-type:first-letter:font-serif first-of-type:first-letter:text-[var(--brand)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Runic File tree browser */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-6 shadow-sm">
            <div className="flex items-center gap-2 border-b border-[var(--border-soft)] pb-3 mb-5">
              <FileText className="h-5 w-5 text-[var(--brand)]" />
              <h2 className="font-serif text-xl font-bold text-[var(--near-black)]">
                Rune Contents
              </h2>
            </div>
            <FileTree files={skill.files} />
          </div>
        </section>

        {/* Safety Audit / Notes */}
        <section className="mt-10">
          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-6 shadow-sm">
            <div className="flex items-center gap-2.5 border-b border-amber-200 pb-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <h2 className="font-serif text-xl font-bold text-amber-900">
                Safety Audit Notes
              </h2>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {skill.safetyNotes.map((note, idx) => (
                <li
                  key={idx}
                  className="rounded-lg border border-amber-200/60 bg-[var(--ivory)] p-3 text-sm leading-6 text-amber-950 font-ui"
                >
                  <span className="font-bold text-amber-800 block mb-1">Audit Rule #{idx+1}</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Related Runes */}
        {related.length > 0 && (
          <section className="mt-16 border-t border-[var(--border-soft)] pt-10">
            <div className="mb-6">
              <p className="font-ui text-xs font-bold uppercase tracking-[0.1em] text-[var(--brand-light)]">
                Related spells
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium text-[var(--near-black)]">
                More runes on the same library shelf.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <SkillCard key={item.slug} skill={item} />
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Download;
  label: string;
  value: string;
}) {
  return (
    <div className="p-3.5 rounded-lg border border-[var(--border-soft)] bg-[var(--parchment)] shadow-sm">
      <div className="flex items-center gap-1.5 font-ui text-[10px] font-bold uppercase tracking-wider text-[var(--stone)]">
        <Icon className="h-3.5 w-3.5 text-[var(--brand-light)]" />
        {label}
      </div>
      <p className="mt-2 font-mono text-sm font-bold text-[var(--near-black)] truncate">
        {value}
      </p>
    </div>
  );
}

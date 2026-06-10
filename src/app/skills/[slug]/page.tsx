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
} from "lucide-react";
import { CopyButton } from "@/components/CopyButton";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillCard } from "@/components/SkillCard";
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

  const installCommand = `skillrune install ${skill.slug}`;
  const related = getRelatedSkills(skill);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 font-ui text-sm text-[var(--brand)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to skills
        </Link>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--brand)]">
              {skill.category}
            </p>
            <h1 className="mt-3 font-serif text-5xl font-medium leading-tight text-[var(--near-black)] sm:text-6xl">
              {skill.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--olive)]">
              {skill.longDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-tint)] px-3 py-1.5 font-ui text-xs text-[var(--brand)]"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-5">
            <div className="grid grid-cols-2 gap-4 border-b border-[var(--border-soft)] pb-5">
              <Meta icon={Download} label="Downloads" value={formatDownloads(skill.downloads)} />
              <Meta icon={Star} label="Rating" value={skill.rating.toFixed(1)} />
              <Meta icon={GitBranch} label="Version" value={skill.version} />
              <Meta icon={Calendar} label="Updated" value={skill.lastUpdated} />
              <Meta icon={User} label="Author" value={skill.author} />
              <Meta icon={ShieldCheck} label="License" value={skill.license} />
            </div>

            <div className="mt-5 grid gap-3">
              <a
                href={`/api/skills/${skill.slug}/download`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-4 py-3 font-serif text-sm font-medium text-[var(--ivory)] transition hover:bg-[var(--brand-light)]"
              >
                <Download className="h-4 w-4" />
                Download Skill
              </a>
              <CopyButton value={installCommand} />
            </div>

            <div className="mt-5 rounded-lg border border-[var(--border-soft)] bg-[var(--parchment)] p-4 font-mono text-sm text-[var(--dark-warm)]">
              {installCommand}
            </div>
          </aside>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-[var(--brand)]" />
              <h2 className="font-serif text-2xl font-medium text-[var(--near-black)]">
                README preview
              </h2>
            </div>
            <div className="mt-5 space-y-4 text-base leading-7 text-[var(--olive)]">
              {skill.readme.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-6">
            <h2 className="font-serif text-2xl font-medium text-[var(--near-black)]">
              Compatibility
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {skill.supportedAgents.map((agent) => (
                <span
                  key={agent}
                  className="rounded-full bg-[var(--warm-sand)] px-3 py-1.5 font-ui text-xs text-[var(--dark-warm)]"
                >
                  {agent}
                </span>
              ))}
            </div>
            <div className="mt-5 grid gap-2 font-ui text-sm text-[var(--brand)]">
              <a href={skill.githubUrl} className="inline-flex items-center gap-2">
                GitHub repository <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a href={skill.docsUrl} className="inline-flex items-center gap-2">
                Documentation URL <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={`/api/skills/${skill.slug}/manifest`}
                className="inline-flex items-center gap-2"
              >
                JSON manifest <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-6">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-[var(--brand)]" />
              <h2 className="font-serif text-2xl font-medium text-[var(--near-black)]">
                View Files
              </h2>
            </div>
            <div className="mt-5 divide-y divide-[var(--border-soft)]">
              {skill.files.map((file) => (
                <div key={file.path} className="py-4 first:pt-0 last:pb-0">
                  <code className="font-mono text-sm text-[var(--brand)]">{file.path}</code>
                  <p className="mt-1 text-sm leading-6 text-[var(--olive)]">
                    {file.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[var(--brand)]" />
              <h2 className="font-serif text-2xl font-medium text-[var(--near-black)]">
                Safety notes
              </h2>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--olive)]">
              {skill.safetyNotes.map((note) => (
                <li key={note} className="border-l-2 border-[var(--brand)] pl-3">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {related.length > 0 && (
          <section className="mt-14">
            <div className="mb-6">
              <p className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--brand)]">
                Related skills
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-[var(--near-black)]">
                More runes on the same shelf.
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
    <div>
      <div className="flex items-center gap-1.5 font-ui text-xs uppercase tracking-[0.08em] text-[var(--stone)]">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="mt-1 font-serif text-base font-medium text-[var(--near-black)]">
        {value}
      </p>
    </div>
  );
}

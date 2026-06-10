"use client";

import Link from "next/link";
import { useMemo, useState, useEffect, useRef } from "react";
import { Search, SlidersHorizontal, XCircle, Grid, List, ArrowRight, Star } from "lucide-react";
import { SkillCard } from "@/components/SkillCard";
import { Sparkline } from "@/components/Sparkline";
import { allTags, categories, skills, formatDownloads } from "@/lib/skills";

type SortMode = "featured" | "newest" | "downloads" | "rating";

const sortOptions: { value: SortMode; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest Runes" },
  { value: "downloads", label: "Most Equipped" },
  { value: "rating", label: "Highest Power" },
];

export function SkillsBrowser({
  initialCategory = "All",
  compact = false,
}: {
  initialCategory?: string;
  compact?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [tag, setTag] = useState("All");
  const [sortMode, setSortMode] = useState<SortMode>("featured");
  const [viewLayout, setViewLayout] = useState<"leaderboard" | "grid">(compact ? "leaderboard" : "grid");

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus search input when pressing "/"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return skills
      .map((skill) => ({
        skill,
        score: getSearchScore(skill, normalizedQuery),
      }))
      .filter(({ skill, score }) => {
        const matchesQuery = normalizedQuery.length === 0 || score > 0;
        const matchesCategory = category === "All" || skill.category === category;
        const matchesTag = tag === "All" || skill.tags.includes(tag);
        return matchesQuery && matchesCategory && matchesTag;
      })
      .sort((a, b) => {
        if (normalizedQuery) {
          return b.score - a.score;
        }
        if (sortMode === "newest") {
          return Date.parse(b.skill.lastUpdated) - Date.parse(a.skill.lastUpdated);
        }
        if (sortMode === "downloads") {
          return b.skill.downloads - a.skill.downloads;
        }
        if (sortMode === "rating") {
          return b.skill.rating - a.skill.rating;
        }
        return Number(Boolean(b.skill.featured)) - Number(Boolean(a.skill.featured));
      })
      .map(({ skill }) => skill);
  }, [category, query, sortMode, tag]);

  function clearFilters() {
    setQuery("");
    setCategory("All");
    setTag("All");
    setSortMode("featured");
  }

  return (
    <div className="space-y-6">
      {/* Search and Filters Shelf */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-4 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1fr_220px_220px]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--stone)]" />
            <input
              ref={searchInputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search runes, tags, agents, authors..."
              className="h-12 w-full rounded-full border border-[var(--border-soft)] bg-[var(--parchment)] pl-11 pr-12 font-mono text-sm text-[var(--near-black)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand-tint)] placeholder:text-[var(--stone)]"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:flex">
              <kbd className="text-[10px] bg-[var(--ivory)] border border-[var(--border)] text-[var(--stone)] px-1.5 py-0.5 rounded font-mono font-bold">
                /
              </kbd>
            </div>
          </div>
          <div className="relative">
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="h-12 w-full appearance-none rounded-full border border-[var(--border-soft)] bg-[var(--parchment)] px-5 pr-10 font-ui text-sm text-[var(--dark-warm)] outline-none transition focus:border-[var(--brand)] cursor-pointer"
            >
              <option value="All">All Categories</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--stone)]"></div>
          </div>
          <div className="relative">
            <select
              value={tag}
              onChange={(event) => setTag(event.target.value)}
              className="h-12 w-full appearance-none rounded-full border border-[var(--border-soft)] bg-[var(--parchment)] px-5 pr-10 font-ui text-sm text-[var(--dark-warm)] outline-none transition focus:border-[var(--brand)] cursor-pointer"
            >
              <option value="All">All Tags</option>
              {allTags.map((item) => (
                <option key={item} value={item}>
                  #{item}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--stone)]"></div>
          </div>
        </div>

        {/* Sort and Layout Controls */}
        <div className="mt-4 flex flex-col gap-4 border-t border-[var(--border-soft)] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 font-ui text-xs font-semibold uppercase tracking-[0.1em] text-[var(--stone)] mr-2">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Sort
            </div>
            <div className="flex flex-wrap gap-1.5">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setSortMode(option.value)}
                  className={`rounded-full border px-4 py-1.5 font-ui text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    sortMode === option.value
                      ? "border-[var(--brand)] bg-[var(--brand-tint)] text-[var(--brand)] shadow-sm"
                      : "border-[var(--border-soft)] text-[var(--olive)] hover:border-[var(--line)] bg-[var(--parchment)]"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 border-l border-none sm:border-l sm:border-[var(--border-soft)] sm:pl-4">
            <span className="font-ui text-xs font-semibold uppercase tracking-[0.1em] text-[var(--stone)] hidden sm:inline">
              Layout
            </span>
            <div className="flex rounded-lg border border-[var(--border)] bg-[var(--parchment)] p-0.5">
              <button
                type="button"
                onClick={() => setViewLayout("leaderboard")}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${
                  viewLayout === "leaderboard"
                    ? "bg-[var(--ivory)] text-[var(--brand)] shadow-sm"
                    : "text-[var(--stone)] hover:text-[var(--olive)]"
                }`}
                title="Leaderboard view"
              >
                <List className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewLayout("grid")}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${
                  viewLayout === "grid"
                    ? "bg-[var(--ivory)] text-[var(--brand)] shadow-sm"
                    : "text-[var(--stone)] hover:text-[var(--olive)]"
                }`}
                title="Grid view"
              >
                <Grid className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Info & Filters Reset */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-ui text-sm text-[var(--stone)]">
          Discovered <b className="font-semibold text-[var(--dark-warm)]">{filtered.length}</b>{" "}
          of {skills.length} ancient runes
        </p>
        {(query || category !== "All" || tag !== "All" || sortMode !== "featured") && (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center gap-1.5 self-start font-ui text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-light)] transition-colors cursor-pointer"
          >
            <XCircle className="h-4 w-4" />
            Reset Filters
          </button>
        )}
      </div>

      {/* Runic List/Leaderboard Display */}
      {filtered.length > 0 ? (
        <>
          {viewLayout === "leaderboard" ? (
            <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--ivory)] shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[var(--border)] bg-[var(--parchment)]/50 font-ui text-xs font-semibold uppercase tracking-[0.1em] text-[var(--stone)]">
                      <th className="py-4 pl-5 w-12 text-center">#</th>
                      <th className="py-4 px-4 min-w-[200px]">Rune & Purpose</th>
                      <th className="py-4 px-4 w-[160px] text-center hidden md:table-cell">8W Activity</th>
                      <th className="py-4 px-4 w-[120px] text-center">Equips</th>
                      <th className="py-4 px-4 w-[100px] text-center hidden sm:table-cell">Rating</th>
                      <th className="py-4 pr-5 w-28 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-soft)] font-serif">
                    {(compact ? filtered.slice(0, 7) : filtered).map((skill, index) => (
                      <tr
                        key={skill.slug}
                        className="group transition-colors hover:bg-[var(--brand-tint)]/25"
                      >
                        <td className="py-4 pl-5 text-center font-mono text-sm text-[var(--stone)] font-bold">
                          {index + 1}
                        </td>
                        <td className="py-4 px-4 min-w-0">
                          <Link href={`/skills/${skill.slug}`} className="block group/title">
                            <span className="font-serif text-base font-bold text-[var(--near-black)] group-hover/title:text-[var(--brand)] transition-colors">
                              {skill.name}
                            </span>
                            <span className="ml-2 rounded-md bg-[var(--brand-tint)] px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--brand)] border border-[var(--border-soft)] uppercase">
                              {skill.version}
                            </span>
                            <span className="block font-ui text-xs text-[var(--olive)] mt-1 line-clamp-1 max-w-xl">
                              {skill.shortDescription}
                            </span>
                          </Link>
                        </td>
                        <td className="py-2 px-4 text-center hidden md:table-cell">
                          <div className="flex justify-center">
                            <Sparkline slug={skill.slug} isGold={skill.featured} />
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center font-mono text-sm text-[var(--dark-warm)] font-medium">
                          {formatDownloads(skill.downloads)}
                        </td>
                        <td className="py-4 px-4 text-center hidden sm:table-cell">
                          <div className="inline-flex items-center gap-1 font-mono text-sm font-bold text-[var(--near-black)]">
                            <Star className="h-3.5 w-3.5 fill-[var(--brand)] text-[var(--brand)]" />
                            {skill.rating.toFixed(1)}
                          </div>
                        </td>
                        <td className="py-4 pr-5 text-right">
                          <Link
                            href={`/skills/${skill.slug}`}
                            className="inline-flex items-center gap-1 font-ui text-xs font-bold text-[var(--brand)] hover:text-[var(--brand-light)] transition-all group-hover:translate-x-1"
                          >
                            Equip <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {(compact ? filtered.slice(0, 6) : filtered).map((skill) => (
                <SkillCard key={skill.slug} skill={skill} />
              ))}
            </div>
          )}

          {compact && filtered.length > (viewLayout === "leaderboard" ? 7 : 6) && (
            <div className="mt-6 text-center">
              <Link
                href="/skills"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--brand)] px-6 py-2.5 font-serif text-sm font-medium text-[var(--brand)] transition-all duration-200 hover:bg-[var(--brand-tint)] hover:shadow active:scale-95 cursor-pointer"
              >
                Inspect All {filtered.length} Runes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-xl border border-dashed border-[var(--line)] bg-[var(--ivory)] p-12 text-center shadow-sm">
          <Search className="mx-auto h-10 w-10 text-[var(--brand-light)] opacity-75" />
          <h2 className="mt-4 font-serif text-2xl font-medium text-[var(--near-black)]">
            No Runes Discovered
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[var(--olive)]">
            Your search query was too specific or did not match any skills in our archives.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-full border border-[var(--brand)] px-6 py-2.5 font-serif text-sm font-medium text-[var(--brand)] transition-all duration-200 hover:bg-[var(--brand-tint)] active:scale-95 cursor-pointer"
          >
            Reset Catalog search
          </button>
        </div>
      )}
    </div>
  );
}

function getSearchScore(skill: typeof skills[number], query: string) {
  if (!query) return 0;
  let score = 0;
  const name = skill.name.toLowerCase();
  const category = skill.category.toLowerCase();
  const description = skill.shortDescription.toLowerCase();
  const tags = skill.tags.map((tag) => tag.toLowerCase());
  const agents = skill.supportedAgents.map((agent) => agent.toLowerCase());

  if (name === query) score += 100;
  if (name.startsWith(query)) score += 60;
  if (name.includes(query)) score += 40;
  if (category.includes(query)) score += 25;
  if (tags.some((tag) => tag === query)) score += 30;
  if (tags.some((tag) => tag.includes(query))) score += 18;
  if (agents.some((agent) => agent.includes(query))) score += 12;
  if (description.includes(query)) score += 8;
  return score;
}

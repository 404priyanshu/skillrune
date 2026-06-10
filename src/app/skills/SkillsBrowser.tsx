"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, XCircle } from "lucide-react";
import { SkillCard } from "@/components/SkillCard";
import { allTags, categories, skills } from "@/lib/skills";

type SortMode = "featured" | "newest" | "downloads" | "rating";

const sortOptions: { value: SortMode; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "downloads", label: "Most downloaded" },
  { value: "rating", label: "Highest rated" },
];

export function SkillsBrowser({
  initialCategory = "All",
}: {
  initialCategory?: string;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [tag, setTag] = useState("All");
  const [sortMode, setSortMode] = useState<SortMode>("featured");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return skills
      .filter((skill) => {
        const matchesQuery =
          normalizedQuery.length === 0 ||
          [
            skill.name,
            skill.shortDescription,
            skill.category,
            skill.license,
            skill.author,
            ...skill.tags,
            ...skill.supportedAgents,
          ]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery);
        const matchesCategory = category === "All" || skill.category === category;
        const matchesTag = tag === "All" || skill.tags.includes(tag);
        return matchesQuery && matchesCategory && matchesTag;
      })
      .sort((a, b) => {
        if (sortMode === "newest") {
          return Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated);
        }
        if (sortMode === "downloads") {
          return b.downloads - a.downloads;
        }
        if (sortMode === "rating") {
          return b.rating - a.rating;
        }
        return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      });
  }, [category, query, sortMode, tag]);

  function clearFilters() {
    setQuery("");
    setCategory("All");
    setTag("All");
    setSortMode("featured");
  }

  return (
    <div>
      <div className="rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_220px_220px]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--stone)]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search skills, tags, agents, authors, licenses..."
              className="h-12 w-full rounded-full border border-[var(--border-soft)] bg-[var(--parchment)] pl-11 pr-4 font-ui text-sm text-[var(--near-black)] outline-none transition placeholder:text-[var(--stone)] focus:border-[var(--brand)]"
            />
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-12 rounded-full border border-[var(--border-soft)] bg-[var(--parchment)] px-4 font-ui text-sm text-[var(--dark-warm)] outline-none focus:border-[var(--brand)]"
          >
            <option>All</option>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <select
            value={tag}
            onChange={(event) => setTag(event.target.value)}
            className="h-12 rounded-full border border-[var(--border-soft)] bg-[var(--parchment)] px-4 font-ui text-sm text-[var(--dark-warm)] outline-none focus:border-[var(--brand)]"
          >
            <option>All</option>
            {allTags.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="mt-5 flex flex-col gap-4 border-t border-[var(--border-soft)] pt-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 font-ui text-xs uppercase tracking-[0.08em] text-[var(--stone)]">
            <SlidersHorizontal className="h-4 w-4" />
            Sort
          </div>
          <div className="flex flex-wrap gap-2">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setSortMode(option.value)}
                className={`rounded-full border px-3.5 py-2 font-ui text-xs transition ${
                  sortMode === option.value
                    ? "border-[var(--brand)] bg-[var(--brand-tint)] text-[var(--brand)]"
                    : "border-[var(--border-soft)] text-[var(--olive)] hover:border-[var(--line)]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-ui text-sm text-[var(--stone)]">
          Showing <b className="font-medium text-[var(--dark-warm)]">{filtered.length}</b>{" "}
          of {skills.length} skills
        </p>
        {(query || category !== "All" || tag !== "All" || sortMode !== "featured") && (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center gap-2 self-start font-ui text-sm text-[var(--brand)]"
          >
            <XCircle className="h-4 w-4" />
            Clear filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((skill) => (
            <SkillCard key={skill.slug} skill={skill} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-dashed border-[var(--line)] bg-[var(--ivory)] p-10 text-center">
          <Search className="mx-auto h-8 w-8 text-[var(--brand)]" />
          <h2 className="mt-4 font-serif text-2xl font-medium text-[var(--near-black)]">
            No matching skills
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[var(--olive)]">
            Try a broader query, remove a tag, or switch back to all categories.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-full border border-[var(--brand)] px-5 py-2.5 font-serif text-sm font-medium text-[var(--brand)] transition hover:bg-[var(--brand-tint)]"
          >
            Reset search
          </button>
        </div>
      )}
    </div>
  );
}

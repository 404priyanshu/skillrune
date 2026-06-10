"use client";

import { useState } from "react";
import { Check, Copy, FileCode, Terminal, Package } from "lucide-react";

export function InstallTabs({ slug }: { slug: string }) {
  const [activeTab, setActiveTab] = useState<"cli" | "npm" | "json">("cli");
  const [copied, setCopied] = useState(false);

  const options = {
    cli: {
      label: "CLI",
      icon: Terminal,
      command: `skillrune equip ${slug}`,
    },
    npm: {
      label: "NPM",
      icon: Package,
      command: `npx skillrune install ${slug}`,
    },
    json: {
      label: "JSON",
      icon: FileCode,
      command: `https://skillrune.com/api/skills/${slug}/manifest`,
    },
  };

  const current = options[activeTab];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(current.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="w-full rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-4 shadow-sm">
      {/* Tab Selectors */}
      <div className="grid grid-cols-3 gap-1 bg-[var(--parchment)] p-1 rounded-lg mb-4 border border-[var(--border-soft)]">
        {(Object.keys(options) as Array<keyof typeof options>).map((key) => {
          const opt = options[key];
          const Icon = opt.icon;
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                setCopied(false);
              }}
              className={`flex items-center justify-center gap-1.5 py-2 px-1.5 rounded-md font-ui text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-[var(--brand)] text-[var(--ivory)] shadow-sm font-semibold"
                  : "text-[var(--stone)] hover:text-[var(--olive)] hover:bg-[var(--ivory)]/70 font-semibold"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Command/Url View Box */}
      <div className="relative flex items-center justify-between gap-4 rounded-lg border border-[var(--border-soft)] bg-[var(--parchment)] p-3.5 font-mono text-sm text-[var(--dark-warm)] shadow-inner">
        <code className="truncate pr-8 select-all text-[var(--brand)] font-bold">
          {current.command}
        </code>
        <button
          onClick={handleCopy}
          className="absolute right-3 p-1.5 rounded bg-[var(--ivory)] border border-[var(--border)] text-[var(--stone)] hover:text-[var(--brand)] transition-all cursor-pointer shadow-sm hover:shadow"
          title={`Copy ${current.label}`}
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-600" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>

      <p className="mt-3 text-[11px] font-ui text-[var(--stone)] text-center leading-normal">
        {activeTab === "cli" && "Equip the rune using the local SkillRune CLI."}
        {activeTab === "npm" && "Run directly from NPM without global installation."}
        {activeTab === "json" && "Inspect raw JSON schema manifest parameters."}
      </p>
    </div>
  );
}

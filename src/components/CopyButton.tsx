"use client";

import { useState } from "react";
import { Clipboard, Check } from "lucide-react";

export function CopyButton({
  value,
  label = "Copy Install Command",
}: {
  value: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 font-serif text-sm font-medium transition-all duration-200 active:scale-95 cursor-pointer ${
        copied
          ? "border-[#446b36] bg-[#f0f4ea] text-[#446b36]"
          : "border-[var(--brand)] bg-[var(--ivory)] text-[var(--brand)] hover:bg-[var(--brand-tint)] hover:shadow-sm"
      }`}
    >
      {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
      {copied ? "Copied Spell" : label}
    </button>
  );
}

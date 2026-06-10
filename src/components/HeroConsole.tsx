"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

const commands = [
  "skillrune equip repo-cartographer",
  "skillrune equip pdf-extractor-rune",
  "skillrune equip testsmith",
  "skillrune equip browser-scout",
  "skillrune equip threat-model-lens",
];

export function HeroConsole() {
  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timer: number;
    const fullCmd = commands[currentCmdIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === fullCmd) {
      // Pause at end of command
      timer = window.setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText === "") {
      timer = window.setTimeout(() => {
        setIsDeleting(false);
        setCurrentCmdIndex((prev) => (prev + 1) % commands.length);
      }, 0);
    } else {
      timer = window.setTimeout(() => {
        setDisplayText((current) =>
          isDeleting
            ? fullCmd.substring(0, current.length - 1)
            : fullCmd.substring(0, current.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentCmdIndex]);

  const copyToClipboard = async () => {
    try {
      const activeCmd = commands[currentCmdIndex];
      await navigator.clipboard.writeText(activeCmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy command", err);
    }
  };

  return (
    <div className="w-full max-w-full sm:max-w-[460px] h-[106px] rounded-xl border border-[var(--brand)] bg-[var(--dark-panel)] p-4 shadow-lg flex flex-col justify-between shrink-0 overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--olive)] pb-2 mb-2">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
          <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--stone)]">
          Runic Console v0.1
        </span>
      </div>
      <div className="flex items-center justify-between gap-4 font-mono text-sm h-7 min-w-0 w-full">
        <div className="flex items-center min-w-0 flex-1">
          <span className="text-[var(--stone)] mr-2 select-none">$</span>
          <span className="text-[#d8d5c8] truncate terminal-cursor block whitespace-nowrap overflow-hidden h-5 select-all min-w-0 flex-1">
            {displayText}
          </span>
        </div>
        <button
          onClick={copyToClipboard}
          className="p-1.5 rounded-lg bg-[var(--olive)]/20 hover:bg-[var(--olive)]/40 text-[var(--line)] hover:text-[var(--ivory)] transition-all cursor-pointer shrink-0"
          title="Copy command to clipboard"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}

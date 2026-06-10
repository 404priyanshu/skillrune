import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://skillrune.com"),
  title: {
    default: "SkillRune · Reusable skills for AI agents",
    template: "%s · SkillRune",
  },
  description:
    "Discover, inspect, and download reusable AI agent skills from a curated developer-first registry.",
  keywords: [
    "AI agent skills",
    "SkillRune",
    "agent registry",
    "coding agents",
    "developer tools",
  ],
  openGraph: {
    title: "SkillRune · Reusable skills for AI agents",
    description:
      "A curated registry for reusable AI agent skills, built for developers and agent builders.",
    url: "https://skillrune.com",
    siteName: "SkillRune",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SkillRune · Reusable skills for AI agents",
    description:
      "Discover, inspect, and download reusable AI agent skills from a curated developer-first registry.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[var(--parchment)] text-[var(--near-black)]">
        {children}
      </body>
    </html>
  );
}

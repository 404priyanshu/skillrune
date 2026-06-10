import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SkillRune · Reusable skills for AI agents",
    template: "%s · SkillRune",
  },
  description: siteConfig.description,
  keywords: [
    "AI agent skills",
    "SkillRune",
    "agent registry",
    "coding agents",
    "developer tools",
  ],
  openGraph: {
    title: "SkillRune · Reusable skills for AI agents",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "SkillRune",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SkillRune · Reusable skills for AI agents",
    description: siteConfig.description,
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

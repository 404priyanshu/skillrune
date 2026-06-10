# SkillRune

SkillRune is a polished MVP registry for reusable AI agent skills. It lets
developers browse seed skills, inspect detail pages, download generated skill
manifests, and submit future skills for review.

## Routes

- `/` - landing page and product overview
- `/skills` - searchable/filterable skill catalog
- `/skills/[slug]` - skill metadata, files, README preview, safety notes, download UX
- `/categories` - category browsing
- `/submit` - client-side validated submission form
- `/docs/package-format` - package manifest documentation
- `/api/skills` - JSON manifest index
- `/api/skills/[slug]/download` - generated Markdown skill manifest download
- `/api/skills/[slug]/manifest` - JSON manifest for one skill
- `/llms.txt` and `/llms-full.txt` - AI-readable product context
- `/static-kami-index.html` - preserved static Kami landing-page reference

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- lucide-react
- Local mock data, no database or authentication yet

## Checks

```bash
npm run lint
npm run build
```

## MVP Notes

The submit form validates locally and stores a browser-local review queue with
pending, approved, and rejected states. Real DB storage, accounts, payments,
admin auth, and a production CLI are intentionally out of scope for this version.

## Release Checklist

- Point `skillrune.com` at the deployed Vercel project.
- Confirm `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/llms.txt`, and `/llms-full.txt`.
- Smoke test `/skills`, one `/skills/[slug]`, `/submit`, `/api/skills`, and one manifest download.
- Replace localStorage submission queue with DB-backed moderation before accepting public submissions.

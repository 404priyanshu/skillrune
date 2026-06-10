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
- `/api/skills/[slug]/download` - generated Markdown skill manifest download
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

The submit form validates locally and displays a success state. Real submission
storage, accounts, payments, admin tooling, and a production CLI are intentionally
out of scope for this version.

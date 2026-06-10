<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

@/Users/ainz/.codex/RTK.md

## Project Shape

- Next.js App Router project in `src/app`.
- Shared mock skill data lives in `src/lib/skills.ts`.
- Reusable UI lives in `src/components`.
- Keep MVP scope local-data-first: no auth, database, payments, or admin area unless explicitly requested.

## Commands

Use `rtk` for shell commands in this workspace.

```bash
rtk proxy npm run lint
rtk proxy npm run build
rtk proxy npm run dev
```

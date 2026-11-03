<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/e145ff59-2d87-4403-b077-80622f9ef20f

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


# AnalytixFest 2K27 — Stranger Things Cinematic Website Docs

This package contains the project specification and AI handoff documents.

## Files
- `docs/PRD.md` — product requirements and acceptance criteria
- `docs/ARCHITECTURE.md` — implementation architecture and data/scene contracts
- `docs/DESIGN.md` — visual identity, scenes, motion, and responsive direction
- `docs/TEST_PLAN.md` — validation checklist
- `docs/SECURITY.md` — secrets, dependencies, assets, and privacy guidance
- `docs/DECISIONS.md` — accepted architecture/product decisions
- `docs/MEMORY.md` — compact state and session handoff
- `docs/CLAUDE_INSTRUCTIONS.md` — token-efficient instructions for Claude

## Start with Claude
1. Add the `docs/` folder to the existing project repository.
2. Ask Claude to read `docs/CLAUDE_INSTRUCTIONS.md` and `docs/MEMORY.md`.
3. Ask it to complete only Milestone 1: repository audit and content extraction.
4. After the audit, ask it to update `docs/MEMORY.md` and proceed one milestone at a time.

Important: these documents describe requirements; they do not claim the repository has already been inspected or the website implemented.

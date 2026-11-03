# Architecture Decision Record (ADR) Log
## AnalytixFest 2K27 Cinematic Website

Use this file to record decisions that affect implementation. Add a dated entry when a meaningful decision is made. Do not silently change a decision: update the relevant entry and explain why.

## Decision 001 — Existing site is the content source of truth

**Status:** Accepted  
**Decision:** Preserve actual symposium content and functional destinations from the existing repository and https://af2k27.netlify.app/.  
**Reason:** The visual redesign must not invent or lose event information.  
**Consequences:** Inspect the project before replacing sections. Record missing or conflicting information instead of guessing.

## Decision 002 — Reference portfolio is inspiration, not a template

**Status:** Accepted  
**Decision:** Use https://sebastien-lempens.com/ as inspiration for cinematic quality, spatial composition, and scroll-driven storytelling only.  
**Reason:** The new site needs its own visual identity.  
**Consequences:** Do not copy exact layouts, assets, branding, or animations.

## Decision 003 — Stranger Things-inspired original art direction

**Status:** Accepted  
**Decision:** Use Hawkins-at-night, dimensional breach, Upside Down atmosphere, supernatural silhouettes, laboratory motifs, and wormhole imagery.  
**Reason:** These visual motifs connect the requested theme to a coherent cinematic journey.  
**Consequences:** Prefer authorized assets or original genre-inspired visuals; do not assume show assets are licensed.

## Decision 004 — Timeline is a signature interaction

**Status:** Accepted  
**Decision:** Build a continuous 3D camera path with chronological checkpoints and an accessible DOM timeline fallback.  
**Reason:** The user specifically wants to travel through the timeline along a path.  
**Consequences:** Camera progress must be continuous and reversible. The path may loop, but event chronology must not change. Every entry remains accessible without completing the animation.

## Decision 005 — Essential content must not depend on 3D

**Status:** Accepted  
**Decision:** Keep event details, navigation, registration, and timeline text in semantic HTML.  
**Reason:** Accessibility, mobile usability, searchability, and resilience when WebGL is unavailable.  
**Consequences:** Canvas is a visual enhancement, not the sole source of information.

## Decision 006 — Reuse the existing stack where possible

**Status:** Accepted  
**Decision:** Inspect the repository before selecting dependencies or restructuring files. Prefer existing compatible React/TypeScript/build setup; use Three.js/React Three Fiber and GSAP/ScrollTrigger only where appropriate.  
**Reason:** Minimize risk, token usage, dependency churn, and deployment regressions.  
**Consequences:** Do not install every tool in the original concept brief automatically.

## Decision 007 — Prefer a shared 3D scene

**Status:** Preferred, subject to repository inspection  
**Decision:** Prefer one shared 3D canvas/world with scroll-driven camera and environment changes when practical.  
**Reason:** It supports continuous transitions and can reduce duplicated rendering work.  
**Consequences:** Use separate canvases only if a clear technical reason justifies them.

## Decision 008 — Motion must be reversible and accessible

**Status:** Accepted  
**Decision:** Normal scrolling controls forward/backward progression; reduced-motion mode provides a usable alternative.  
**Reason:** Avoid disorientation and keep navigation under visitor control.  
**Consequences:** Avoid long forced scroll locks, aggressive camera roll, rapid flashing, and motion-only content.

## Decision 009 — Sound is optional

**Status:** Accepted  
**Decision:** No unexpected autoplay. If sound is implemented, provide an explicit toggle and keep the site usable when muted.  
**Reason:** Respect visitor control and browser behavior.  
**Consequences:** Use only original or properly licensed audio.

## Decision 010 — Documentation is the handoff contract

**Status:** Accepted  
**Decision:** `docs/PRD.md`, `ARCHITECTURE.md`, `DESIGN.md`, `TEST_PLAN.md`, `SECURITY.md`, `DECISIONS.md`, and `MEMORY.md` are the shared project context.  
**Reason:** The project may be implemented across multiple Claude sessions with limited context.  
**Consequences:** Update `MEMORY.md` after each work session and update other documents when requirements or architecture change.

## Decision template

```md
## Decision NNN — Short title

**Date:** YYYY-MM-DD  
**Status:** Proposed / Accepted / Superseded  
**Context:** What problem or constraint prompted the decision?  
**Decision:** What was chosen?  
**Alternatives considered:** What else was considered?  
**Consequences:** What changes or limitations follow?
```

# Project Memory / AI Handoff
## AnalytixFest 2K27 — Stranger Things-Inspired Website

**Purpose:** Compact, persistent handoff for future Claude sessions.  
**Update this file at the end of every implementation session.** Keep it factual and concise.

## 1. Project summary

Redesign the existing AnalytixFest 2K27 symposium website as a premium, responsive, Stranger Things-inspired cinematic 3D experience.

- Existing deployment: https://af2k27.netlify.app/
- Visual inspiration: https://sebastien-lempens.com/
- Main theme: Hawkins at night → dimensional breach → Upside Down → supernatural landmark → symposium content/laboratory → 3D timeline tunnel → wormhole → final reveal.
- Primary signature interaction: camera travels continuously along a curved/looping 3D path through the real chronological symposium timeline.
- The visual reference inspires quality and techniques only; do not copy its exact design or assets.

## 2. Non-negotiable requirements

1. Existing repository and deployed website are the source of truth for real symposium content.
2. Never invent event dates, fees, venues, event names, rules, contacts, speakers, or registration links.
3. Preserve useful current content and functionality.
4. All important text and schedule information must remain available in semantic HTML.
5. Timeline camera movement must be continuous, reversible, and tied to scroll progress.
6. Timeline entries remain in actual chronological order even if the 3D path loops.
7. Provide direct checkpoint access and a conventional accessible timeline fallback.
8. Registration and navigation must work.
9. Respect reduced motion and provide a WebGL fallback.
10. Sound is optional and must not autoplay unexpectedly.
11. Prefer original or authorized assets; do not assume Stranger Things assets are licensed.
12. Inspect the existing stack before installing dependencies or restructuring.

## 3. Visual system

Palette:
- `#050505` obsidian
- `#10151C` Hawkins night
- `#090608` Upside Down
- `#C8102E` blood red
- `#FF1838` neon crimson
- `#55C8FF` electric blue
- `#7626A8` toxic violet
- `#858585` ash gray
- `#F5F1EC` pale white

Style: cinematic, atmospheric, editorial, dark, spatial, controlled. Use red as the primary accent; use blue/violet sparingly. Avoid generic SaaS design, repetitive cards, random gradients, excessive glassmorphism, and constant motion.

## 4. Technical direction

Preferred only if compatible with the existing repository:
- React + TypeScript + existing build tool.
- Three.js / React Three Fiber / Drei.
- GSAP + ScrollTrigger.
- Optional Lenis only if properly synchronized with ScrollTrigger.
- Optimized GLB/glTF assets.

Prefer a shared 3D scene/canvas with scroll-controlled camera and environment transitions. Keep content data separate from animation logic. Do not create multiple competing scroll systems.

## 5. Scene sequence

1. Hawkins forest hero.
2. Manifesto / actual symposium introduction.
3. Dimensional portal and Upside Down transition.
4. Mind Flayer-inspired distant silhouette.
5. Existing symposium information and activities.
6. Optional Hawkins laboratory presentation.
7. Actual featured events/activities.
8. 3D timeline path with chronological checkpoints.
9. Wormhole transition.
10. Closing scene, registration, real contact/institution details, footer.

This is a design sequence, not permission to invent content. Map actual existing sections to the scenes.

## 6. Timeline implementation contract

- Read actual schedule data from the repository/deployed site.
- Store entries in a structured data file.
- Place checkpoints along a suitable curve/spline.
- Map normalized scroll progress to curve parameter.
- Update camera position and stable orientation from curve position/tangent.
- Reveal the correct entry in accessible DOM content.
- Support forward/backward scroll and direct checkpoint selection.
- Never make users finish the entire animation to access a timeline entry.
- Provide reduced-motion and non-WebGL fallback representations.
- Do not reorder the real schedule to fit the geometry.

## 7. Token-efficient working protocol for Claude

At the beginning of a new session:
1. Read this `MEMORY.md`.
2. Read `PRD.md` for requirements relevant to the task.
3. Read `ARCHITECTURE.md` or `DESIGN.md` only when needed.
4. Inspect the current code and `git diff` before editing.
5. Read the most recent progress entry below.
6. Work on one bounded milestone at a time.

Before editing:
- State the intended milestone and files to change briefly.
- Avoid re-reading unrelated files or regenerating the whole project.
- Reuse existing components and dependencies where possible.
- Do not rewrite working sections unless required.

At the end of every session:
- Run the relevant checks.
- Update the progress log below with files changed, verified results, unresolved issues, and the next exact task.
- Update `DECISIONS.md` if a meaningful architectural decision changed.
- Update other docs only when their content changes.

If context is running low:
- Stop before starting another major feature.
- Leave the code in a coherent state.
- Update the progress log and identify the next smallest step.

## 8. Current implementation state

**Status:** Documentation prepared; implementation status not yet verified.

- Repository structure: Not inspected in this documentation step.
- Current framework/dependencies: Not verified.
- Existing event data: Must be extracted from the repository/deployed site before implementation.
- Registration destination: Must be verified.
- Timeline data: Must be extracted and validated.
- Build/test commands: Must be discovered from the repository.
- Netlify configuration: Must be inspected before changes.

Do not treat unknown items as completed.

## 9. Progress log

Add newest entries at the top. Keep each entry concise.

### YYYY-MM-DD — Documentation handoff created
- Created the project documentation structure.
- No implementation or build/test result is claimed.
- Next task: inspect repository, identify framework/dependencies/assets, and extract real content, registration destinations, and timeline entries. Record findings in this file and relevant architecture/data docs.

### Progress entry template

```md
### YYYY-MM-DD — Short milestone
- Completed:
- Files changed:
- Checks run and actual results:
- Known issues / missing information:
- Next exact task:
```

## 10. Next task

**First implementation milestone:** Repository audit and content extraction only.

1. Inspect package scripts, framework, source structure, assets, routes, and Netlify config.
2. Inspect the deployed site and compare its sections with repository content.
3. Extract real event details, links, featured activities, and timeline entries.
4. Record findings and gaps.
5. Do not begin a full rewrite until the audit is complete.

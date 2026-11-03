# Claude Implementation Instructions

Use this file as the short operating prompt when asking Claude to work on the repository.

## Mandatory first step

Read these files before implementation:
1. `docs/MEMORY.md`
2. `docs/PRD.md`
3. `docs/ARCHITECTURE.md`
4. `docs/DESIGN.md`
5. `docs/TEST_PLAN.md`
6. `docs/SECURITY.md`
7. `docs/DECISIONS.md`

Then inspect the existing repository. Documentation is the specification, but existing code and real event content must be examined before making changes.

## Work in bounded milestones

Do not attempt to generate the entire website in one enormous response. Implement one milestone at a time, validate it, and update `docs/MEMORY.md`.

Recommended order:
1. **Audit:** inspect framework, dependencies, content, assets, links, build commands, and Netlify configuration. Do not redesign yet.
2. **Content/data:** create structured data from verified symposium content; confirm registration and timeline sources.
3. **Foundation:** establish design tokens, typography, responsive shell, navigation, and accessible content structure.
4. **3D foundation:** implement the loading/fallback behavior and Hawkins hero.
5. **Scroll choreography:** connect scroll progress to scene/camera movement and implement the portal transition.
6. **Content scenes:** map real existing sections to the cinematic world.
7. **Timeline:** implement the continuous 3D path and accessible checkpoint navigation.
8. **Closing scene:** wormhole/finale/footer and verified CTAs.
9. **Quality:** responsive tuning, reduced motion, WebGL fallback, performance, links, build/lint/tests.
10. **Handoff:** update documentation and report actual results.

## Rules for every milestone

- Inspect the relevant existing code before editing.
- Make the smallest coherent change that achieves the milestone.
- Reuse compatible dependencies and existing working components.
- Never invent symposium facts or URLs.
- Do not copy the reference portfolio or use unauthorized show assets.
- Keep essential content outside the 3D canvas.
- Do not leave fake buttons or nonfunctional links.
- Keep camera movement continuous, reversible, and accessible.
- Run only checks that are available, and report their actual results.
- Do not claim a build/test passed unless it was run.
- Update `docs/MEMORY.md` at the end of the session with changed files, tests, unresolved issues, and the next exact task.
- If a requirement cannot be completed within the current session, leave a coherent working state and document the remaining work.

## Response format after each milestone

Return a concise report:
- Completed
- Files changed
- Commands/checks run and results
- Remaining issues or missing content
- Next exact milestone

Avoid printing the entire source tree or repeating these docs unless asked.

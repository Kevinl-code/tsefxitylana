# Product Requirements Document (PRD)
## AnalytixFest 2K27 — Stranger Things-Inspired Cinematic Symposium Website

**Status:** Implementation source of truth  
**Product:** Existing AnalytixFest 2K27 website redesign  
**Deployment reference:** https://af2k27.netlify.app/  
**Visual reference:** https://sebastien-lempens.com/  
**Primary audience:** Students, participants, faculty, and visitors exploring the symposium

## 1. Product vision

Transform the existing AnalytixFest 2K27 symposium website into a polished, responsive, cinematic experience inspired by the atmosphere of *Stranger Things*. The website should combine immersive 3D storytelling with practical access to real symposium information.

The experience should feel like a journey through Hawkins, the Upside Down, a dimensional portal, and a time-travel tunnel. The theme supports the event; it must never replace or falsify event information.

Use the visual ambition, spatial composition, and scroll-driven camera storytelling of the reference portfolio as inspiration only. Do not copy its layout, assets, branding, or exact interactions.

## 2. Goals

1. Establish a distinctive Stranger Things-inspired art direction for AnalytixFest 2K27.
2. Preserve and present the existing symposium content accurately.
3. Create a cinematic opening and connected scroll-driven scene progression.
4. Make the timeline a signature feature: a camera travels along a continuous 3D path and visits chronological checkpoints.
5. Keep registration, event details, schedule, and contact information easy to access.
6. Deliver a working, responsive, accessible website that can be deployed to Netlify.
7. Keep implementation modular and documented so work can continue across limited AI context/token budgets.

## 3. Non-goals

- Do not rebuild the event as a fictional Stranger Things story or role-playing game.
- Do not invent dates, venues, fees, event names, rules, contact details, speakers, or registration destinations.
- Do not create a static mockup instead of a functioning site.
- Do not copy copyrighted show assets, music, footage, logos, or character models without permission.
- Do not introduce a new framework or install every suggested library without inspecting the repository.
- Do not make visitors finish animations before they can access important information.
- Do not make the entire site dependent on WebGL, sound, hover, or motion.

## 4. Sources of truth and content rules

Use these sources in this order:
1. Existing repository and its content/data.
2. Existing deployed site: https://af2k27.netlify.app/
3. User-provided screenshot and original project brief.
4. Proposed creative copy in this document, clearly treated as editable placeholder copy rather than factual event content.

Inspect the current repository and deployed site before implementation. Extract actual event data and working destinations. Preserve useful existing content and functionality. If data is missing or conflicting, do not guess; document the gap and retain a clear placeholder only where necessary.

## 5. Experience and content requirements

### R1 — Hero: Hawkins after dark
- Full-screen, dark, atmospheric opening.
- Foggy forest, drifting particles, distant red glow, and a dimensional breach.
- Show the real symposium identity, `ANALYTIXFEST 2K27`, and relevant existing event details.
- Provide a clear registration action and an explore/scroll cue.
- Suggested editable thematic headline: **“ONE SYMPOSIUM. TWO DIMENSIONS. INFINITE POSSIBILITIES.”**
- Keep first-screen content readable and usable before or without the 3D scene finishing loading.

### R2 — Manifesto / introduction
- Scroll advances the camera through the environment.
- Reveal a large editorial statement in fragments.
- Suggested editable thematic headline: **“SOMEWHERE BETWEEN DATA AND THE UNKNOWN.”**
- Follow with the actual event introduction and purpose from the existing site.

### R3 — Dimensional breach / Upside Down
- Transition from Hawkins to a darker alternate environment using a portal.
- Use vines, ash-like particles, fog, distorted silhouettes, and restrained red/violet light.
- Make the transition reversible through normal scrolling.
- Keep the 3D effects atmospheric rather than distracting.

### R4 — Supernatural landmark
- Include a distant, monumental Mind Flayer-inspired silhouette as an environmental presence.
- Use fog and backlighting to suggest scale; avoid graphic horror.
- Use the scene to introduce real symposium content, not fictional event claims.

### R5 — Symposium information
- Present existing overview, activities, competitions, rules, institutional details, and other actual sections found in the source site.
- Use varied editorial compositions rather than a repetitive card grid.
- Preserve titles, descriptions, requirements, and destinations.
- Keep all content editable and separate from animation code.

### R6 — Hawkins laboratory
- Optional visual treatment for appropriate existing content: retro monitors, scientific labels, restrained indicator lights, and dimensional readings.
- Any apparent control must work; decorative controls must not masquerade as functional UI.

### R7 — Featured activities/events
- Discover the actual items in the repository/deployed site before designing this section.
- Preserve each item’s real title, description, eligibility/rules, and link.
- Use asymmetric layouts, imagery, and selective 3D elements; do not force all content into 3D cards.

### R8 — Interactive 3D timeline (critical)
- Use actual timeline entries and preserve their chronological order.
- Build a continuous curve/loop/spiral or dimensional route.
- Camera position and orientation follow scroll progress along the curve.
- Each checkpoint reveals the actual date/time/title/description available in the source.
- Support forward and backward scrolling, active checkpoint indication, and optional direct checkpoint selection.
- Slow or pause at checkpoints enough for the text to be read.
- The path may loop visually, but the event schedule must not be reordered to fit the path.
- Provide an accessible, conventional HTML timeline fallback.
- Users must be able to reach any entry without completing the entire animation.

### R9 — Wormhole / transition
- A dimensional tunnel connects the timeline or late-page content to the final scene.
- Use concentric forms, a central void, restrained distortion, particles, and red/violet light.
- Keep scroll progress reversible and text legible.

### R10 — Closing scene and footer
- End the cinematic journey with a clear, memorable composition.
- Suggested editable headline: **“THE NEXT DIMENSION OF IDEAS BEGINS HERE.”**
- Show actual event details and useful links.
- Include real institutional, contact, registration, and social information where available.

### R11 — Navigation and functional UI
- Responsive navigation with working open/close states.
- Navigation links to real implemented sections.
- Registration buttons use the real destination.
- Menus, timeline checkpoints, event links, and interactive hotspots work.
- Provide keyboard focus states and touch-friendly controls.

### R12 — Motion, sound, and accessibility
- Motion is deliberate, restrained, and reversible.
- Respect `prefers-reduced-motion`.
- Sound is optional, never autoplayed unexpectedly, and has a visible control if included.
- No essential content is available only through sound, color, hover, or the 3D canvas.
- Provide graceful behavior if WebGL is unsupported or initialization fails.

## 6. Visual direction

Core palette:
- Obsidian black: `#050505`
- Hawkins night: `#10151C`
- Upside Down black: `#090608`
- Blood red: `#C8102E`
- Neon crimson: `#FF1838`
- Electric blue: `#55C8FF`
- Toxic violet: `#7626A8`
- Ash gray: `#858585`
- Pale white: `#F5F1EC`

Use crimson as the primary accent; reserve blue and violet for selected scene states. Use oversized display typography, clean body text, monospaced scientific labels, generous negative space, and strong lighting contrast. Avoid constant neon, random gradients, generic SaaS styling, and unnecessary glassmorphism.

## 7. Technical direction

Retain the current stack where sensible. Preferred options if compatible:
- React + TypeScript + existing build framework.
- Three.js / React Three Fiber / Drei for 3D.
- GSAP + ScrollTrigger for scroll-linked choreography.
- Optional Lenis only if integrated correctly with ScrollTrigger and native accessibility behavior.
- GLB/glTF assets and optimized textures.

Use one shared 3D canvas/environment where practical, with camera, lighting, and environment changes coordinated by scroll progress. Avoid a separate expensive canvas for every section unless there is a demonstrated need.

## 8. Success criteria

- Existing important symposium content is preserved and accurate.
- Hero, navigation, registration, featured content, timeline, and footer are implemented.
- Timeline camera travels continuously and reversibly along a path.
- Checkpoints show correct source data and are directly accessible.
- All buttons and links work.
- Desktop, tablet, and mobile layouts work.
- Reduced-motion and WebGL fallback experiences work.
- No console/build errors remain.
- Site can be built and deployed with the existing Netlify configuration.
- Documentation is updated to reflect decisions and implementation state.

## 9. Acceptance checklist

- [ ] Repository and existing site inspected before major edits.
- [ ] Real content and destinations recorded in data files.
- [ ] Hero experience works with a loading/fallback state.
- [ ] Scene transitions are scroll-driven and reversible.
- [ ] Timeline path is continuous and chronologically correct.
- [ ] Accessible HTML timeline exists.
- [ ] Registration and all important links verified.
- [ ] Responsive/mobile behavior verified.
- [ ] Reduced-motion behavior verified.
- [ ] WebGL failure fallback verified.
- [ ] Build/lint/tests run and failures fixed.
- [ ] `MEMORY.md`, `DECISIONS.md`, and relevant docs updated.

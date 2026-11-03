# Architecture
## AnalytixFest 2K27 — Cinematic 3D Website

## 1. Architecture principles

1. Inspect the existing repository before choosing or changing architecture.
2. Preserve compatible dependencies, routes, content, and deployment configuration.
3. Keep content/data separate from presentation, scene logic, and animation.
4. Prefer one shared 3D world/canvas with scroll-controlled scene states when practical.
5. Keep essential content in semantic HTML; the canvas is an enhancement, not the only source of information.
6. Use explicit interfaces and small, reusable modules.
7. Keep animation reversible and clean up GSAP, event listeners, and GPU resources.
8. Avoid premature abstraction and unnecessary dependencies.

## 2. Proposed system overview

```text
Browser
├── Semantic DOM
│   ├── Navigation and registration
│   ├── Editorial/content sections
│   ├── Accessible timeline
│   └── Footer and real links
├── Scroll / Animation coordinator
│   ├── GSAP timelines
│   ├── ScrollTrigger progress
│   └── Active section/checkpoint state
├── Shared 3D experience (when supported)
│   ├── Hawkins environment
│   ├── Dimensional portal
│   ├── Upside Down environment
│   ├── Supernatural silhouette
│   ├── Laboratory elements
│   ├── Timeline path/checkpoints
│   └── Wormhole / final environment
└── Data layer
    ├── Symposium details
    ├── Event/activity data
    └── Timeline data
```

The DOM and 3D experience should share a single scroll-progress source or a clearly defined synchronization interface. Do not create independent competing smooth-scroll systems.

## 3. Suggested folder structure

Adapt this to the repository rather than blindly moving files.

```text
src/
├── app/ or pages/
├── components/
│   ├── navigation/
│   ├── sections/
│   ├── timeline/
│   ├── scenes/
│   ├── effects/
│   └── ui/
├── data/
│   ├── symposium.ts
│   ├── events.ts
│   └── timeline.ts
├── hooks/
│   ├── useReducedMotion.ts
│   ├── useWebGLSupport.ts
│   └── useScrollProgress.ts
├── animations/
│   ├── sceneTransitions.ts
│   ├── cameraTimelines.ts
│   └── textAnimations.ts
├── styles/
│   ├── tokens.css or designTokens.ts
│   ├── typography.css
│   └── global.css
└── types/
```

Possible component names:
- `HeroSection`
- `HawkinsScene`
- `DimensionalPortal`
- `UpsideDownScene`
- `LaboratoryScene`
- `TimelineScene`
- `TimelinePath`
- `TimelineCheckpoint`
- `AccessibleTimeline`
- `WormholeScene`
- `LoadingScreen`
- `ProgressIndicator`
- `Navigation`
- `FooterSection`

Names are suggestions, not a requirement to create every component.

## 4. Content model

Keep real content in data structures, not hardcoded inside animation code.

Example TypeScript shape (adjust to actual content):

```ts
export interface TimelineEntry {
  id: string;
  date?: string;
  time?: string;
  title: string;
  description?: string;
  location?: string;
  href?: string;
  order: number;
}

export interface EventItem {
  id: string;
  title: string;
  description?: string;
  category?: string;
  requirements?: string[];
  href?: string;
}

export interface SymposiumInfo {
  name: string;
  edition?: string;
  date?: string;
  venue?: string;
  institution?: string;
  registrationUrl?: string;
}
```

Only populate fields supported by the existing site/repository. Missing fields should remain absent rather than fabricated.

## 5. 3D scene architecture

### Shared scene
Prefer one shared `Canvas` and scene controller if the existing application permits it. The environment can evolve through scene state, lighting, model visibility, fog, and camera motion.

### Scene state
Define a small, explicit scene progression, for example:

```text
HAWKINS → PORTAL → UPSIDE_DOWN → LANDMARK
→ CONTENT/LAB → TIMELINE → WORMHOLE → FINALE
```

The labels are conceptual states, not separate routes. Map actual page sections to the scenes that best support their content.

### Camera control
- Derive camera position from a normalized progress value.
- Interpolate position smoothly.
- Orient the camera along the curve tangent or a stable look-ahead point.
- Avoid abrupt roll and sudden 180-degree flips.
- Make progress reversible.
- Provide reduced-motion camera states.
- Do not bind heavy React state updates to every scroll pixel.

### Timeline path
Use a Three.js curve such as `CatmullRomCurve3` or another suitable spline. Map normalized progress to a curve parameter, then compute position and tangent. Place checkpoint markers at normalized path positions associated with chronological entries. Keep event data independent of 3D coordinates.

Conceptual relationship:

```text
scroll progress
  → normalized path progress
  → camera position and orientation
  → active checkpoint
  → accessible timeline content
```

Clicking a checkpoint should move to its corresponding scroll/progress position or otherwise focus its content. Do not implement camera movement in a way that breaks browser navigation or keyboard access.

## 6. Scroll and animation integration

- Use GSAP/ScrollTrigger for DOM reveal choreography and section progress.
- Use the same progress model to update the 3D camera.
- If Lenis is already installed or selected, integrate it with GSAP using the supported synchronization pattern.
- Do not use multiple smooth-scroll libraries simultaneously.
- Use `gsap.context()` or the framework's equivalent cleanup pattern.
- Kill ScrollTriggers and timelines on unmount.
- Respect reduced-motion preferences.
- Avoid scroll-locking the visitor into long pinned sections.
- Ensure content remains reachable if JavaScript or WebGL fails.

## 7. Asset strategy

- Inspect existing assets before sourcing or creating new ones.
- Prefer optimized GLB/glTF models and compressed textures.
- Lazy-load large scene assets where practical.
- Provide a fallback visual if an asset fails to load.
- Do not assume licensed Stranger Things models, logos, footage, or music are available.
- Use authorized assets or original genre-inspired assets.
- Track asset source and license in an asset note or project manifest.

## 8. Performance strategy

- Cap device pixel ratio where needed.
- Reduce particle count and shadow complexity on mobile.
- Avoid expensive real-time lights when baked lighting or simpler effects work.
- Use instancing for repeated particles/objects where appropriate.
- Avoid continuous rendering when nothing needs to animate, if compatible with the scene.
- Dispose of geometries, materials, textures, and render targets when no longer used.
- Lazy-load nonessential scenes.
- Keep DOM text outside the canvas.
- Measure before adding post-processing.

## 9. Failure and fallback behavior

- If WebGL is unsupported or the 3D scene fails, show a static atmospheric background and retain all DOM content.
- If a model fails, use a neutral placeholder silhouette or omit the effect without breaking layout.
- If JavaScript animation fails, sections must remain readable in document order.
- If audio is unavailable, the site remains fully usable.
- If reduced motion is enabled, avoid camera travel and intense effects while preserving navigation and content.

## 10. Netlify and build

Inspect existing scripts and Netlify configuration first. Preserve the current deployment setup unless a change is necessary. Confirm that the production build succeeds and that client-side routing, asset paths, and fallback behavior work on the deployed site.

# Design System and Art Direction
## Stranger Things-Inspired AnalytixFest 2K27

## 1. Creative statement

A visitor enters Hawkins after dark, approaches a dimensional breach, travels into the Upside Down, encounters immense supernatural silhouettes, explores symposium information in cinematic environments, and follows a 3D path through the real event timeline before emerging into the final symposium reveal.

The atmosphere is mysterious and cinematic; the information remains clear and professional.

Use the reference portfolio for ambition and scroll-driven spatial storytelling, not for copied design or assets.

## 2. Visual principles

- Dark atmospheric spaces with strong focal points.
- Large editorial typography and intentional negative space.
- Controlled red accents, with blue/violet reserved for dimensional states.
- Deep foreground/midground/background layering.
- Fog, particles, and lighting used sparingly.
- Scene changes should be connected by camera movement and environmental transformation.
- Real event content takes priority over decoration.
- Avoid generic SaaS cards, random gradients, constant movement, and unnecessary glass effects.

## 3. Color tokens

```css
:root {
  --color-obsidian: #050505;
  --color-hawkins-night: #10151C;
  --color-upside-down: #090608;
  --color-blood-red: #C8102E;
  --color-neon-crimson: #FF1838;
  --color-electric-blue: #55C8FF;
  --color-toxic-violet: #7626A8;
  --color-ash: #858585;
  --color-pale: #F5F1EC;
}
```

Usage:
- Obsidian: page base and negative space.
- Hawkins Night: ordinary-world environments.
- Upside Down: alternate-dimension scenes.
- Blood Red: main action accent and key portal lighting.
- Neon Crimson: small highlights, active checkpoint, selected effects.
- Electric Blue: scientific/laboratory cues and ordinary-world contrast.
- Toxic Violet: rare supernatural accents.
- Ash: secondary text and quiet labels.
- Pale: primary text.

Do not use every accent at once. Keep the overall frame mostly dark and the text readable.

## 4. Typography

Use:
- A dramatic display font for hero and major scene titles.
- A clean sans-serif for body copy and interface labels.
- A monospaced face for laboratory readouts, coordinates, scene IDs, and metadata.

Choose open-source or appropriately licensed fonts. Confirm font loading and provide fallbacks. Do not use an unauthorized Stranger Things logo/font asset. A genre-inspired treatment is sufficient.

Typography guidance:
- Hero: large, tight line-height, responsive clamp sizing.
- Section titles: oversized and editorial.
- Body: comfortable line length and readable mobile size.
- Metadata: small uppercase labels with tracking, never so small that they become inaccessible.
- Use clipping/masking only if text remains readable and accessible.

## 5. Scene art direction

### A. Hawkins — arrival
- Near-black forest.
- Blue-gray night light.
- Fog and sparse drifting particles.
- Distant crimson light/portal.
- Strong silhouettes and clear hero title.

### B. Manifesto — approach
- Camera travels through foreground trees.
- Large headline fragments enter with restrained movement.
- The environment gradually becomes less familiar.

### C. Portal — dimensional breach
- Vertical or otherwise monumental organic opening.
- Crimson core, subtle distortion, tendrils, particles.
- Use lighting and depth to imply energy; avoid an overcomplicated shader stack.

### D. Upside Down
- Decayed alternate landscape.
- Twisted vines, suspended ash-like particles, dense fog.
- Red/violet accents and dark silhouettes.
- Preserve contrast behind text.

### E. Mind Flayer-inspired landmark
- Monumental distant spider-like silhouette.
- Backlighting through fog.
- Minimal movement; no graphic violence.
- Keep the figure an atmospheric landmark rather than a distracting foreground object.

### F. Laboratory
- Dark industrial space.
- Retro monitors and scientific labels.
- Small status lights and restrained interface details.
- Any control that looks clickable must have real behavior.

### G. Timeline tunnel
- A continuous curved or looping path.
- Glowing red guide line and distinct checkpoint markers.
- Repeated geometric structures for a sense of travel.
- Camera follows the path; checkpoint text remains in accessible DOM.
- The visual loop must not change the real chronological order of the schedule.

### H. Wormhole
- Concentric forms, central void, particles, restrained distortion.
- Camera aligns with and travels through the opening.
- Keep transition reversible.

### I. Final scene
- Clear, balanced composition.
- Dimensional breach recedes into the background.
- Red, blue, and pale light used in a restrained way.
- Strong symposium title and obvious functional actions.

## 6. Layout and interaction

- Use full-screen scenes only where they improve the narrative.
- Use editorial compositions rather than repeating the same card grid.
- Keep real event information in the DOM.
- Buttons must have clear labels, focus states, and working destinations.
- Hover effects are enhancements only; touch users need equivalent access.
- Navigation remains available and predictable.
- Keep registration accessible without requiring a long scroll journey.
- Provide progress feedback for long cinematic sections.

## 7. Motion language

Motion should feel slow, physical, and intentional:
- Smooth camera approach.
- Subtle parallax.
- Staggered text reveals.
- Portal pulse and controlled particle drift.
- Slow light changes.
- Gentle camera easing at timeline checkpoints.

Avoid:
- Random floating.
- Uncontrolled rotation.
- Excessive glitching.
- Aggressive camera roll.
- Rapid flashing.
- Long forced scroll sequences.
- Motion that blocks reading or interaction.

## 8. Sound

Sound is optional:
- Never autoplay unexpectedly.
- Add an explicit sound toggle if audio exists.
- Default to muted.
- Use original or properly licensed sound only.
- The site must be complete and understandable without sound.

## 9. Responsive art direction

Desktop:
- Broad camera paths, deep layering, full scene composition.

Tablet:
- Shorter camera paths, less geometry, adjusted typography.

Mobile:
- Reduced particles and post-processing.
- Simplified scenes and shorter transitions.
- Touch-friendly controls.
- Timeline content remains easy to navigate.
- Do not shrink desktop compositions mechanically.

## 10. Accessibility and visual fallback

- Respect `prefers-reduced-motion`.
- Maintain text contrast.
- Use semantic headings and buttons.
- Do not rely on color alone for checkpoint status.
- Keep all essential content outside the canvas.
- Show a still atmospheric background if WebGL is unavailable.
- Ensure all timeline entries remain accessible in a conventional HTML list.

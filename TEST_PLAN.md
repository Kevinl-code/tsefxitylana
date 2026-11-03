# Test Plan
## AnalytixFest 2K27 Cinematic Website

## 1. Purpose

Verify that the redesigned site preserves accurate symposium information, delivers the intended cinematic experience, remains responsive and accessible, and can be built/deployed successfully.

## 2. Test approach

1. Inspect existing scripts and testing tools before adding new ones.
2. Run existing lint, type-check, test, and production-build commands.
3. Test actual browser interactions manually.
4. Test at desktop, tablet, and mobile sizes.
5. Test reduced motion and WebGL failure behavior.
6. Record failures and fix them before declaring completion.

Do not add a new testing framework unless the project needs it.

## 3. Content integrity tests

- [ ] Symposium name and edition match the existing site.
- [ ] Event date, venue, institution, and department details are accurate where present.
- [ ] All existing important sections are retained or intentionally mapped to a new section.
- [ ] Event/activity titles and descriptions are accurate.
- [ ] Rules and eligibility information are preserved.
- [ ] Timeline entries match the source and remain chronological.
- [ ] Registration links point to the real destination.
- [ ] Contact and institutional details are correct.
- [ ] No fictional Stranger Things narrative is presented as factual event information.
- [ ] No unsupported date, fee, speaker, or schedule entry has been invented.

## 4. Functional tests

### Navigation
- [ ] Desktop menu opens/closes.
- [ ] Mobile menu opens/closes.
- [ ] Each link reaches the intended section or URL.
- [ ] Escape closes an open menu where appropriate.
- [ ] Keyboard focus is visible and ordered sensibly.

### Registration and links
- [ ] Every registration CTA works.
- [ ] External links use correct destinations.
- [ ] Event/activity links work.
- [ ] No fake or empty buttons remain.
- [ ] Footer links work.

### Scroll and scene choreography
- [ ] Hero loads without blocking the page.
- [ ] Scroll advances the scene in the expected order.
- [ ] Scrolling backward reverses the experience sensibly.
- [ ] Text remains readable during transitions.
- [ ] No unintended scroll lock or jump occurs.
- [ ] Progress indicators remain synchronized with the page.

### Timeline
- [ ] Camera follows a continuous path.
- [ ] Camera position and orientation do not jump unexpectedly.
- [ ] Timeline entries appear in chronological order.
- [ ] Active checkpoint is clear without relying only on color.
- [ ] Each checkpoint reveals the correct source data.
- [ ] Clicking/selecting a checkpoint reaches its content.
- [ ] Backward scrolling works.
- [ ] Users can access entries without completing the whole animation.
- [ ] Accessible HTML timeline works without WebGL.
- [ ] Mobile timeline is usable with touch.

### Optional sound
- [ ] Sound does not autoplay unexpectedly.
- [ ] Toggle works.
- [ ] Muted mode preserves the full experience.
- [ ] Missing audio files do not break the page.

## 5. Responsive tests

Test at minimum:
- [ ] Small mobile viewport (approximately 360px wide).
- [ ] Larger mobile viewport.
- [ ] Tablet portrait and landscape.
- [ ] Standard laptop viewport.
- [ ] Large desktop viewport.

Check:
- No horizontal overflow.
- No clipped essential text.
- Buttons are touch-friendly.
- Menus remain usable.
- 3D camera framing remains meaningful.
- Timeline labels do not overlap.
- Layout does not depend on hover.

## 6. Accessibility tests

- [ ] `prefers-reduced-motion` produces a usable reduced-motion experience.
- [ ] All essential content remains available with animation disabled.
- [ ] Keyboard navigation reaches all controls.
- [ ] Focus indicators are visible.
- [ ] Semantic heading hierarchy is reasonable.
- [ ] Buttons and links have descriptive accessible names.
- [ ] Text contrast is sufficient.
- [ ] Status is not conveyed only by color.
- [ ] Screen readers can access timeline content outside the canvas.
- [ ] Audio is optional.
- [ ] WebGL fallback preserves content and navigation.

## 7. Performance and resilience

- [ ] No avoidable console errors or unhandled promise rejections.
- [ ] Large models/textures are optimized.
- [ ] Nonessential assets are lazy-loaded where practical.
- [ ] Mobile scene complexity is reduced.
- [ ] GPU resources are cleaned up when applicable.
- [ ] Loading state is clear.
- [ ] Asset failure does not collapse the layout.
- [ ] WebGL initialization failure falls back gracefully.
- [ ] Scroll does not cause severe jank on a representative mid-range mobile device.

Do not claim a numeric performance score unless it was actually measured.

## 8. Build and deployment

- [ ] Dependency installation succeeds using the repository's intended package manager.
- [ ] Type check succeeds if configured.
- [ ] Lint succeeds if configured.
- [ ] Tests succeed if configured.
- [ ] Production build succeeds.
- [ ] Netlify configuration remains valid.
- [ ] Asset paths work after deployment.
- [ ] Direct page loads and refreshes work for existing routes.
- [ ] Deployed site has no broken critical assets or links.

## 9. Regression checks

After major animation or layout changes:
- Recheck navigation.
- Recheck registration.
- Recheck all timeline entries.
- Recheck mobile.
- Recheck reduced motion.
- Recheck WebGL fallback.
- Re-run the production build.

## 10. Completion report format

At completion, report:
1. Features implemented.
2. Content sources verified.
3. Commands/tests run and their actual results.
4. Known limitations or missing source data.
5. Deployment considerations.
6. Files/docs updated.

Never state a test passed unless it was actually run.

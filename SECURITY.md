# Security, Privacy, and Asset Safety
## AnalytixFest 2K27 Website

## 1. General rules

- Do not expose API keys, database credentials, tokens, passwords, or private environment variables in source code, documentation, commits, or client-side bundles.
- Never place secrets in `VITE_*` variables or other variables bundled into browser code; frontend environment variables are public.
- Keep secrets in the deployment platform's server-side environment or an appropriate backend.
- Do not add a backend, analytics service, authentication, database, or third-party script unless the existing product requires it.
- Preserve existing security-sensitive configuration unless a change is necessary and understood.

## 2. Registration and external links

- Preserve the real registration URL discovered in the existing project/site.
- Do not invent a registration destination.
- Validate any user-provided URL before using it in an external-link flow.
- For links opening a new tab, use appropriate `rel="noopener noreferrer"` protections where relevant.
- Do not collect personal information directly unless the current product already requires it and the flow is understood.
- Do not log form values, contact details, or other personal information unnecessarily.

## 3. Dependencies

- Inspect the current package manager and dependency versions before installing anything.
- Prefer established packages and minimal dependencies.
- Avoid unnecessary or unmaintained packages.
- Do not run arbitrary install scripts or shell commands copied from untrusted sources without inspection.
- Review dependency changes and update the lockfile with the project's existing package manager.
- Do not upgrade the entire stack merely to add a visual effect.

## 4. 3D assets and browser safety

- Treat downloaded models, textures, scripts, and media as untrusted until their origin is known.
- Prefer GLB/glTF assets from reputable sources and inspect licensing.
- Do not execute downloaded scripts as part of an asset workflow.
- Keep model loading constrained to known assets; avoid accepting arbitrary user-supplied asset URLs.
- Handle failed or malformed asset loads without breaking the rest of the page.
- Avoid unsafe HTML injection when rendering content from data files.
- Use text rendering APIs/framework escaping rather than injecting untrusted HTML.

## 5. Copyright and licensing

*Stranger Things*, its characters, logos, music, footage, and official models may be protected by copyright and/or trademark.

- Use authorized assets only when permission is available.
- Otherwise create original genre-inspired environments, silhouettes, effects, and typography.
- Do not assume assets found online are free to use.
- Do not use copyrighted show audio or footage without permission.
- Keep a simple asset-source/license record for nontrivial external assets.
- Do not copy the reference portfolio's exact design or assets.

## 6. Privacy and analytics

- Do not add analytics, tracking, cookies, or third-party telemetry unless already present or explicitly required.
- If existing analytics are retained, do not broaden data collection as part of the visual redesign.
- Do not store sound preferences or other settings in a way that captures sensitive information.
- Keep user controls understandable and avoid hidden tracking behavior.

## 7. Configuration and deployment

- Inspect Netlify configuration and existing environment variables before changing deployment behavior.
- Never print secret values in logs or completion reports.
- Ensure public configuration contains only values intended to be public.
- Avoid exposing source maps or debug endpoints if the existing deployment policy prohibits them.
- Do not modify DNS, domains, or deployment secrets as part of ordinary frontend implementation.

## 8. Security acceptance checklist

- [ ] No credentials or secrets added to client-side code.
- [ ] No unneeded data collection or third-party trackers added.
- [ ] External links and form destinations are the real, intended destinations.
- [ ] New dependencies are justified.
- [ ] Asset sources and licenses are considered.
- [ ] No unsafe HTML injection introduced.
- [ ] Failure of a third-party asset does not break core content.
- [ ] Netlify configuration and environment variable names are handled safely.

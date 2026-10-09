# WEB LAB architecture

## Scope and hosting

Independent, public, static GitHub Pages gallery at /web-lab/. Preserve the personal root repository and all linked service repositories. Only this repository is changed or deployed. No Sites/Cloudflare manifest, backend, external API, identity, database or package runtime dependencies.

## Layers

- dist/index.html: Korean semantic shell, project navigation, no-JavaScript links, native preview dialog and public context.
- dist/styles.css: dark catalog presentation, responsive layout, visible focus and reduced motion.
- dist/src/projects.js: immutable, curated metadata, pure category/id selection and total/category counts. Only manually reviewed, allowlisted public services; the catalog length is not fixed. This is not automatic repository discovery.
- dist/src/app.js: DOM construction, category/difficulty selection and native-dialog lifecycle. Text is assigned through textContent, not user-input HTML. Static data owns project URLs.
- dist/src/progress.js: pure allowlisted parsing of the local completion summary, at most 6000 input characters and 64 catalog ids, numeric counts bounded to 1000. The UI owns the single read-only storage boundary. D13 expands only the reader's catalog bound; the shared v1 schema and existing service writers remain unchanged. New creative/chemistry apps use only their own keys and create no shared entries.
- dist/assets/previews/: snapshots of the user's existing public sites, copied from verified local captures. No live iframe, autoplay, app execution or external image request.
- tools/: loopback-only static preview and read-only integrity checks. Never deployed.
- test/: focused catalog/link/selection tests. Not a substitute for real-browser or live-site verification.
- .github/workflows/pages.yml: verify before uploading only dist, then publish with deployment-scoped permissions and pinned official action revisions.

## Boundaries and state

The gallery stores no visitor records or settings and makes no fetch/XHR requests. Category, search, difficulty and preview state exist only in DOM/memory and the optional URL fragment. Opening a service or its code is a deliberate external navigation. External links use noopener noreferrer; document referrer policy is no-referrer. The approved 2026-10-09 extension reads only the bounded web-lab-progress-v1 completion summary (completed/total per allowlisted app). It does not read private run payloads, write or delete service records, start audio or change game state. Malformed/unavailable summaries fail closed to no badge. This personal-browser summary is not public ranking or identity.

CSP metadata blocks app-initiated network connections, frame embeds and inline scripts. GitHub hosting logs are separate; CSP metadata is not a universal security boundary or a substitute for response headers.

Preview images are static snapshots, not live-status badges. Descriptions come from each service's README and architecture, with public HTTP/title checks. No fabricated uptime, user count, rating or global score is shown. Static images and descriptions are updated manually in this repository without editing the services.

UTF-8 without BOM and CRLF for text. Images are binary. The gallery can be used without JavaScript through the maintained execution and source fallback links. Page titles and descriptive copy do not state a fixed catalog size; UI counts derive from the project catalog.

# Contributing, mathematics and data contracts

The Zeta Citadel is a plain static ES-module site; `index.html`, `styles.css`, `app.js`, `atlas.js`, and six district/feature modules are deployed directly by Vercel. No package installation, back end, account or analytics service is needed at runtime.

## Authoritative model

- `atlas.js` owns original `REGIONS` (exactly eight) and legacy `SUBNODES`, their authored stories, coordinates and source metadata.
- `locations.js` is the canonical typed `LOCATIONS` tree combining regions, sites, chambers and exhibits. Keys are stable routes; parent/ordered children are reciprocal. The helper `validateLocations(nodes)` may validate cloned corrupt fixtures in tests without modifying the live graph. Nodes supply a stable `id`, `type`, `parent` (null only for root region), `children`, text/caveats, source objects `{name,url}` and HTTPS `sourceIds`.
- `connections.js` owns exactly eight S008 *independently evidenced* directed/non-directed records. Types: `proved_implication`, `conditional_dependency`, `historical_influence`, `conceptual_analogy`. Every edge has two live location endpoints, `id`, review date, premise/conclusion scope, editorial status and explicit source links. Edge URLs are `#connection--<id>`; no transitive closure.
- `discovery.js` derives search results from canonical `LOCATIONS` and `CONNECTIONS`; it does not duplicate theorem authority. Its two authored trails use only those routes; `#discover`, `#journey--beginner` and `#journey--advanced` are reserved.
- `app.js` owns the shared URL/history router, pan/zoom/keyboard/touch actions and opt-in local saved state. Preserve Back/Forward/Up/Home, old region IDs, status warnings and escaping in any renderer.

## How to propose a content edit

1. Find the original theorem, publisher or author source and open it. Do **not** rely on an abstract, search snippet or beautiful illustration for a detailed technical assertion. Record publication date/peer-review status, mathematical quantifiers, finite domain, constants, normalization and measurement units.
2. Add or revise only the canonical data location. Include trustworthy source URL, human-readable title, scope, caveat and precise evidence status. An editor may call a result *proved* when its theorem is established; a mathematical proposition inferred from a **conjectural premise** must say so plainly.
3. Maintain stable IDs and complete parent/children navigation; never replace an old deep-link ID for convenience. Follow escaping and HTTPS source requirements; links that return a 404 must be replaced by independently verified resources rather than ignored.
4. For a new edge, justify the logical direction/type from mathematics or direct historical documents, not ring placement. For historical influence distinguish chronology from entailment; analogies are undirected.
5. If the content changes the scope of a source, update the source audit register `docs/MATHEMATICAL_SOURCE_AUDIT.md` and add targeted tests. Preserve S001 eight roots, S002–S009 legacy tests and source/negative-case invariants.
6. Run tests locally before PR:
   ```sh
   for file in *.js tests/*.mjs; do node --check "$file"; done
   node tests/graph.mjs
   node tests/connections.mjs
   node tests/discovery.mjs
   node tests/release-audit.mjs
   python3 -m http.server 8000
   ```
   In another terminal, after installing Playwright 1.56.1 + Chromium for developer tests, run `node tests/browser.mjs`, `node tests/browser-connections.mjs`, `node tests/browser-discovery.mjs` and `node tests/browser-release.mjs`. The browser scripts launch their own HTTP server on separate ports, so the manual HTTP server is optional for those tests.
7. Require the final PR-head CI checks and browser matrix. Record exactly what was actually run and inspect deployment commit metadata before claiming production is current.

## Scientific red lines

This is a spatial educational analogy **not a containment/implication lattice**. No finite set of numerical zeros establishes RH. Zero-density upper bounds may leave exceptions. A theorem may have height/logarithm restrictions; exact inequalities must retain them. Displayed main terms, toy series and animations are not independently certified zeta computations. The 2026 zero-proportion results cited here are preprints unless a later peer-reviewed publication is checked. New research claims, media outreach and manuscript/registry submissions are outside this guide.

## Security, accessibility and maintenance

- Escape all dynamic text including status, URLs, source name and search results; allow only HTTPS external source links with `rel="noopener noreferrer"` for new tabs.
- Do not add external analytics, cookies, remote search, CDN executable script or credential collection. Fonts come from Google Fonts; that is an existing third-party request even though the app has no tracking endpoint.
- Test focus order, labelled controls, keyboard Escape and Enter, reduced motion, mobile/touch and history. Automated headless checks cannot replace a human screen-reader session, physical-device QA, accessibility audit or mathematical peer review.
- State exactly what data persists: local bookmarks/journey markers only after opt-in; no server-side profile. Storage-denied sessions should still be usable.

## Rollback

The static deployment has no mutable schema or server data. Revert the corresponding non-force PR merge in GitHub to roll back a release; validate the reverted main and production commit again. Do not force-push or delete session evidence.

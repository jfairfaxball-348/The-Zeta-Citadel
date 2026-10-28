# Volume I — Release scope, privacy, limitations and evidence

**Release line:** S001–S010 consolidation on 28 October 2026. Release acceptance requires final-PR checks and exact merged production deployment, not just this document.

## What the public atlas does

Eight preserved regions connect an original stylised SVG world to recursive museum-like chambers and optional teaching exhibits. The Courtyard illustrates zero-density bounds, Great Hall critical-line results, Keep proved zero-free regions, Dungeons finite-height certification, and Outer Territories several L-function frameworks. Eight **independently sourced** relationship records form a separate connections map. Discovery searches the canonical data and offers beginner/advanced authored reading trails.

For every nontrivial claim, consult the original linked source, status and caveat. **The atlas has not proved, disproved or computationally certified the Riemann Hypothesis.** Cartographic nesting never proves an implication.

## Privacy

There are no application accounts, backend search requests, remote analytics, user-upload endpoints, cookies or paid services implemented by this project. Searches run in client memory. Saved location shortcuts and journey progress begin session-only. Only after the visitor explicitly checks **Remember my saved places and journey progress on this device** does the app write opt-in state to the browser's `localStorage`. Disabling retention or clearing browser storage removes retained data. If storage is unavailable the app falls back to in-page state. `localStorage` is device/browser specific and is not encrypted against anyone with access to that browser profile.

The page currently requests Google Fonts from `fonts.googleapis.com` and `fonts.gstatic.com`; as third-party font services, these requests may be visible to Google and the visitor's network. Source links navigate to independent external publishers and have their own privacy policies. Do not misread “no app telemetry” as “no network requests at all.”

## Trust and limitations

- The main zero-free comparison uses the two precisely stated 2024 Mossinghoff–Trudgian–Yang inequalities on their explicit domains. It is **not** a map of individual zeros.
- Dungeons compares a rigorous published **height** at 3×10¹² with the *noninteger main term* of a zero-count asymptotic; it does not recalculate certified zeros.
- The Hall's 2026 67.25% results are identified as research preprints. “Over 67.25%” is not automatically the latest refined constant, and no finite proportion reaches 100%.
- The Guth–Maynard exponent is an asymptotic **upper bound** allowing exceptions; it does not imply that off-line zeros do not exist.
- GRH, ERH, and Grand RH use explicitly declared meanings. Source records distinguish proved results from hypothetical premises, historical narrative and conceptual analogies.
- Interactive diagrams include toy/exact examples, author-sourced data and schematic art. They are not a formal proof checker.
- Browser CI uses headless Chromium on hosted Linux, not a physical phone/tablet, Safari or Firefox and not a manual screen-reader certification.
- External citations may break or change status. The [mathematical audit](MATHEMATICAL_SOURCE_AUDIT.md) documents the review date, direct-check gaps and source substitutions.

## Evidence layers

1. **Repository data correctness:** validators for the typed graph, all eight connections, journey references, direct-link IDs, HTTPS source metadata, and escaping. Negative cases cover orphans, cycles, unsafe URLs, invalid types and routes.
2. **Functional Chromium CI:** real HTTP desktop/tablet/touch-mobile with historical regression suites, keyboard and URL-history checks, opt-in local-only storage behaviour, source-link attributes, reduced motion, overflow and console/page errors.
3. **External mathematics:** independently retrievable publisher/author materials listed in the audit. Editorial verification is *not* reproduced mathematically by CI.
4. **Deployment:** inspect Vercel production target, READY status and exact GitHub SHA **after** merging; do not infer production correctness from preview deployment or prior-S009 status.

## Release decision and rollback

The decision and exact checks/sha are recorded in `sessions/S010/VALIDATION.md` and `sessions/S010/CLOSEOUT.md`. If a critical citation, browser regression or SHA mismatch remains, do not announce an accepted audited release; leave S010 blocked. A released change can be reverted by an ordinary GitHub revert and redeployment of reviewed main. Never rewrite the protected history as a repair shortcut.

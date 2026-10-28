# S009 — Search, orientation and learning journeys / closeout

**Authorised independently:** owner request 28 October 2026. **Entry baseline:** merged S008 `6b547330c5eb330296da1c5b976d4205a28c2b51`. **Tested S009 implementation:** `cff8bd9086d1a43ef9510d13b1962aa6c5182c7c`. **Branch:** `session/S009-discovery-journeys`.

## Delivered within S009 only
- Source-linked, fully client-side discovery index assembled from existing validated mathematical locations and eight typed relationships; weighted exact IDs/titles, authors/source names, theorem subjects and full-text terms; clear results/empty states and explicit editorial statuses.
- New `#discover` route with accessible search and saved-place controls, `#journey--beginner` six-stop route, `#journey--advanced` seven-stop route. Each journey traverses existing sourced exhibits and a typed connection, with per-stop narrative and optional visited markers.
- Stable copyable deep links, Back/Forward/reload and one shared router, local-only optional persistent bookmarks/checkmarks (off by default), session-only fallback on blocked storage. Existing S001 map, eight region IDs, old deep links and S008 evidence navigation are preserved.
- New responsive stylesheet, two control entry points, source-safe escaping, no new runtime library, authentication, cookies, telemetry or RH proof claim.

## Acceptance evidence
[GitHub S009 implementation run 40737691789](https://github.com/jfairfaxball-348/The-Zeta-Citadel/actions/runs/40737691789) completed success at `cff8bd9`, including S002–S008 HTTP Chromium regressions plus dedicated S009 desktop/touch mobile/keyboard/browser tests and pure negatives. [Detailed validation](VALIDATION.md) captures original failures and corrections. The state and outgoing prompt are installed **after** this run; all final PR-head and merged-main checks must be verified independently, not inferred from this record.

## Transition and hard stop
S009 is closed on tested implementation with governance prepared for merge. Sole following installed prompt is **S010 READY / UNEXECUTED**, requiring a *fresh independent owner instruction*. This S009 invocation does **not** execute consolidation, S011+, research publication or any outreach.

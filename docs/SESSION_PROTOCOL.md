# Session protocol — The Zeta Citadel

## Authority
Actual remote `main`, then `authoritative/STATE.json`, `AGENTS.md`, `authoritative/START_HERE.md`, this protocol, `docs/ROADMAP.md`, and the single `authoritative/NEXT_SESSION_PROMPT.md`. A chat instruction explicitly invoking the named session is required to execute it. Installing a prompt never launches it.

## Standard S### lifecycle
1. **Entry / reconciliation:** retrieve current remote `main` SHA and review any changes since the predecessor. Check that the incoming session is unique and marked `READY_UNEXECUTED`, predecessor is `CLOSED`, and there is no conflicting ongoing session. Read all governing and relevant implementation files.
2. **Bounded plan:** create `sessions/S###/PLAN.md` with objective, intended edits, assumptions, acceptance tests, source/data provenance needs, rollback and stopping criteria. No downstream session work.
3. **Build on branch:** create `session/S###-short-title` from the pinned base. Prefer a small, reviewable commit set, no wholesale replacement of working map assets, and no dependencies without justification.
4. **Validate:** record in `sessions/S###/VALIDATION.md` all actual commands, environments, test results, visual desktop/mobile checks, content checks, blockers and items not tested. Demonstrate no regression of existing world-level experience.
5. **Handoff:** write `sessions/S###/CLOSEOUT.md` with what changed, checked paths, results, known limitations, PR link and exact observed refs when available. Update `authoritative/STATE.json` and `START_HERE.md` together. Promote exactly one following session prompt, and only if accepted; do not execute it.
6. **Merge and independent check:** use an ordinary PR, then non-force two-parent merge to `main` if checks permit. Fetch merged `main` and verify expected files, statuses and (where accessible) parent SHAs. Report outgoing hash and unverified claims plainly. Do not fabricate a merge hash in a file written before the merge.
7. **Stop:** end the invoked session. The next session awaits another owner invocation; no automatic S### chain.

## Status vocabulary
- `CLOSED`: completed predecessor with validated handoff.
- `READY_UNEXECUTED`: sole prepared successor, not started and not self-authorising.
- `IN_PROGRESS`: invoked owner session currently being worked.
- `BLOCKED`: mandatory acceptance not met; do not silently promote another session.
- `PLANNED`: roadmap only, no prompt or permission to execute.

## Visual and mathematical evidence
Keep visual artefact screenshots separate from mathematical source claims. Interactive exhibits must say whether a point/curve is schematic, approximate or certified; citations should lead to primary reliable materials where possible. Check accessible control operation, focus states, responsive screen widths and reduced motion, not just mouse interaction.

## Stability and deployment
Static site on Vercel: no build required. Preserve the original site and URLs during incremental development. An unverified production deployment may not be reported as verified. Future tool or framework migrations are separate authorised scope.

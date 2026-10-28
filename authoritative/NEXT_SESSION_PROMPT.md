# S005 — Keep zero-free territories (READY, UNEXECUTED)

**Authorisation boundary.** Installed *after* the separately invoked S004; it is preparation for S005 only. A NEW owner instruction "run next session" or equivalent is mandatory to begin S005. Do not execute S006, revise RH as solved, or use a prior session's permission.

## Entry — source of authority, not historical guesses
Repository: https://github.com/jfairfaxball-348/The-Zeta-Citadel
Production: https://the-zeta-citadel.vercel.app/
Predecessor: S004, PR https://github.com/jfairfaxball-348/The-Zeta-Citadel/pull/4; S004 tested app head `05fb27f563dee057d5fc3c720fb28141b4eaa314`, subject to final governance and ordinary merge. Never assume this is live main.

1. Pin live remote `main` SHA/tree. Reconcile S004 PR #4 closure and true ordinary two-parent merge, required CI on branch/PR/main, production vs preview Vercel deployment, branch conflicts and unmerged changes; do not assume prior success from historical refs alone.
2. Read `AGENTS.md`, `authoritative/{STATE.json,START_HERE.md,NEXT_SESSION_PROMPT.md}`, `docs/{ROADMAP.md,SESSION_PROTOCOL.md}`, `sessions/S004/{PLAN,VALIDATION,CLOSEOUT}.md`, relevant S003 precedent and application code including `atlas.js`, `locations.js`, `app.js`, `courtyard.js`, `hall.js`, `laboratory.js`, CSS and tests.
3. Verify S004 CLOSED, S005 solely READY_UNEXECUTED and no conflicting active work. Create `session/S005-keep-zero-free` from the pinned main, with bounded PLAN, validation and closeout.

## Singular objective
Turn the Keep into a navigable, source-backed mathematical district showing what **proved zero-free regions** for the Riemann zeta function actually exclude, and the difference between such regions, the Courtyard's zero-density bounds, the critical line, and the unproved full RH. Reuse the recursive location graph and one shared interior routing surface.

## Mathematical requirements
A. **Source-first statements.** Check original publications or NIST DLMF §25.10/authoritative analytic number theory references for any stated zero-free region. Name the author, exact domain, restrictions on |Im(s)| or t, numerical constants if shown, real-part inequality (strict or non-strict), effective-vs-ineffective status, and any sufficiently-large assumptions. Do not invent or silently extrapolate constants, especially in low-height and near-pole cases. If sourcing a modern improvement, clearly date and label its review status.

B. **Correct complex-plane geometry.** Show the critical line Re(s)=1/2, strip 0<Re(s)<1, trivial zeros at negative even real integers, and simple pole at s=1, while keeping theorem-specific shaded zero-free regions separate from schematic space. Do not mistake a diagram's visual size for a rigorous certified boundary. If a graphic plots an inequality boundary, it must use exact sourced formulas within its stated domain, with any truncation explicitly marked. Show how dependence on |t| affects a classical region near Re(s)=1; explain why it does not cover the whole right half of the strip.

C. **One genuine working exhibit.** Controls for a height parameter and/or theorems to compare admissible zero-free boundaries and the gap to the critical line. Display formulas, domains, labels, numeric approximations clearly as calculations of theorem boundaries *not of zeta zeros*. Avoid drawing dots as discovered/verified zeros. Distinguish known zero-free guarantees, finite computational verification and conjectured RH.

D. **Graph/navigation and compatibility.** Preserve all eight original S001 region IDs, all Hall S002/S003 URLs, Courtyard S004 URLs `#density-guth`, `#density-idea`, `#density-exponent-exhibit`, `#density-definition-exhibit` and `#critical-line-exhibit`; keep breadcrumb/Up/Home/Back/Forward, direct reload, invalid hash fallback, keyboard, touch and reduced motion. Extend `locations.js` typed Keep descendants, source IDs, and shared renderer rather than adding a separate router. Static Vercel no dependency-heavy migration.

E. **Scientific boundaries.** A proved zero-free region need not prove RH. Do not claim a finite-height zero check or density estimate extends the region. No manuscripts, external submissions, commercial services, public promotion or S006 research activity authorised.

## Validation and stop gates
- Working world → Keep → theorem site → demonstrator → Up/Home/Back path, with direct links and correct sourced statement.
- Accurate boundary formulas and rigorously limited domain; no fake zeros or unsourced status upgrade.
- Real HTTP desktop & phone-size Chromium tests, navigation, keyboard and touch/reduced-motion, reload, invalid hash, console exceptions, no mobile overflow; legacy regression for Hall/Courtyard.
- `node --check` all modules incl. new Keep module; JSON and place-graph validation; full CI branch and PR after governance.
- Record all actual commands, refs, CI jobs, screenshots (if any), manual checks not performed and deployment evidence. Any unresolved factual/nav/CI blocker => S005 BLOCKED, do not install S006.

## Closeout
Commit `sessions/S005/{PLAN,VALIDATION,CLOSEOUT}.md`, `authoritative/STATE.json`, `START_HERE.md` and `docs/ROADMAP.md` consistently; only on acceptance install exactly one S006 READY/UNEXECUTED in this canonical prompt and do **not** execute. Reviewed PR, final branch/PR CI, non-force ordinary two-parent merge into main; separately inspect merged SHA/tree/main CI/Vercel state. No force pushes, rewrite, branch deletion or automatic future-session execution.

**Activation phrase:** "Run S005 in The-Zeta-Citadel from the committed canonical prompt."

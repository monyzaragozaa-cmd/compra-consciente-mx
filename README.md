# CompraConsciente MX — Week 12, Milestone 1

## Run on Mac

Install Node.js 22 or newer, open Terminal, then:

```bash
cd compra-consciente-mx
npm install
npm test
npm run dev
```

Open http://localhost:3000. This milestone displays a **placeholder page**, not the final comparison UI. The calculation engine is in `src/lib/calculations.ts`, and the runnable test vectors are in `tests/calculations.test.ts`.

Run `npm run typecheck` and `npm run build` after installing dependencies. These commands require downloaded dependencies and are not evidence of a deployment.

## Decisions and constraints

- No backend calls, analytics, storage, Supabase tables, or LLM use in the calculation engine.
- All money calculations use integer centavos. Financing remainder centavos are assigned to the final installment; therefore the last monthly remainder may differ.
- The total payable must be entered; unknown fees mean incomplete installment comparison.
- User decisions are never automated.
- Milestone 3 proposes a user-initiated local PDF export. Instructor confirmation is still pending.
- A real venture-owned domain **must be purchased and connected to Vercel before final submission**.

## Next milestones / evidence

At least five meaningful Git commits are planned across milestones; do not treat them as completed. Plan two Vercel deployments (initial and after a documented fix), preserving a failing test, focused repair, commit, redeploy, and successful retest. Do not publish budgets or secrets.

# CompraConsciente MX — Venture Charter

**Milestone:** Business Bending, Week 12 — Extraction + The Core Build  
**Status:** Proposed charter for review; not a validated product  
**Methodology:** Prevent, Explore, Empower

## 1. Venture name and purpose

**CompraConsciente MX** is a Spanish-language decision-support tool that helps young adults in Mexico understand how a planned purchase could affect their monthly budget before they commit. It compares realistic choices and explains the trade-offs without recommending a binding decision, approving purchases, or selling financial products.

## 2. Three-year product vision

Within three years, CompraConsciente MX aims to become an accessible, trustworthy, mobile-first resource for comparing everyday purchase decisions in Mexico. If early testing demonstrates value, future versions may support clearer financial education, optional user-controlled planning, and more accessible explanations. Expansion depends on demonstrated user needs, privacy safeguards, and available resources; these are aspirations, not promised features or outcomes.

## 3. Exact target users and problem

**Initial target user:** Spanish-speaking adults ages 18–29 living in Mexico, with a regular or estimated monthly budget, who are considering a discretionary purchase promoted through social media, advertising, or peer pressure. They may already have recurring expenses or installment obligations and want a simple comparison before spending.

**Problem:** A price or advertised monthly payment can hide the impact on money remaining after essential expenses, existing obligations, and savings goals. Users may struggle to compare buying immediately, paying over time, and waiting to save using consistent assumptions.

**Working hypothesis, not verified research:** Showing the three options side by side will help users explain their trade-offs more accurately and make a choice they understand.

## 4. North Star metric

**North Star:** Percentage of completed comparison sessions in which a test participant can correctly identify the budget impact of all three scenarios and explain at least one trade-off in their own words, without being told which option to choose.

**Proposed Week 12 validation target:** At least 80% of a small, explicitly reported usability-test sample meets that definition. This is a target, **not a measured result**. Report the sample size, test prompts, outcomes, and failures before making any success claim. The target may be revised after testing.

## 5. Single Week 12 core feature

A **three-scenario purchase comparison** based on user-entered monthly income, essential and other expenses, existing monthly payments, savings goal, purchase price, installment count, and any disclosed installment fees or interest.

- **Buy now:** Show the immediate purchase cost and its effect on the current month's available budget.
- **Installments:** Show the monthly payment, total amount paid, additional financing cost, and monthly budget effect during the payment period.
- **Wait and save:** Estimate the months needed to save for the purchase using a user-selected monthly saving amount and show the remaining monthly budget during that period.

All calculations use visible, deterministic formulas. The interface explains assumptions and missing information in plain Spanish. It does not rank choices as objectively best or label any purchase as safe.

## 6. Methodology-to-engine connection

The six-step methodology is: (1) identify the real problem, (2) understand consequences and risks, (3) explore alternatives, (4) turn information into action, (5) keep the person in control, and (6) test and improve.

**Step 3 — Explore different alternatives** directly powers the comparison engine. Steps 1 and 2 define the inputs and risks; Step 4 turns the calculations into understandable explanations; Step 5 preserves user choice; and Step 6 requires testing and iteration.

## 7. Product principles and human-decision safeguards

1. **Clarity over persuasion:** Explain numbers and trade-offs without pressure, urgency tactics, or promotional rankings.
2. **Human decision authority:** The user makes the final choice; the tool never authorizes, executes, or blocks a purchase.
3. **Transparent calculations:** Display formulas, assumptions, and the meaning of each output.
4. **Uncertainty is visible:** Label missing interest, fees, irregular income, and changing expenses as unverified assumptions; never present estimates as guarantees.
5. **Respect and accessibility:** Use clear Spanish, mobile-friendly layouts, and nonjudgmental language.
6. **No exclusion through automation:** A negative projected balance is a calculation to interpret, not a verdict about a person's worth, eligibility, or financial safety.

## 8. Core concepts and information flow

**Concepts:** Monthly income; monthly expenses; existing monthly obligations; savings goal; available monthly budget; purchase price; installment terms; financing cost; saving contribution; scenario; assumption; comparison result.

**Baseline formula:** Available monthly budget = monthly income − monthly expenses − existing monthly obligations − monthly savings goal.

**Buy now:** Current-month remainder = baseline available budget − purchase price.

**Installments:** If a fixed total payable amount is known, monthly payment = total payable ÷ number of months; financing cost = total payable − purchase price. If an interest rate or fees are provided instead, the calculation method must be explicitly defined and tested before use. Do not assume that advertised installments are interest-free.

**Wait and save:** Months to goal = ceiling(purchase price ÷ chosen monthly saving amount), assuming zero initial earmarked savings and a constant contribution; the app must state these assumptions. Monthly remainder while saving = baseline available budget − chosen monthly saving amount. A zero or negative contribution cannot produce a valid time estimate.

**Flow:** Consent and brief privacy notice → user enters values → inputs are validated → deterministic scenario calculations → side-by-side Spanish explanation with assumptions and limitations → user reviews options and decides independently → optional feedback for testing.

Negative remainders must remain visible rather than being silently clamped to zero. Different time horizons (one-time expense, monthly installments, and saving period) must be labeled to prevent misleading comparisons.

## 9. Explicit non-goals and scope cuts

Week 12 will **not** include banking integrations, bank credentials, credit scoring, loan eligibility decisions, purchase execution, affiliate sales, product recommendations, automated approvals, receipt scanning, image analysis, personalized AI financial advice, predictive spending models, or claims of guaranteed savings. No advanced financial forecasting or interest model will be presented as working unless implemented and verified. The priority is one reliable comparison flow, not a feature-rich platform.

## 10. Privacy, security, technical, and Blueprint commitments

- **Stack plan:** Next.js/React, Tailwind CSS, GitHub, Vercel, and Supabase on free tiers where available. A real venture-owned domain is a later milestone, not evidence of current deployment.
- **Consent first:** Explain what information is processed and request informed consent before handling sensitive financial inputs. Provide a way to stop without submitting data.
- **Data minimization:** Prefer calculations without persistent storage of personal financial inputs for the Week 12 core. Supabase may be configured for the required stack without saving individual budgets.
- **If personal user data is stored later:** Require Google authentication, user-scoped Row Level Security on every user-data table, and tested access policies before release.
- **Secure implementation:** Keep secrets out of code and GitHub; use environment variables; validate inputs, ranges, and installment counts; reject malformed or impossible values; avoid logging sensitive inputs.
- **Demo integrity:** Use only fictional financial profiles and label them clearly. Never imply that mock data or hypothetical examples represent real users.
- **Blueprint safeguards:** Specify the target user and measurable problem; make automated results explainable; label unverified assumptions; ask for consent; preserve human control; test the core before expansion.
- **Shadow clause:** Never transform apparently objective outputs into unquestionable decisions that could harm, pressure, or exclude users. The product does not claim financial safety.

## 11. Validation required before success claims

1. **Formula tests:** Verify buy-now, installment, and wait-and-save outputs with manually checked examples, including fees, zero contributions, negative balances, and boundary inputs.
2. **Input and security tests:** Check invalid, missing, extreme, and malicious values; verify no secrets or personal budget data leak through repositories, logs, or storage.
3. **Comprehension testing:** Ask target-user participants to interpret all three scenarios and explain a trade-off without coaching; record sample size, successes, confusion, and failures.
4. **Decision-control testing:** Confirm the UI never selects a purchase option for the user, claims safety, or conceals uncertainty.
5. **Deployment and accessibility checks:** Confirm the working flow on the public URL, mobile usability, Spanish readability, and basic keyboard access.
6. **Privacy verification:** Confirm consent appears before processing and verify actual data handling. If storage is introduced, test authentication and Row Level Security with separate user accounts.

**Evidence status at charter creation:** No interviews, measured improvement, validated metric, deployed feature, team approval, or successful test is claimed here. Those must be documented separately after they occur.

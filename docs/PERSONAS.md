# CompraConsciente MX — Synthetic Customer Personas

**Milestone:** Business Bending, Week 12 — Extraction + The Core Build  
**Status:** Proposed documentation for review; not validated customer research  
**Source of truth:** Approved `docs/CHARTER.md` and the Week 12 Blueprint conditions supplied for this venture  
**Methodology:** Prevent, Explore, Empower

> **Research integrity notice:** Both personas, their financial figures, purchase situations, and anticipated reactions are fictional. They are design and testing hypotheses, not customer interviews, observed behaviors, survey findings, or verified market segments. Any product-facing interface text should be in Spanish.

## Persona 1 — Valeria Hernández (synthetic)

### 1. Name, age, and background
Valeria is 24 and works full-time as an administrative assistant in Mexico City. She receives a predictable monthly salary, uses her phone for most purchases, and has previously chosen installment plans for electronics and clothing.

### 2. Monthly financial situation (fictional MXN)
| Item | Amount per month |
| --- | ---: |
| Net income | $16,000 |
| Essential and other living expenses | $9,000 |
| Existing installment obligations | $2,000 |
| Monthly savings goal | $1,500 |
| **Baseline available budget** | **$3,500** |

These figures are illustrative, not observed. The baseline follows the Charter formula: income minus expenses, existing payments, and savings goal. The savings goal is already deducted; it must not be deducted again in the buy-now or installment comparisons.

### 3. Purchasing behavior and influences
Valeria sees product promotions on Instagram and TikTok and compares advertised monthly payments more readily than total costs. She sometimes purchases because a limited-time promotion seems attractive, even when she already has other installments.

### 4. Specific problem and financial uncertainty
She wants a new phone but does not know whether the advertised installment payment would leave enough money for other spending. She is also unsure how a fee changes the total purchase cost.

### 5. Current workaround
She checks her bank balance and uses her phone calculator to divide the price by the number of installments. This does not consistently account for existing obligations, extra charges, or her savings goal.

### 6. Goals and motivations
She wants to understand what remains in her budget, compare the total cost of each choice, and keep saving without feeling pressured to buy immediately.

### 7. Frustrations, fears, and barriers
She dislikes unclear financing language, fears accumulating several monthly payments, and may distrust an app that calls a purchase “safe” without explaining the calculation.

### 8. Digital habits and accessibility needs
She primarily uses a smartphone and is comfortable with shopping apps but prefers short Spanish explanations, clear MXN labels, readable tables, and an option to inspect formulas. The experience should work with keyboard navigation and readable text sizes.

### 9. Test purchase scenario — three-scenario comparison
**Fictional purchase:** Smartphone priced at **$9,000 MXN**.

- **Buy now:** Current-month remainder = $3,500 − $9,000 = **−$5,500**. This is a projected shortfall against the defined monthly baseline, not an eligibility or safety verdict.
- **Installments:** Six monthly payments with a disclosed **$600 fixed total fee**; total payable = $9,600; monthly payment = **$1,600**; financing cost = **$600**; projected monthly remainder during payments = $3,500 − $1,600 = **$1,900**. This is a simplified fixed-total-payable example, not a credit offer or interest-rate model.
- **Wait and save:** Valeria chooses to set aside **$1,500 extra per month**, in addition to her existing $1,500 savings goal. Assuming no money already earmarked for this phone and no price changes, months needed = ceiling($9,000 ÷ $1,500) = **6 months**; projected monthly remainder while saving = $3,500 − $1,500 = **$2,000**.

The product should distinguish immediate cash impact, six months of installments, and six months of additional saving. It must label the fixed income, spending, price, and fee assumptions as unverified.

### 10. Expected successful outcome
Valeria can explain that installments reduce her monthly remainder and increase the total price, while waiting avoids the stated financing fee but delays the purchase. She chooses independently; success is comprehension, not which option she selects.

### 11. Possible confusion or abandonment
She may think the $1,900 installment remainder is guaranteed, confuse her existing savings goal with additional phone savings, or leave if the app asks for bank login information. A dense comparison or unexplained negative balance could also cause abandonment.

## Persona 2 — Diego Ramírez (synthetic)

### 1. Name, age, and background
Diego is 22, studies at a public university in Puebla, and earns money through freelance design projects and occasional weekend shifts. His income changes from month to month, so a single average may not reflect what he can spend in a difficult month.

### 2. Monthly financial situation (fictional MXN)
| Item | Amount per month |
| --- | ---: |
| Estimated income in a typical month | $9,000 |
| Essential and other living expenses | $6,500 |
| Existing monthly payment obligations | $500 |
| Monthly savings goal | $500 |
| **Estimated baseline available budget** | **$1,500** |
| Lower-income month (stress-test assumption) | $6,500 |
| **Lower-income baseline, if expenses stay unchanged** | **−$1,000** |

The $9,000 income is a fictional estimate, not guaranteed earnings. The lower-income month illustrates why an average-income comparison can be misleading. The $500 savings goal is already included in both baseline calculations.

### 3. Purchasing behavior and influences
Diego watches creator reviews on YouTube and TikTok, follows student discount promotions, and sometimes considers buying equipment when he sees a short-lived offer. He wants tools that support his studies and freelance work but cannot predict exactly when clients will pay him.

### 4. Specific problem and financial uncertainty
He is considering a tablet for coursework and design sketches. He does not know whether he can reliably afford a fixed monthly installment or how long saving would take when his income varies.

### 5. Current workaround
He mentally estimates how much he expects to earn from upcoming projects and postpones purchases when cash feels tight. He does not have a consistent way to compare a typical month with a lower-income month.

### 6. Goals and motivations
He wants a realistic picture of trade-offs, room for unexpected expenses, and an achievable saving plan that he can adjust without feeling judged.

### 7. Frustrations, fears, and barriers
He worries about missing payments in slow months and dislikes tools that assume a stable salary. He may stop using a service if it demands exact future earnings, creates an account before showing value, or treats uncertain inputs as facts.

### 8. Digital habits and accessibility needs
He uses a budget Android phone, often on mobile data. The tool should load quickly, avoid heavy media, accept estimated amounts, and use simple Spanish with clear explanations of uncertainty. It should not require an account for a no-storage comparison.

### 9. Test purchase scenario — three-scenario comparison
**Fictional purchase:** Tablet priced at **$6,000 MXN**.

- **Buy now:** Typical-month remainder = $1,500 − $6,000 = **−$4,500**. In the assumed lower-income month, remainder = −$1,000 − $6,000 = **−$7,000**.
- **Installments:** Six payments of **$1,000**, assuming a verified total payable of $6,000 with **no added fees or interest** for this fictional test case. Typical-month remainder = $1,500 − $1,000 = **$500**. Lower-income-month remainder = −$1,000 − $1,000 = **−$2,000**. The no-fee assumption must be clearly labeled; the app must not assume all advertised plans are interest-free.
- **Wait and save:** Diego chooses an **additional $750 monthly contribution**, separate from his existing $500 savings goal. With zero initial earmarked savings and a constant contribution, months needed = ceiling($6,000 ÷ $750) = **8 months**; typical-month remainder = $1,500 − $750 = **$750**. In the lower-income month, the same contribution would produce a **−$1,750** remainder, indicating that the constant-contribution assumption may fail.

The Week 12 engine need only calculate each comparison from entered values. Testing a second income input can reveal the risk of irregular income; automatic income prediction, cash-flow forecasting, and variable-month scheduling are outside the current scope.

### 10. Expected successful outcome
Diego recognizes that a payment affordable in the estimated typical month may create a shortfall in a lower-income month. He can explain the assumptions behind the saving timeline and make his own choice, including postponing or changing the amount he plans to save.

### 11. Possible confusion or abandonment
He may mistake estimated income for guaranteed income, assume the eight-month savings estimate is a promise, or not understand why an apparently manageable installment becomes difficult in a lower-income month. He may leave if the product uses judgmental language or requests sensitive account access.

## Shared test assumptions requiring real-user validation

1. **Audience fit:** Whether adults ages 18–29 in Mexico recognize these situations as relevant to their own purchasing decisions.
2. **Input comprehension:** Whether users can distinguish net income, expenses, existing installment obligations, existing savings goals, and an additional purchase-specific saving amount without double-counting.
3. **Irregular income:** Whether a clearly labeled alternative income assumption is understandable and useful without creating false confidence.
4. **Financing details:** Whether users can locate and correctly enter the *total payable*, installment count, fees, and interest information from actual offers; missing costs must remain visibly unverified.
5. **Scenario interpretation:** Whether users understand the different time horizons and can explain at least one trade-off across buying now, installments, and waiting.
6. **Privacy and trust:** Whether the consent explanation is clear and whether people are comfortable entering estimated amounts without account creation or persistent storage.
7. **Accessibility:** Whether Spanish wording, mobile layouts, text readability, and basic keyboard use work for intended users.
8. **Decision autonomy:** Whether the tool avoids steering users toward a supposedly “best” or “safe” option and allows them to disagree with its assumptions.

## Proposed Week 12 usability tasks (not yet conducted)

- Give a participant one fictional profile and ask them to enter the numbers after seeing a clear privacy notice and giving consent.
- Ask them to identify the current-month remainder, monthly installment impact, total financing cost, and estimated saving time.
- Ask them to explain one trade-off and one unverified assumption in their own words, without coaching or a recommended decision.
- Repeat a comparison after changing one input, such as the installment fee or Diego's income estimate, and ask what changed.
- Record errors, confusion, abandoned steps, accessibility issues, and whether the participant understood that the decision remains theirs.

**Connection to the Charter's North Star:** The proposed validation target is that at least 80% of a transparently reported small usability-test sample correctly identifies the budget impact of all three scenarios and explains a trade-off without being told what to choose. This is a **target, not a result**. No tests, interviews, customer approvals, or product improvements are claimed in this document.

## Blueprint and scope guardrails

The personas are fictional demonstrations only. The product must request informed consent before processing financial inputs; validate every input; clearly label assumptions, estimates, and missing information; and preserve the user's authority over every purchase decision. Do not store personal budgets by default. If user data is later stored, implement Google authentication and user-scoped Supabase Row Level Security first. Never request banking passwords, execute purchases, sell financial products, or claim that a purchase is financially safe. Keep the Week 12 build limited to the transparent three-scenario comparison and test it before adding features. **Shadow clause:** Numerical outputs are aids to understanding, never unquestionable decisions that harm, pressure, or exclude people.

# AI Search Optimization — GEO / AEO / LLMO

The co-equal discipline for 2026. 68.01% of US Google searches (Jan–Apr 2026, SparkToro/Similarweb) ended without a click — up from 60.45% in 2024; only 276 of every 1,000 searches now reach the open web. AI engines retrieve **passages, not pages**, via RAG. Programmatic pages built on unique data are uniquely positioned to become AI citation sources — *if* they're rendered, chunked, and sourced correctly.

## How AI engines select and cite sources

All major engines (Google AI Overviews/AI Mode, ChatGPT, Perplexity, Gemini, Copilot) use **Retrieval-Augmented Generation**:

> query → embedding → passage retrieval → re-ranking → citation decision → synthesis

Complex queries trigger **"fan-out"** into 8–16 sub-queries. Crucially, **RAG retrieves passages, not pages.** Selection criteria: semantic relevance, **information gain** (Google's Information Gain patent rewards *complementary*, not duplicative, info), factual density, authority, freshness, structural clarity.

Citations **diverge sharply from organic rank:** studies report **57–68% of AI Overview citations come from outside the organic top 10**; only ~12% of AI citations come from Google's top 10. This is why GEO is a distinct discipline — and why it helps lower-ranked sites most.

## The GEO research paper (primary source — cite this, not the misquotes)

**Aggarwal et al., Princeton/Georgia Tech, KDD 2024, arXiv:2311.09735.**

- Headline (verbatim): *"our proposed Generative Engine Optimization methods can boost visibility by up to **40%** on diverse queries"*; up to **37% on Perplexity.ai.**
- **GEO-bench:** 10,000 queries (8K/1K/1K train/val/test) across 9 datasets, 25+ domains.
- Two impression metrics: **Position-Adjusted Word Count** (word count of citation-related sentences, exponentially decayed by citation position) and **Subjective Impression** (7 sub-aspects scored via G-Eval).
- **Best methods** (Statistics Addition, Quotation Addition, Cite Sources): **+30–40% on Position-Adjusted Word Count**, **+15–30% on Subjective Impression.** Quotation Addition was the single best (~**+41% PAWC**, +28% Subjective). On Perplexity, best methods beat baseline by 22% PAWC / 37% Subjective. Stylistic methods (Fluency, Easy-to-Understand) gave 15–30% boosts.
- **Keyword stuffing HURT** — ~8% worse than baseline on their engine, "10% worse than baseline" on Perplexity.
- **"Authoritative" voice** gave little objective lift (engines are already robust to it) but helped Subjective Impression (~+19%) and specific domains.
- **GEO helps lower-ranked sites most:** Cite Sources gave **+115.1%** visibility for a site ranked 5th, while the top-ranked site's visibility *dropped* 30.3%.
- **Combining strategies** (Fluency + Statistics) beat any single strategy by >5.5%.

⚠️ **Misquote warning:** secondary sources widely cite "+27.8%" and "+25.9%." Those are **absolute sub-metric scores from Table 1, not percentages.** The correct *relative* figures are ~+41% (quotation) and ~+30–33% (statistics).

## AEO content formatting that wins citations

- **Answer-first:** lead each section with a direct answer in the **first 40–60 words** (inverted pyramid; don't bury the lede).
- **Semantic chunking:** self-contained **50–150 word** chunks (some say 200–400), one idea each, that make sense in isolation — **no "as mentioned above" back-references** (a retrieved chunk has no "above").
- **Question-based H2/H3 headings**, Q&A blocks, lists, comparison tables, definitions.
- **Statistics with named sources, expert quotations, inline citations** to credible third parties — these are the proven GEO levers.
- **Remove promotional tone** — Semrush found promotional language reduces citation likelihood ~26%.

Vendor-reported (directional) lifts: well-chunked content ~2.3× more citations; tables ~2.5×; comparison tables +32.5% of citations.

## The schema debate (take the evidence-weighted position)

- Google confirmed (I/O 2026 analysis): *"no special markup is required for AI responses."*
- Ahrefs study (1,885 pages adding JSON-LD Aug 2025–Mar 2026 vs 4,000 controls): **no statistically significant citation uplift on any platform** (AI Overviews showed a small 4.6% *decline*).
- Counter-evidence: Bing's Fabrice Canel said schema helps Copilot's LLMs understand content; some practitioners report 2.5–3.2× citation *correlation* (not causation).

**Defensible position:** implement JSON-LD for its **proven rich-result / entity-resolution value** and clean machine-readability — AI Mode appears to read schema as a trust/entity-verification signal — but **don't expect it to be an AI-citation lever.**

## `llms.txt` — the 2026 reality

- Adoption ~10.13% of domains (SE Ranking, 300K domains).
- Log studies: AI search crawlers **almost never fetch it** (OtterlyAI: 0.1% of 62,100 AI bot visits; Limy: 408 of 500M+ events).
- Google's Gary Illyes confirmed Google doesn't use it; John Mueller compared it to the deprecated keywords meta tag.
- No major LLM provider (OpenAI, Anthropic, Google, Meta, Mistral) has committed to it.

**Verdict:** NOT an SEO/citation play. Its real value is **developer-experience / "Business-to-Agent"** — IDE agents (Cursor, Claude Code, Copilot) fetch it; Stripe/Vercel/Cloudflare/Anthropic ship it. Treat it as low-cost optionality insurance (auto-generated via Yoast/Wix now). **Don't let it distract from rendering or robots.txt.**

## robots.txt for AI bots — the real lever ("block training, allow retrieval")

This is what actually controls AI visibility. See `assets/robots-ai.txt` for a ready template.

- **Allow** retrieval/search bots that drive citations and referral traffic: **OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, ClaudeBot, Claude-SearchBot, Claude-User.**
- **Decide per-policy** on training bots: GPTBot, Google-Extended (Gemini *training* — blocking does **NOT** affect Google Search rank), CCBot, Bytespider, Meta-ExternalAgent.

**Critical gotchas:**
1. Blocking **OAI-SearchBot** removes you from ChatGPT search answers.
2. Deprecated strings (`Claude-Web`, `anthropic-ai`) no longer work.
3. ~27% of B2B/e-comm sites accidentally block AI crawlers at the **CDN/Cloudflare layer** — audit that too.
4. `noindex` blocks AI citation (a page must be indexable to be cited).
5. **Never block your sitemap path.**
6. For non-compliant bots (Bytespider, stealth crawlers), enforce at **WAF/server** level.

**Evidence blocking hurts:** Zhao (Rutgers) & Berman (Wharton), SSRN Dec 31 2025 — top-500 news publishers blocking AI crawlers saw a **23.1% decline in monthly visits** and 13.9% decline in human-only browsing; an April 2026 revision restated it as ~7% of weekly traffic within six weeks under a different window.

## Brand mentions & entity SEO drive AI visibility more than on-site content

- **82–85% of AI citations/mentions come from third-party/earned media**, not owned domains (Muck Rack 1M+ citations; Superlines; Foundation). Claude and ChatGPT pull **93%+** from earned sources.
- **Reddit** is the single most-cited domain across platforms (~20–47% depending on platform).
- Ahrefs' 75,000-brand study: **YouTube mentions** are among the strongest correlates of AI Overview visibility; **branded web mentions (r=0.664)** are the strongest predictor of AI mention rate.

**Implication:** pair every pSEO program with an **off-site entity/PR motion** — Reddit, Wikipedia, G2/Capterra, YouTube, earned media. This builds the corroboration AI engines need to cite you confidently, and compounds the on-site moat. *Off-site is now on-strategy.*

## Measuring AI visibility

Two distinct metrics:
- **Mention rate** — your brand is named.
- **Citation rate** — your URL is referenced/linked.

Reliable measurement needs **100–300 prompts across 4+ models, 5–10 runs each** (manual tracking breaks beyond ~30 queries). Tools (2026): **Profound** (enterprise leader), **Peec AI** (mid-market), **Otterly.AI** (entry, from $29/mo, 6 platforms), plus Ahrefs Brand Radar, Semrush AI Toolkit, AthenaHQ, Scrunch, Visiblie, ZipTie.dev. Pick **one action-oriented tool + one budget tracker.**

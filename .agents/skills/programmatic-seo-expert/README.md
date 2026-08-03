# The Programmatic SEO Expert — a Claude Skill

[![Add to Claude](https://img.shields.io/badge/Add%20to%20Claude-skills.sh-7c3aed)](https://skills.sh/thevrus/Programmatic-SEO-Expert)

A [Claude Agent Skill](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) for building **programmatic SEO (pSEO) page systems that survive Google's 2026 quality bar AND get cited by AI search engines** (ChatGPT, Perplexity, Gemini, AI Overviews, Claude).

The 2026 reality in one line: **the bar moved from "pages at scale" to "useful products at scale."** AI, templates, and automation are method-neutral — Google and LLMs both enforce and reward the same thing: *unique value per page backed by a data moat.* A page built right for ranking is simultaneously built right for RAG retrieval. This skill encodes that playbook.

## What it covers

- **The 5 pillars** — data moat · server-rendered HTML · answer-first semantic chunking · disciplined index management · dual (organic + AI) measurement.
- **Is pSEO even a fit?** — good/bad-fit gating, the destination & bookmark tests.
- **A staged, stack-agnostic pipeline** — qualify → data layer → templates → generate+QA → technical → AI-search → index management → measure, with a 4-stage rollout (don't launch 50,000 pages on day one).
- **GEO/AEO/LLMO** — how RAG engines retrieve passages, the peer-reviewed KDD 2024 GEO levers (with misquote warnings), AEO formatting, the schema debate, the `llms.txt` reality, robots.txt for AI bots, and AI-visibility measurement.
- **Real case studies** — Zapier, Zillow, NerdWallet, Tripadvisor, G2, Canva, and the failure patterns.

## Install

Via the [skills.sh](https://skills.sh) CLI:

```bash
npx skills add thevrus/Programmatic-SEO-Expert
```

Or manually — clone into your agent's skills directory:

```bash
git clone https://github.com/thevrus/Programmatic-SEO-Expert.git \
  ~/.claude/skills/programmatic-seo-expert
```

Then invoke it by asking Claude anything about programmatic SEO, pSEO, pages at scale, GEO/AEO/LLMO, or getting cited by AI search engines.

## Structure

```
.
├── SKILL.md                       # Orchestrator: pillars, fit test, pipeline, rollout, hard rules
├── references/                    # Progressive-disclosure detail (loaded on demand)
│   ├── algorithm-and-quality.md   # Google HCU→core, scaled-content-abuse, 2024–26 updates, thresholds, risk
│   ├── keyword-data-templates.md  # head-term+modifier patterns, SERP-overlap clustering, the data moat, E-E-A-T
│   ├── technical-seo.md           # rendering/SSR (#1 AI move), crawl budget, index bloat, sitemaps, linking
│   ├── ai-search-optimization.md  # GEO/AEO/LLMO, the GEO paper, schema debate, llms.txt, robots.txt, measurement
│   ├── measurement-and-iteration.md # monitoring, GSC at scale, log analysis, pruning, attribution, KPIs
│   └── case-studies.md            # wins and failures
├── scripts/
│   └── check-ai-rendering.sh      # fetch a URL as Googlebot/GPTBot/ClaudeBot; flag client-side rendering
└── assets/
    └── robots-ai.txt              # ready-to-customize 2026 "block training, allow retrieval" robots.txt
```

## Quick taste of the tooling

```bash
# The single highest-leverage AI check: is your content in the raw HTML
# that JS-blind AI crawlers actually see?
bash scripts/check-ai-rendering.sh https://yoursite.com/some/programmatic/page
```

## A note on sources

The rigorous anchors are the GEO paper (Aggarwal et al., KDD 2024, arXiv:2311.09735), SparkToro/Similarweb zero-click data, the Zhao/Berman SSRN paper, Pew, Gartner, and Google's own documentation. Many headline figures come from vendor/agency studies and are flagged in-skill as **directional**. AI search changes monthly — re-verify crawler names, schema's role, and `llms.txt` adoption before acting.

## License

MIT — see [LICENSE](LICENSE).

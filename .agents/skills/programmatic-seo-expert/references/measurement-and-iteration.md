# Measurement, Monitoring & Iteration

How to know whether a pSEO program is working, catch suppression early, prune dead weight, and re-instrument attribution for the AI era.

## Monitor at three levels

- **Site-wide** — overall indexation, traffic, sitewide HCU risk.
- **Per-template/category** — indexation rate and traffic by page type (this is where problems localize).
- **Per-page** — outliers, cannibalization, conversion.

**Core KPIs:** indexation rate (% of published pages indexed), crawl stats/frequency, traffic distribution by variation, conversion patterns by page type, cannibalization.

## GSC at scale

- Use the **Index Coverage report/API** (export up to 50K rows).
- Bucket by URL pattern; compute valid/total ratios — **<0.2 signals bloat.**
- Segment sitemaps so you get **per-type indexation diagnostics** for free.

## Log file analysis

- Segment Googlebot and AI-bot hits by URL pattern and template.
- Flag clusters that are **crawled but not driving organic entrances** — wasted crawl budget on thin pages.
- Tools: Screaming Frog Log Analyzer, Botify, OnCrawl, BigQuery.

## Content pruning (quarterly)

- Pull GA + GSC data; identify pages with **zero sessions / conversions / rankings.**
- Improve, consolidate (301), or `noindex`/`410`.
- Practitioner estimate: removing **30–50% of low-value pages** can lift crawl hits to money pages **10–15% within 4 weeks.**

## Detecting algorithmic suppression

Watch for:
- **Cliff-edge traffic drops** aligned to update dates.
- Mass *"currently not indexed."*
- Refusal to index new pages.

Recovery from algorithmic penalties typically takes **3–12 months** and often requires the next update cycle. Deindexation cleanup (410) can take Google up to a year to fully process at scale.

## A/B testing templates

Iterate template structure on **page-type cohorts**; use **control groups of untouched URL clusters** to isolate impact. Don't change everything at once — you won't know what moved the needle.

## 2026 KPIs — track both columns

| Traditional | AI-specific |
|-------------|-------------|
| Indexation rate | Citation rate (your URL referenced) |
| Organic traffic per page/template | Mention rate (brand named) |
| Average position by category | Share of voice vs competitors |
| Conversions | Sentiment |
| Engagement (dwell time, pages/session) | Selection rate (frequency cited from retrieved candidates) |

## The attribution crisis (and the upside)

- **68.01%** of US searches were zero-click in Jan–Apr 2026 (SparkToro/Similarweb).
- **93%** of AI Mode sessions produce zero outbound clicks.
- AI Overviews carry the **google.com referrer** — indistinguishable from organic.
- Copy-paste citations land as **"direct" traffic.**
- Only **~14% of marketers** track AI citation visibility, while **~89% of brands** already appear in AI answers.

**Offsetting upside:** AI-referred visitors convert far better — Semrush reports **4.4×**; others report 1.2–5×+ — because they arrive pre-qualified.

**The shift:** move KPIs from **click volume → citation presence + revenue-per-visitor + assisted/branded-search lift.**

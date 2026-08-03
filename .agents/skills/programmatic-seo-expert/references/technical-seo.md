# Technical SEO for Large Page Sets (stack-agnostic)

The infrastructure that lets thousands of pages get crawled, rendered, indexed, and linked — and that makes them visible to AI engines.

## Rendering — the single highest-leverage AI move

**No major AI crawler executes JavaScript.** Vercel's large-scale analysis (500M+ GPTBot fetches and follow-ups) found GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Meta-ExternalAgent, and Bytespider all fetch **raw HTML and move on.** The one exception is Google's **Gemini**, which uses Googlebot's Web Rendering Service.

Therefore: **a client-side-rendered SPA is invisible to AI engines.** Fix it with SSR, SSG, or ISR (Next.js, Nuxt, Astro, etc.) so critical content, links, and schema are in the **initial HTML**.

Double exposure to the rendering gap: ~92% of ChatGPT web responses draw on **Bing's index**, and Bingbot has only limited JS rendering.

**Verify it:** `curl -A GPTBot <url>` (or run `scripts/check-ai-rendering.sh`) and confirm the main content, internal links, and JSON-LD are present in the response. If they're missing, prioritize an SSR/SSG migration **above almost everything else.** AI crawlers favor fast static-first pages — they can crawl ~50 SSR pages for the energy of one heavy CSR page.

## Crawl budget

Matters at **~10,000+ unique pages**, or **1M+ pages changing weekly** (Google's own stated threshold). Levers:

- Keep server response **<200ms.**
- Block internal search and faceted/parameter URLs in robots.txt.
- Fix soft 404s and redirect chains.
- Eliminate orphan pages.

## Index bloat & indexing strategy

Large programs often see only **10–30% of inventory indexed.** Watch "Discovered/Crawled — currently not indexed" in GSC. Tools to control removal:

| Action | Use for | Speed |
|--------|---------|-------|
| `noindex` | Data-sparse/thin pages (e.g. cities with <10 listings); removal *with* equity retained | ~10 days |
| `410 Gone` | Permanent removal | drops in 48–72h |
| `canonical` | Consolidating duplicate variations | gradual |

**Build these rules into the CMS/template**, not by hand: auto-`noindex` parameter URLs, programmatic canonicals, and exclude non-canonical URLs from sitemaps.

## Sitemap segmentation

- Split by **template/section** (respect the 50,000-URL / 50MB limits).
- Include **only canonical, 200-status, indexable** URLs.
- Accurate `lastmod` tied to real content changes; auto-expire stale URLs.
- Segmentation lets you **diagnose indexation rate per page type** — the single most useful diagnostic at scale.
- **Never block your sitemap path** in robots.txt.

## Internal linking — hub-and-spoke

Category hubs → spoke pages → back to hub + related spokes. Generate links **dynamically at scale**:

- ~10–20 links per page.
- Each programmatic page should **link to ~8–15 relevant pages** and **be linked from 5–10.**
- Zapier's authority flow (app directory → integration pages) is the canonical example.

This is also the fix for orphan pages — every page must be reachable from the main site, in the XML sitemap, and carry breadcrumbs with structured data.

## URL structure & canonicalization

- Consistent, logical, human-readable patterns: `zapier.com/apps/[app]/integrations/[app2]`.
- **Use subfolders, not subdomains** — subfolders consolidate domain authority; subdomains split it. Good: `site.com/templates/resume/`. Bad: `templates.site.com/resume/`.
- Programmatic canonical tags to prevent duplicate-variation issues.

## Core Web Vitals at scale

Template-level performance **compounds across every page** — a slow template is a slow site. Static-first delivery wins for both users and AI crawlers (energy/efficiency favors fast SSR pages, as above).

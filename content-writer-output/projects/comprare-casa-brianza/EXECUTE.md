# Execute + Verify — comprare-casa-brianza

**Date:** 2026-08-03  
**Phase:** execute → verify (light)

## Shipped
- Rewrote `/comprare-casa-brianza` in `web/src/lib/guides.ts` (8 sections, PAS + pillar links)
- Extended `GuideSection` + `GuideSections` with `internalLinks` / `internalLinksLead`
- Meta title/description/H1/intro updated per plan
- Related links refreshed (hub Monza, ville, spese, offerta, annunci, brianza)
- CTA purchase already on `[slug]` route — unchanged
- `tsc --noEmit` clean

## Humanizer / anti-AI notes
- Fixed typo “stai esitazione” → “esiti”
- No filler openers; no invented prices or fake case studies
- Em dashes used sparingly in Italian copy (normal for IT)
- Voice: tu/noi, concrete process, local comuni detail from localities (buyer angle)

## SEO self-check
- Primary intent in H1/intro/meta: comprare casa in Brianza
- Internal links to cluster guides + `/valutazione/{comune}` + `/brianza`
- External portals only via existing EXTERNAL constants
- No new URLs this ship

## Next
- Browser check http://localhost:3000/comprare-casa-brianza
- Optional: batch rewrite other thin guides
- `/writer:ship` when ready to commit/deploy

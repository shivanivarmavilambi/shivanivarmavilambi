# Zoom the hero photo slightly

## What you'll see

The portrait in the hero will sit a little closer — roughly a 12% zoom — so you fill more of the rounded frame. The frame shape, the "Building across the stack" card and the "8+ years" badge all stay exactly where they are, and the crop stays centered on you so your face doesn't drift.

## Technical details

- File: `src/components/PortfolioPage.tsx` — the hero portrait `<img>` (around line 99).
- Add a scale transform to the photo: `scale-[1.12]` next to the existing `object-cover object-[82%_50%]` classes. The surrounding frame already has `overflow-hidden`, so the extra zoom stays clipped inside the rounded border instead of spilling over.
- If the zoom pushes you off-centre, nudge the focal point with it (for example `object-[80%_50%]`) to keep you centred.
- Verify with screenshots of the hero at desktop (1280px) and phone (390px) widths, and confirm the site still builds with no errors.

# Shivani Varma Vilambi Portfolio

## Goal
Build a polished, single-page portfolio for Shivani Varma Vilambi that presents her eight years of enterprise full-stack experience clearly to recruiters and hiring teams.

## Visual direction
- Follow the reference screenshots’ editorial composition: compact floating navigation, oversized name-led hero, generous whitespace, strong typographic hierarchy, and an organic portrait frame.
- Use the brief’s calm pastel section system: lavender, blush, mint, peach, sky, butter, deep plum text, and violet accents.
- Pair Fraunces for display typography with DM Sans for body and interface text.
- Keep the experience professional rather than playful, with restrained shadows, thin borders, rounded cards, and subtle motion that respects reduced-motion settings.
- Treat both screenshots as visual references only; they will not appear as content on the site.

## Page structure
1. **Sticky navigation** — SV monogram, smooth-scroll section links, active-section indicator, mobile menu, and résumé download.
2. **Hero** — role, name-led introduction, résumé-based summary, project/contact actions, social links, an editorial profile placeholder, and only supportable experience facts.
3. **About** — concise professional narrative plus quick facts drawn from the résumé.
4. **Skills** — grouped technical skills with working category filters.
5. **Experience** — newest-first timeline for Western Union, Legacy Health, Adidas, and Citrix Systems, with expandable details and technology tags.
6. **Selected work** — four confidential enterprise case studies with Problem, Solution, Technology, and Outcome details in accessible dialogs; no invented metrics or public links.
7. **Education** — Florida Atlantic University and Vignana Bharathi Institute of Technology.
8. **Writing** — Medium profile link and a restrained “articles coming soon” treatment instead of invented posts.
9. **Contact** — validated name, email, and message fields, clear success feedback, and a mail-app fallback; LinkedIn, Medium, and email links.
10. **Footer** — 2026 credit, social links, and back-to-top action.

## Content and assets
- Centralize all portfolio copy, skill groups, roles, projects, education, and links in one typed data module.
- Convert the supplied résumé into a downloadable PDF for the résumé button.
- Use a designed initials-based profile treatment because no personal headshot was supplied; it can be replaced later without changing the layout.
- Use the brief’s exact contact links and omit the phone number.
- Replace the brief’s unsupported “5 companies” stat with résumé-verifiable wording.

## Interaction and quality
- Build responsive desktop and mobile layouts with no horizontal overflow.
- Add smooth anchor scrolling, keyboard-friendly navigation, visible focus states, semantic landmarks, accessible labels, and WCAG-conscious contrast.
- Use lightweight reveal and hover motion only where it supports hierarchy.
- Add a functional mobile menu, skill filters, expandable experience entries, case-study dialogs, contact validation, and feedback toast.
- Add route-specific title, description, Open Graph metadata, social-card settings, and app-specific favicon treatment.
- Verify the final page at desktop and mobile widths, test core interactions, and resolve build or runtime errors.

## Technical approach
- Keep the existing TanStack Start routing and Tailwind v4 setup.
- Add focused React components and shadcn/Radix primitives for buttons, dialogs, collapsibles, and feedback where appropriate.
- Use semantic color and typography tokens in the global design system rather than hardcoded component colors.
- Keep the contact flow client-side with a `mailto:` handoff; no database, account system, or email service is needed.

## Assumptions
- The uploaded résumé is the source of truth for career history and education; the portfolio brief supplies approved presentation copy and links.
- The uploaded screenshots are inspiration from another portfolio and must not be embedded.
- No real headshot, GitHub URL, public project URLs, or article details are available, so none will be invented.

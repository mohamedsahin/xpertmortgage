# Xperts Mortgage — Next.js + TypeScript

A premium, heavily-animated marketing site for **Xperts Mortgage** (Dubai), built with
**Next.js 14 (App Router)** and **TypeScript**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

Build for production:

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx            # Root layout: fonts, <Header/>, <Footer/>, metadata
    globals.css           # Full design system (brand tokens, components, responsive)
    page.tsx              # Home
    services/page.tsx     # All 12 mortgage solutions + client types
    invest/page.tsx       # Why invest in Dubai
    calculator/page.tsx   # Interactive EMI calculator
    process/page.tsx      # How it works (6-step timeline)
    difficult-cases/page.tsx
    about/page.tsx
    learn/page.tsx        # Understanding mortgages + tips
    contact/page.tsx      # Lead form
  components/
    Header.tsx            # Top bar + sticky nav + mobile menu (overlay, scroll-lock) (client)
    MobileBar.tsx         # Sticky bottom Call / WhatsApp / Get Quote bar (mobile ≤768px)
    Footer.tsx
    PageHead.tsx          # Inner-page hero band
    Hero.tsx              # Home hero (client — entrance animation)
    Reveal.tsx            # Scroll-reveal wrapper (client)
    Counter.tsx           # Count-up number (client)
    Icon.tsx              # lucide-react name → component map
    Skyline.tsx           # Decorative SVG skylines
    Sections.tsx          # TrustStrip, ServicesGrid, FeatureRow, DifficultGrid,
                          # Tips, EndCta, Placeholder, Timeline
    ClientTabs.tsx        # (client)
    Accordion.tsx         # (client)
    Calculator.tsx        # Mortgage calculator (client)
    LeadForm.tsx          # Contact form (client)
  lib/
    data.ts               # All site content (services, steps, FAQs, nav, ...)
public/
  logo.png                # Brand logo
```

## Content

All copy lives in `src/lib/data.ts` — edit there to update services, process steps,
FAQs, tips, the nav, etc. across every page at once.

## Images

Photo areas (hero, Dubai band, client tabs) render a `<Placeholder>` with a striped
background and caption. Replace each with your own imagery using
[`next/image`](https://nextjs.org/docs/app/api-reference/components/image), e.g.

```tsx
import Image from "next/image";
<Image src="/dubai-skyline.jpg" alt="Dubai skyline" fill style={{ objectFit: "cover" }} />
```

## Notes

- Icons use [`lucide-react`](https://lucide.dev). Brand/social icons in the footer are inline SVGs.
- Fonts (Archivo, Plus Jakarta Sans, Playfair Display) load via `next/font/google`.
- The contact form is front-end only — wire `LeadForm.tsx` `onSubmit` to your API/CRM.

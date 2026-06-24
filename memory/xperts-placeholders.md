---
name: xperts-placeholders
description: Outstanding assets/info the client still needs to supply for the Xperts Mortgage site
metadata:
  type: project
---

Client-side items still pending for the Xperts Home Mortgage site (as of 2026-06-24, after implementing the website-fixes batch):

- **Team profiles** — photos for Avinash and Sunil are NOT yet in `public/images/team/` (only hashim + prakash exist). Need: Avinash photo+title+bio, Sunil bio (title is set), confirmation to swap Hashim's photo, and a keep/remove decision on Prakash. Also decide grid vs. individual team profile pages.
- **Logo** — currently `/logo.jpeg` (no transparency). Request a PNG/SVG with transparent background.
- **CRM** — lead form currently emails only (SMTP). No CRM integration yet; client to decide which (or email-only).
- **Landline** — using `04 335 789` per client; originally looked short (Dubai landlines are 04 + 7 digits) but client said keep it.

Already resolved in code: office address + Google Map embed (Tejasvi Business Center, Office 104, Umm Hurair Rd, Oud Metha, Bur Dubai), social links (IG/FB/LinkedIn), service detail pages with lead-source capture via `?interest=`, insight article pages, careers single CV CTA, slogan "One Company, All Mortgage Solutions".

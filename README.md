# KDH Biomedicals — website

A modern, responsive, static marketing site for **KDH Biomedicals Pvt. Ltd.**,
a Mumbai-based distributor of advanced laboratory diagnostics.

This is a from-scratch redesign of the company's web presence. It is plain
HTML, CSS and a little vanilla JavaScript — **no build step, no dependencies** —
so it can be hosted anywhere that serves static files (GitHub Pages, Netlify,
Cloudflare Pages, Apache/Nginx, S3, etc.).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, what we do, product categories, mission, partners, CTA |
| `about.html` | About the company, mission & vision, values, approach |
| `products.html` | Product portfolio by category, with anchor links |
| `partners.html` | Principals / manufacturers and a "partner with us" pitch |
| `contact.html` | Contact details, enquiry form, map and FAQ |
| `404.html` | Friendly not-found page |

Shared assets live in `css/styles.css`, `js/main.js` and `assets/`.

## Local preview

It's just static files, so any static server works:

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

1. Push this branch and merge to your default branch.
2. In the repository, go to **Settings → Pages** and set the source to the
   default branch, root (`/`).
3. To serve it at `www.kdhbiomed.com`, keep the `CNAME` file and point your
   domain's DNS at GitHub Pages. If you deploy elsewhere, delete `CNAME`.

`.nojekyll` is included so GitHub Pages serves the files as-is.

## Content notes — please review before going live

The copy was reconstructed from the company's public information. A few items
are sensible placeholders that the owner should confirm or replace:

- **Phone number** — not published, so the contact page invites email instead.
  Add a real number in `contact.html` and the footers if you have one.
- **Business hours** — "Mon–Sat, 10:00–18:00 IST" is an assumption.
- **Email** — uses the published `kdhbiomed@hotmail.com`. Consider a
  domain address (e.g. `info@kdhbiomed.com`) for a more professional look.
- **Enquiry form** — with no backend, it composes a `mailto:` message. For
  real submissions, wire it to a form service (Formspree, Netlify Forms,
  Google Forms) or a small backend; see `js/main.js`.
- **Product / brand names** (Phadia/ImmunoDiagnostics, AtheNA Multi-Lyte®,
  Molzym MolYsis™, MTB-DNA Blood, UMD-SelectNA™) belong to their respective
  manufacturers. Confirm current distribution arrangements and intended-use /
  regulatory status before publishing.
- **Address** uses the Powai, Mumbai – 400076 location. Update if needed.

## Tech & quality

- Responsive layout with a mobile nav (CSS Grid/Flexbox).
- Accessible: skip link, semantic landmarks, ARIA on the nav toggle,
  visible focus styles, `prefers-reduced-motion` support, alt text.
- SEO: per-page `<title>`/description, canonical URLs, Open Graph tags,
  JSON-LD organisation data, `sitemap.xml` and `robots.txt`.
- Fast: system/Google fonts with fallback, inline SVG icons, no frameworks.

<p align="center">
  <img src="./public/Sterling%20Experiences%20Logo%20purple.png" alt="Sterling Experiences" width="400" />
</p>

<h1 align="center">Sterling Experiences</h1>

<p align="center">
  <strong>An Experience &amp; Event Operations Firm.</strong>
  <br />
  Precision-built event experiences for brands, institutions, startups, and individuals.
</p>

<p align="center">
  <a href="https://www.sterlingxperiences.com">www.sterlingxperiences.com</a>
</p>

---

## About

Sterling Experiences is a premium event operations firm based in Nigeria. We deliver event production, operations, staffing, logistics, and decor under one operational standard.

This repository contains the company website, built as a digital experience that communicates operational excellence, editorial quality, and premium brand positioning.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Library:** Radix UI primitives (Dialog, etc.)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Notifications:** React Toastify

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

The development server runs on `http://localhost:3000`.

## Project Structure

```
src/
├── app/               # Next.js App Router pages
│   ├── about/         # About page
│   ├── contact/       # Contact page
│   ├── early-access/  # Early access waitlist
│   ├── insight/       # Portfolio / insights page
│   ├── portfolio/     # Portfolio detail pages [slug]
│   ├── services/      # Services page
│   └── work/          # Work / portfolio page
├── components/        # React components
│   ├── home/          # Homepage sections
│   ├── layout/        # Navigation, footer, page layout
│   ├── portfolio/     # Portfolio gallery, lightbox, detail view
│   ├── services/      # Service sections
│   ├── ui/            # Primitive UI components (button, input, etc.)
│   └── work/          # Work page sections
├── data/              # Data files (portfolio, services)
└── lib/               # Utilities
```

## Portfolio

The site features a full portfolio of past events with:

- Detailed case studies (overview, challenge, outcome, client feedback)
- Image galleries with lightbox viewer
- Service tags per project
- Grouped and individual edition views

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/work` | Portfolio with case studies |
| `/services` | Services overview |
| `/about` | About Sterling Experiences |
| `/insight` | Portfolio listing |
| `/portfolio/[slug]` | Individual event detail |
| `/contact` | Contact form |
| `/early-access` | EventOps early access waitlist |

## Environment Variables

See `.env` for configuration. Key variables:

- `SITE_URL` - Production site URL
- `NEXT_PUBLIC_SITE_URL` - Public-facing site URL
- `NEXT_PUBLIC_WHATSAPP` - WhatsApp business link
- Social media URLs (Facebook, Instagram, LinkedIn)

## Contact

- **Email:** admin@sterlingxperiences.com
- **Website:** [www.sterlingxperiences.com](https://www.sterlingxperiences.com)
- **Instagram:** [@sterling_experiences](https://www.instagram.com/sterling_experiences/)
- **Facebook:** [Sterling Experiences](https://web.facebook.com/sterlingxperiences)
- **LinkedIn:** [Sterling Xperiences](https://www.linkedin.com/company/sterling-xperiences/)

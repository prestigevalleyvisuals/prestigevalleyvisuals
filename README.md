# Prestige Valley Visuals — New Build

This is a Next.js (App Router) website build for Prestige Valley Visuals with **two service lanes**:
- **Real Estate** (listing photos, video, drone, reels, subscriptions)
- **Business** (brand makeovers, logos, websites, monthly content subscriptions)

## Quick Start

1. Install dependencies

```bash
npm install
```

2. Run locally

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm run start
```

## Update Pricing / Packages

All package text and pricing lives here:

`src/lib/site.ts`

Edit the arrays:
- `REAL_ESTATE_ONE_TIME`
- `REAL_ESTATE_SUBSCRIPTIONS`
- `REAL_ESTATE_ADD_ONS`
- `BUSINESS_ONE_TIME`
- `BUSINESS_MONTHLY`
- `BUSINESS_A_LA_CARTE`

## Media Files

- Hero videos:
  - `public/media/hero-realestate.mp4`
  - `public/media/hero-business.mp4`

- Portfolio:
  - `public/portfolio/realestate/*`
  - `public/portfolio/business/*`

## Deploy (Vercel)

- Push this repo to GitHub
- Import into Vercel
- Framework preset: **Next.js**


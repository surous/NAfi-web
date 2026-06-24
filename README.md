# NAFI Solutions — Official Website

> Smart Digital Solutions for Modern Businesses in Ethiopia

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-Private-red)](#)

---

## Overview

This is the official production website for **NAFI Solutions** — a software company based in Adama, Ethiopia, building custom websites, mobile apps, and enterprise software for organizations across the country.

The site is built with a modern, performance-first stack and is fully ready for deployment on **Vercel**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 + CSS Custom Properties |
| Animations | Framer Motion v11 |
| Smooth Scroll | Lenis |
| Email | Resend |
| CMS (optional) | Sanity v3 |
| Package Manager | pnpm |

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — Hero, Stats, Services, Why NAFI, Testimonials |
| `/about` | About — Story, Mission/Vision, Values, Team |
| `/services` | Full Services listing |
| `/testimonials` | Client testimonials |
| `/contact` | Contact form with email delivery |

---

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/nafi-web.git
cd nafi-web

# Install dependencies
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root of the project:

```env
# Required for contact form email delivery
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx

# Optional — only needed if connecting to Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

> The site works fully without Sanity configured. It falls back to static data for services, testimonials, and team members.

### Running Locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the project on [vercel.com](https://vercel.com).
3. Add the environment variables in the Vercel dashboard under **Settings → Environment Variables**.
4. Deploy — Vercel handles everything automatically.

> **Important:** Do not commit `.env.local` to Git. It is already listed in `.gitignore`.

---

## Project Structure

```
nafi-web/
├── app/                    # Next.js App Router pages & API routes
│   ├── api/contact/        # Contact form API route (with rate limiting)
│   ├── about/
│   ├── services/
│   ├── testimonials/
│   ├── contact/
│   ├── globals.css         # Design tokens & global styles
│   ├── icon.png            # Browser tab favicon
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/
│   ├── layout/             # Navbar, Footer, PageHero, CTABanner
│   ├── motion/             # Framer Motion wrappers (FadeInView, Stagger)
│   ├── sections/           # Page sections (Hero, Services, Team, etc.)
│   └── ui/                 # Reusable UI primitives (Button, Input, Card, etc.)
├── lib/
│   ├── resend.ts           # Resend email client
│   ├── sanity.ts           # Sanity client + fallback data
│   └── utils.ts            # Utility helpers
├── public/
│   └── logo.png            # NAFI white logo
├── types/
│   └── index.ts            # Shared TypeScript interfaces
├── next.config.ts          # Next.js config (security headers, image domains)
└── .env.local.example      # Example environment variables
```

---

## Security Features

- ✅ Rate limiting on contact form API (3 requests/min per IP)
- ✅ Zod server-side validation on all form inputs
- ✅ HTTP Security Headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`
- ✅ No secrets exposed to client — `RESEND_API_KEY` is server-only
- ✅ `.env.local` excluded from Git via `.gitignore`
- ✅ All external links use `rel="noopener noreferrer"`

---

## Contact

**NAFI Solutions**
📧 nafisolutions1@gmail.com
📞 +251 983 477 881
📍 Adama, Ethiopia

[![LinkedIn](https://img.shields.io/badge/LinkedIn-NAFI_Solutions-0077b5?logo=linkedin)](https://linkedin.com/company/nafi-solutions)
[![Instagram](https://img.shields.io/badge/Instagram-@nafisolutions-E1306C?logo=instagram)](https://instagram.com/nafisolutions)
[![Telegram](https://img.shields.io/badge/Telegram-nafisolutions-2CA5E0?logo=telegram)](https://t.me/nafisolutions)

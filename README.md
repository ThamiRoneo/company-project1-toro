# Toro Coffee — Website Redesign

A UX-driven redesign of [torocoffee.co.za](https://torocoffee.co.za), built as Company Project 1 for Melsoft Academy's AI Software Engineering programme.

**🔗 Live site:** [torocoffee-app.netlify.app](https://torocoffee-app.netlify.app)

This project takes a real, existing business — Toro Coffee, a specialty coffee roaster in Potchefstroom, South Africa — and rebuilds their website using React and Tailwind CSS, based on a full UX/UI audit against Nielsen Norman Group's usability heuristics and WCAG 2.2 accessibility standards.

---

## Table of Contents

- [Toro Coffee — Website Redesign](#toro-coffee--website-redesign)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [Why Toro Coffee](#why-toro-coffee)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Available Scripts](#available-scripts)
  - [Screenshots](#screenshots)
  - [Design Decisions](#design-decisions)
  - [Outreach](#outreach)
  - [Deliverables Checklist](#deliverables-checklist)

---

## About the Project

Toro Coffee's current website has a strong brand story and genuinely good product data, but suffers from real usability issues — broken "Add to Cart" states on out-of-stock products, inconsistent branding across pages, no visible accessibility controls on the autoplaying hero video, and missing trust signals like tasting notes and social proof.

This redesign addresses those issues directly, rebuilding the experience with a mobile-first, accessible, and conversion-focused approach while staying true to Toro's actual identity, culture, and offering.

Full research and justification for this redesign is documented in [`BRIEF.md`](./BRIEF.md).

## Why Toro Coffee

I chose Toro Coffee because I have a genuine connection to the brand from my time as a student in Potchefstroom, where I became a regular customer. I've watched the business grow from one store into multiple locations, and I've always been given a warm welcome there. That warmth is central to who Toro is — and it's something their current website doesn't yet communicate. Full details are in [`BRIEF.md`](./BRIEF.md).

## Tech Stack

- **Framework:** React (functional components + hooks)
- **Styling:** Tailwind CSS
- **Build tool:** Vite
- **Deployment:** Vercel / Netlify

## Project Structure

```
company-project-1/
├── BRIEF.md                 # Company research & redesign justification
├── README.md                # This file
├── src/
│   ├── components/          # Header, Hero, ProductCard, Footer, etc.
│   ├── App.jsx
│   └── ...
├── public/
└── outreach-proof/          # Evidence of outreach to Toro Coffee
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/company-project-1.git
cd company-project-1

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173` (or the port shown in your terminal).

## Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Runs the app in development mode      |
| `npm run build`   | Builds the app for production         |
| `npm run preview` | Previews the production build locally |
| `npm run lint`    | Runs ESLint checks                    |

## Screenshots

**Homepage**
![Homepage](./src/assets/old-home-design.png)

**Home Redesign**
![Home Redesign](./src/assets/home-redesign.png)

**Shop page**
![Shop page](./src/assets/old-shop-design.png)

**Shop page redesign**
Added modern filtering and sorting features. Can sort by "Newest Roast", Price: High-Low (& vice versa), Popularity. Again, one can filter products by clicking the tasting notes: Chocolate, Floral, Citrus, Earthy, Nutty, Fruity, and Spice.

![Shop page redesign](./src/assets/shop-redesign.png)

When pressing the "Add to Cart" button, this is the new cart preview, which offers much more information to the customer about the product they are about to buy.

![Add to cart redesign](./src/assets/add-cart-redesign.png)

**About page**
![About page](./src/assets/old-about-design.png)

**About Redesign**
![About Redesign](./src/assets/about-redesign.png)

**Contact page**
![Contact page](./src/assets/old-contact-design.png)

**Contact Redesign**
![Contact Redesign](./src/assets/contact-redesign.png)

**Franchise page**
![Franchise page](./src/assets/old-franchise-design.png)

**Franchise Redesign**
![Franchise Redesign](./src/assets/franchise-redesign.png)

**Cart page**
![Cart page](./src/assets/old-cart-design.png)

**Cart Redesign**
![Cart Redesign](./src/assets/cart-redesign.png)

**Login page**
![Login page](./src/assets/old-login-design.png)

**Login Redesign**
![Login Redesign](./src/assets/login-redesign.png)

**Sign-up page**
![Sign-up page](./src/assets/old-signup-design.png)

**Sign-up Redesign**
![Sign-up Redesign](./src/assets/signup-redesign.png)

## Design Decisions

Key fixes and improvements made in this redesign, based on the audit in `BRIEF.md`:

- **Fixed false-affordance CTAs** — out-of-stock products now show a disabled "Sold Out" or "Notify Me" state instead of an active "Add to Cart" button
- **Unified brand voice** — one consistent footer tagline and value proposition across every page
- **Segmented navigation** — separated the consumer shopping journey (Shop) from the business/franchise journey
- **Accessible hero media** — added visible slideshow hero pictures content, or replaced autoplay with a static image on mobile.
- **Added sensory product content** — tasting notes and grind-size options on product pages
- **Added trust signals** — social proof section, social media links, and policy links in the footer
- **Mobile-first, touch-friendly components** — rebuilt size/quantity selectors and nav for reliable touch interaction

## Outreach

As required by the project brief, Toro Coffee was contacted directly to share this redesign as a student learning project. Evidence of this outreach is included in [`outreach-proof/email-proof.png`](./outreach-proof/email-proof.png).

## Deliverables Checklist

- [x] `BRIEF.md` — company research & justification
- [x] Redesigned website (React + Tailwind CSS)
- [x] Proof of outreach to Toro Coffee
- [x] Live deployed link — [torocoffee.vercel.app](https://torocoffee.vercel.app)

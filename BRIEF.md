# Company Research & Justification Brief

## 1. Which company did you choose?

**Company:** Toro Coffee
**Industry:** Coffee Shop / Specialty Coffee Roaster (retail + e-commerce)
**Current website:** [https://torocoffee.co.za](https://torocoffee.co.za)

Toro Coffee is a South African specialty coffee brand based in Potchefstroom, with multiple physical store locations and an online shop selling freshly roasted coffee beans.

---

## 2. How did you find them?

I know Toro Coffee personally from my time as a student in Potchefstroom, where I was a regular customer at one of their stores. Beyond that first-hand experience, I found their online presence through Google Maps and Instagram, which is how I confirmed they had an active website and e-commerce shop worth evaluating.

---

## 3. Why did you choose this company specifically?

I chose Toro because I have a genuine connection to the brand, not just a passing interest. Back when I was a student in Potchefstroom, I fell in love with the brand, its culture, and the quality of its coffee. I've personally watched the business grow from a single store into multiple franchise locations. Every time I've visited, I've been given a warm welcome and made to feel at home — that experience is a big part of what makes Toro special, and it's something I don't think their current website communicates at all.

Choosing a company I already care about also means I have a real stake in the outcome: this isn't a random pick for a grade, it's a redesign I'd genuinely like to see Toro use.

---

## 4. Why does their website need a redesign?

I ran a full UX audit of torocoffee.co.za against established usability heuristics (Nielsen Norman Group's 10 heuristics, WCAG 2.2, and modern e-commerce UX patterns). Here are the specific, observed issues that justify a redesign:

### Broken / Unclear Calls-to-Action

- On the Shop page, **9 of the 11 products are marked "Out of stock,"** yet every single one still displays an active "Add to Cart" button. This is a false affordance — customers click a button that promises an action the site can't deliver, which breaks trust immediately.
- The homepage has three separate CTAs with near-identical intent ("Shop Coffee," "View All Coffee," "Browse Our Collection"), which adds visual noise instead of guiding the user toward a clear next step.

### Confusing / Inconsistent Navigation

- "Franchise" (a B2B, investor-facing link) sits in the same primary nav bar, at the same visual weight, as "Shop" (a B2C, consumer-facing link). Mixing two completely different audiences in one flat navigation bar creates confusion about who the site is actually for.
- There is no search or filter-by-flavor option in the shop, despite the product catalog already needing better organization.

### Inconsistent Branding

- The footer tagline changes depending on the page: the homepage says _"Premium artisan coffee beans, expertly roasted and delivered fresh,"_ while the Shop, Product, About, and Contact pages all use generic, unrelated boilerplate — _"Your trusted online store for quality products."_ This inconsistency undercuts the specialty-coffee identity the rest of the site works hard to build.
- There are no social media links anywhere on the site, despite Instagram being where I personally discovered and still engage with the brand.

### Accessibility Issues

- The homepage hero uses an **autoplaying background video with no visible pause or mute control**, which fails WCAG 2.2 Success Criterion 2.2.2 (Pause, Stop, Hide) and can be a problem for users sensitive to motion.
- Status tags on products (New, Limited, Special, Sold Out) need to be confirmed as not relying on color alone to convey meaning, per WCAG 1.4.1.

### Missed Trust & Conversion Opportunities (supporting evidence of poor UX design, not just visuals)

- There are no customer reviews, testimonials, or social proof anywhere on the site — despite Toro having a decade-long story and multiple real locations, none of that credibility is surfaced to a first-time visitor.
- Product pages list technical metadata (origin, process, roast level) but no tasting notes — a critical missing piece for a specialty coffee buyer trying to choose between beans without tasting them first.
- No payment trust badges, shipping/returns policy links, or privacy policy links are present anywhere on the site, which matters for buyer confidence in South African e-commerce specifically.

### Slow / Inconsistent Load Experience

- The autoplaying hero video loads on every visit to the homepage with no static fallback image, which is a likely contributor to slow load times and inconsistent performance, especially on mobile networks.

### Mobile Responsiveness (flagged for verification and redesign focus)

- While the site has a responsive viewport meta tag, several patterns — the autoplay video, multi-control product forms (size selector + quantity stepper), and touch target sizing — need to be rebuilt with mobile-first, touch-friendly patterns rather than adapted after the fact.

---

**In summary:** Toro Coffee's brand and product are genuinely excellent — the redesign problem isn't the coffee, it's that the website undersells it. A rebuild focused on fixing broken product states, unifying the brand voice, adding sensory product content, and improving accessibility and mobile usability would bring the site up to the standard the brand itself already deserves.

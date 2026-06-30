# CrackTheCampus

A responsive landing page for a campus placement prep platform, built with React and Tailwind CSS.

**Live site:** https://crackthecampus-ganavi.vercel.app
**Repository:** https://github.com/ganaviprabhu/crackthecampus

---

## Technical Approach

The project is built as a single-page React application using **Create React App** as the build tooling, with **Tailwind CSS** for styling instead of plain CSS or CSS-in-JS. The decision to use Tailwind was driven by the need for rapid, consistent styling across many small sections (Hero, Stats, Testimonials, Courses, Companies, Footer) without maintaining a separate stylesheet per component.

**Theming.** A custom color palette (`primary` — emerald green scale, `accent` — indigo) is defined in `tailwind.config.js` and used consistently across all components instead of Tailwind's default gray/indigo/blue palette, giving the site a distinct, non-generic visual identity.

**Dark mode.** Implemented using Tailwind's `darkMode: 'class'` strategy. A single boolean state (`dark`) lives in `App.jsx` and is toggled from the Navbar; when active, it adds a `dark` class to the root `<div>`, which activates all `dark:` variant classes throughout the component tree. This avoids prop-drilling theme values manually — Tailwind handles the conditional styling declaratively.

**Component architecture.** The page is composed of independent, single-responsibility components (`Navbar`, `Hero`, `Features`, `Stats`, `Testimonials`, `Companies`, `Courses`, `Footer`), each imported and rendered in sequence inside `App.jsx`. This keeps each section easy to edit, test, or reorder independently.

**Responsiveness.** All components use Tailwind's mobile-first responsive utilities (`sm:`, `md:`, `lg:`) rather than custom media queries. The Navbar specifically implements a collapsible hamburger menu below the `md` breakpoint, with the dark-mode toggle duplicated into both the desktop nav and the mobile icon row so the feature remains accessible at every screen size.

**Accessibility.** Semantic landmarks (`<header role="banner">`, `<footer role="contentinfo">`, `aria-label`, `aria-expanded`) are used throughout, and the codebase passes CRA's production ESLint accessibility ruleset (`eslint-plugin-jsx-a11y`).

**Deployment.** The app is deployed on Vercel, connected directly to the GitHub repository's `main` branch — every push triggers an automatic production rebuild.

---

## Folder Structure

```
crackthecampus/
├── public/
│   ├── images/
│   │   ├── tcs.png
│   │   ├── infosys.png
│   │   ├── wipro.png
│   │   ├── accenture.png
│   │   ├── cognizant.png
│   │   ├── hcl.png
│   │   ├── amazon.png
│   │   ├── microsoft.png
│   │   ├── deloitte.png
│   │   ├── capgemini.png
│   │   ├── ibm.png
│   │   ├── google.png
│   │   ├── sonata.png
│   │   └── hero-bg.png
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   ├── favicon.ico
│   ├── logo192.png
│   └── logo512.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav, mobile menu, dark mode toggle
│   │   ├── Hero.jsx            # Headline, CTA, background image, illustrative SVG
│   │   ├── Features.jsx        # Feature highlights grid
│   │   ├── Stats.jsx           # Typographic platform statistics
│   │   ├── Testimonials.jsx    # Student testimonial cards
│   │   ├── Companies.jsx       # Hiring partner logos (scrolling strip)
│   │   ├── Courses.jsx         # Course/practice offering cards
│   │   └── Footer.jsx          # Site footer with link groups and socials
│   ├── App.jsx                 # Root component, composes all sections, holds dark-mode state
│   ├── index.js                # React DOM entry point
│   ├── index.css               # Tailwind directives, font import, global styles
│   ├── App.css                 # Unused CRA boilerplate (retained, not imported)
│   ├── App.test.js             # CRA default test boilerplate
│   ├── reportWebVitals.js      # CRA performance measurement utility
│   ├── setupTests.js           # CRA test setup
│   └── logo.svg                # CRA default boilerplate asset
├── tailwind.config.js          # Custom color palette, font family
├── postcss.config.js           # Tailwind/Autoprefixer pipeline
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Developer Assumptions

A few decisions were made explicitly where requirements were ambiguous or unspecified:

- **Placeholder data.** Testimonial quotes, course descriptions, and student/placement statistics (e.g. "10,000+ students placed") are illustrative sample data, not sourced from a live backend or real student records. Connecting these to a real CMS or API is out of scope for this submission.
- **Company logos.** Hiring partner logos (TCS, Infosys, Wipro, Accenture, Cognizant, HCL, Amazon, Microsoft, Deloitte, Capgemini, IBM, Google, Sonata) are used strictly for demonstration/educational purposes to illustrate a "companies our students placed at" section. These are third-party trademarks; in a real commercial deployment, explicit brand usage permission from each company would need to be confirmed.
- **No backend/auth.** This is a static front-end marketing site. "Get Started Free" and similar CTAs link to in-page anchors (e.g. `#courses`) rather than a functioning signup/auth flow, since no backend was specified in the requirements.
- **Placeholder links.** Footer legal links (Privacy Policy, Terms of Service, etc.) and some social icons point to `#` as placeholders, since no actual policy pages or social accounts were provided.
- **Single-page scope.** The deliverable was treated as a one-page scrolling site (with anchor-link navigation) rather than a multi-route application, since no routing requirement was specified.

---

## Extra Features Added Beyond Standard Requirements

- **Custom, non-default color system** — a hand-picked emerald-green/indigo palette configured in Tailwind, rather than relying on default theme colors, for a distinct visual identity.

- **Full dark mode support** — toggle accessible from both desktop and mobile navigation, persisted via component state and applied site-wide through Tailwind's `dark:` variants.

- **Responsive, accessible mobile navigation** — animated hamburger menu with `aria-expanded`, focus-safe link list, and a duplicated dark-mode toggle so no functionality is lost on small screens.

- **Scroll-aware navbar** — the header gains a shadow once the user scrolls past the top of the page, using a scroll event listener and local state, for a more polished feel than a static nav bar.

- **Subtle background imagery in the Hero section** — a low-opacity background image layered behind the hero content using absolute positioning, without overpowering text legibility.

- **Typographic stat presentation** — the Stats section uses scale, tabular numerals, and divider lines to create visual hierarchy through typography alone, rather than icons or illustrations.

- **Graceful logo fallback handling** — company logo images use an `onError` handler so that a missing or broken image file silently hides itself instead of showing a broken-image icon, keeping the UI clean even with incomplete asset sets.

- **Marquee-style company strip with edge fade** — a horizontally scrollable company logo strip with gradient fade-out edges for a more refined visual finish than a plain wrapped grid.

---

## Running Locally

```bash
git clone https://github.com/ganaviprabhu/crackthecampus.git
cd crackthecampus
npm install
npm start
```

The app will be available at `http://localhost:3000`.

## Building for Production

```bash
npm run build
```

Output is generated in the `build/` directory, ready for static hosting.
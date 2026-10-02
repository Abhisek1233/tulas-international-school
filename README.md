# Tulas International School (TIS) — Homepage Redesign

A production-grade, animated, high-converting homepage redesign for **Tulas International School (TIS), Dehradun** ([https://tis.edu.in/](https://tis.edu.in/)). Built for a frontend developer hiring assessment, evaluating component architecture, animation quality, brand fidelity, mobile responsiveness, and clean code standards.

---

## Live Links & Repository

- **Live Demo**: [Deploy on Vercel / Netlify with instructions below]
- **Public GitHub Repository**: [Repository Link]

---

## Site Routes Table

| Route | Page | Purpose & Key Features |
|---|---|---|
| `/` | `Home.jsx` | Full 15-section homepage (Hero, Enquiry, Voices, Sports, Stats, Rankings, Personalities, Awards, Reviews, FAQ, etc.) |
| `/about-tis/our-history` | `OurHistory.jsx` | Inception story, 2004–2012 founder journey, next-gen leadership portraits, offset line-framed photos |
| `/about-tis/why-choose-us` | `WhyChooseUs.jsx` | Playful hand-drawn polaroids hanging on interactive clothesline, Caveat handwriting font, 8 core reasons with center split |
| `/about-tis/vision-and-mission` | `VisionMission.jsx` | Mission, Vision, and Community Values (Equity & Engagement) with gold underlines and check badges |
| `/about-tis/awards-and-achievements` | `AwardsAchievements.jsx` | 2014–2023 year-by-year timeline, sports & Olympiad honors, and full-resolution certificate Lightbox modal |
| `/about-tis/headmasters-profile` | `HeadmasterProfile.jsx` | Mr. Raman Koushal biography, editorial display typography, quotation ornament, readable 65ch column |
| `/about-tis/our-management` | `OurManagement.jsx` | 4 management portrait cards with animated W3C accessible disclosure panels and credentials lists |
| `*` | `NotFound.jsx` | Accessible 404 error page with Return Home and Admissions CTAs |

---

## Tech Stack

- **Core Framework**: React 18+ (`react`, `react-dom`) with Vite 5.
- **Routing**: `react-router-dom` v6 (`react-router-dom@^6.28.0`) — Added as the single authorized new dependency to deliver declarative client-side SPA routing with asynchronous code-splitting via `React.lazy()` and `<Suspense>`, preserving 60 FPS transitions without reloading assets or re-mounting global context.
- **Styling**: Tailwind CSS v3 pinned (`tailwindcss@3.4.17`, `postcss`, `autoprefixer`).
- **Motion & Interactions**: Framer Motion (`framer-motion@11.11.17`).
- **Icons**: Lucide React (`lucide-react@0.460.0`).
- **Fonts**: Google Fonts (*Barlow Semi Condensed*, *Playfair Display*, *Kumbh Sans*, *Caveat*).
- **Deployment**: Vercel / Netlify ready with automated SPA rewrites (`vercel.json`, `public/_redirects`).


---

## 4 Standout Features Implemented

All four standout differentiator features have been implemented:

1. **Custom Cursor**: A dot + spring-smoothed follower ring via Framer Motion's `useMotionValue` and `useSpring` (transform only), dynamically expanding over interactive targets with contextual badges (`"View"`, `"Drag"`, `"Play"`), automatically disabled on coarse pointers (`pointer: coarse`) and `prefers-reduced-motion`.
2. **Scroll-Triggered Reveals**: Reusable `<Reveal>` and `<RevealItem>` containers applying hardware-accelerated `whileInView` staggered entrances across sections and cards with opacity and transform transitions.
3. **Animated Dark/Light Theme Switcher**: Sun/moon morphing toggle in the sticky header controlling Tailwind's `.dark` class, with comprehensive CSS variables (`--bg`, `--surface`, `--text`, `--muted`, `--primary`, `--secondary`, `--accent`, `--border`), persisted in `localStorage` with a zero-flash head script.
4. **Scroll Progress Bar**: An ultra-smooth reading progress indicator fixed at the top of the viewport driven by `useScroll` + `useSpring` with a Crimson-to-Teal-to-Gold brand gradient (`aria-hidden="true"`).

---

## Getting Started Locally

### Prerequisites
- Node.js v18+ (tested on Node v22.13.1)
- npm v9+

### Installation & Run
```bash
# 1. Clone repository
git clone <repository-url>
cd tulas-international-school

# 2. Install pinned dependencies
npm install

# 3. Start local development server (defaults to http://localhost:5173/)
npm run dev

# 4. Create production build
npm run build

# 5. Preview production build locally
npm run preview
```

---

## Component Architecture Overview

```
src/
├── components/
│   ├── animation/
│   │   ├── CustomCursor.jsx       # Standout Feature 1: Mouse follower ring + contextual labels
│   │   ├── ScrollProgress.jsx     # Standout Feature 4: Top spring reading progress bar
│   │   ├── ThemeToggle.jsx        # Standout Feature 3: Sun/moon morphing theme switcher
│   │   └── index.js
│   ├── layout/
│   │   ├── TopBar.jsx             # Teal #60BAB1 helpline bar + Enquire Now CTA
│   │   ├── Header.jsx             # Sticky crimson bar with overlapping round crest logo
│   │   ├── DesktopNav.jsx         # 9 top-level links with animated dropdowns & gold underlines
│   │   ├── DropdownPanel.jsx      # Frosted glass submenu panel with staggered child links
│   │   ├── HamburgerOverlay.jsx   # Full-screen overlay with accordion links & 2x2 campus tiles
│   │   ├── Footer.jsx             # Wine/crimson overlay over aerial photo with Google Maps embed
│   │   └── index.js
│   ├── sections/
│   │   ├── Hero.jsx               # Section A: 8 rotating circular cutouts (3.5s cycle) + SEO copy
│   │   ├── ContactEnquiry.jsx     # Section B: Contact card + single-form enquiry with OTP mock
│   │   ├── StudentVoices.jsx      # Section C: Lady in Pink, "MADE FOR THE future", Man in Blue
│   │   ├── Sports.jsx             # Section D: "Sports ?" with circled 16+ & 16 discipline cards
│   │   ├── SecretSection.jsx      # Section E: "Secret to Making School Awesome" mustard portrait
│   │   ├── StatsBento.jsx         # Section F: 4 count-up metrics interleaved with campus photo tiles
│   │   ├── Rankings.jsx           # Section G: Cream band with trophy card + 4 crimson ranking cards
│   │   ├── Personalities.jsx      # Section H: Dual horizontal snap carousels (28 leaders & athletes)
│   │   ├── Awards.jsx             # Section I: Staggered awards certificates + rotating "SEE MORE"
│   │   ├── VirtualTourBanner.jsx  # Section J: 360° interactive campus virtual tour banner
│   │   ├── ParentVideos.jsx       # Section K: 3 phone-mockup frame video players with single playback
│   │   ├── GoogleReviews.jsx      # Section L: 10 verified parent reviews carousel with autoplay
│   │   ├── Collaborations.jsx     # Section M: 12+ international university tie-ups dual marquee
│   │   ├── Faq.jsx                # Section N: 18-question accessible accordion with category filters
│   │   └── index.js
│   ├── ui/
│   │   ├── Button.jsx             # Semantic accessible button / link primitive
│   │   ├── Pill.jsx               # Tag badge primitive
│   │   ├── Card.jsx               # Surface container with rounded-20 to 28 radii
│   │   ├── SectionHeading.jsx     # Consistent editorial display typography
│   │   ├── Reveal.jsx             # Standout Feature 2: Scroll-triggered viewport reveals
│   │   ├── GoldUnderline.jsx      # Animated SVG stroke-dashoffset hand-drawn squiggle
│   │   ├── GoldEllipse.jsx        # Animated SVG stroke-dashoffset hand-drawn ellipse loop
│   │   ├── PhoneFrame.jsx         # CSS-drawn smartphone bezel with speaker notch
│   │   ├── Accordion.jsx          # Accessible collapsible disclosure component
│   │   ├── Modal.jsx              # Accessible modal dialog with focus trap & scroll lock
│   │   └── index.js
│   └── widgets/
│       ├── ApplyTab.jsx           # Fixed right vertical "APPLY NOW" side tab
│       ├── WhatsAppButton.jsx     # Floating WhatsApp action with pulse animation
│       ├── EvaAssistant.jsx       # Virtual admission assistant bubble with canned inquiry chips
│       ├── StickyCtaBar.jsx       # Mobile sticky bottom bar (Call, WhatsApp, Enquire, Apply)
│       ├── LightboxModal.jsx      # Certificate lightbox with arrow navigation & zoom
│       └── index.js
├── data/
│   ├── siteInfo.js                # Coordinates, helpline, policies, social profiles
│   ├── navigation.js              # 9 primary nav menus, submenus, and 4 hamburger tiles
│   ├── heroSlides.js              # 8 circular photo cutout profiles & SEO statements
│   ├── sports.js                  # 16 athletic disciplines & category tags
│   ├── stats.js                   # 4 bento statistics & 3 photo tile metadata
│   ├── rankings.js                # 4 state and national rankings
│   ├── personalities.js           # 13 sports champions + 15 leaders of India
│   ├── awards.js                  # 3 accredited certifications & authorities
│   ├── reviews.js                 # 10 parent Google reviews with parental relations
│   ├── faqs.js                    # All 18 required parent FAQs with category tags
│   ├── collaborations.js          # 12 international partner universities
│   ├── voices.js                  # Student quotes & exact parent testimonial wording
│   ├── enquiryOptions.js          # Classes IV-XII, all 36 Indian states, and country dialing codes
│   └── index.js                   # Central data registry
├── hooks/
│   ├── useTheme.js                # Dark/light toggle and localStorage sync
│   ├── useScrollProgress.js       # Framer Motion spring scroll progress
│   ├── useMousePosition.js        # Viewport mouse motion values
│   ├── useIsFinePointer.js        # Pointer fine/coarse detection
│   ├── useCountUp.js              # Numeric intersection count-up with reduced-motion support
│   ├── useOtpFlow.js              # Isolated client-side OTP mock with 30s resend countdown
│   ├── useBodyScrollLock.js       # Modal overlay scroll locking
│   ├── useFocusTrap.js            # Accessible keyboard focus trapping & Escape key listener
│   ├── useMediaQuery.js           # Responsive layout breakpoint listener
│   └── index.js
├── styles/
│   └── index.css                  # Base styles, Tailwind directives, and CSS variable system
├── App.jsx                        # Root application component with React.lazy code splitting
└── main.jsx                       # React 18 DOM mount
```

---

## Brand Identity Retained

- **Crimson (`#B90124`)**: Dominant brand color across the sticky header, hero section, primary headings, and ranking cards. Darker crimson (`#96001A`) on hover/pressed states. Lifted to `#E0304F` in dark mode for contrast.
- **Teal (`#60BAB1`)**: Top utility bar, hamburger button, Apply Now side tab, doodles, arrows, and highlight text. High-contrast `#2F8F86` utilized for body text on light backgrounds to meet WCAG AA standards.
- **Warm Cream (`#F8F5F0`)**: Rankings and review container backdrops.
- **Gold Accent (`#C9A24D`)**: Isolated in CSS variable `--accent` for single-point editing, animating the hand-drawn squiggle underline and enclosing ellipse loops via SVG `stroke-dashoffset`.
- **Exact Official Copy**: Retained 100% of the live numbers, credentials, awards, reviews, and verified parent testimonial wording (*"Tulas International School has truly exceeded our expectations..."*).

---

## Performance & Accessibility

- **Code Splitting**: All below-the-fold sections are dynamically loaded via `React.lazy()` and `Suspense`, keeping the initial entry chunk lightweight.
- **Asset Optimization**: 107 official media files downloaded directly into `public/assets/`. High-res aerial campus image (`schooltopview.webp`) and hero cutouts are webp-compressed.
- **Layout Shift Prevention (CLS = 0)**: Explicit `width` and `height` attributes set across all images.
- **LCP Optimization**: Primary hero image preloaded in `<head>` via `<link rel="preload">`.
- **Hardware Acceleration**: Animations restricted to GPU-composited `transform` and `opacity`.
- **Reduced Motion Support**: `prefers-reduced-motion` listeners across the hero slideshow, marquee loops, animated count-ups, and SVG drawings.
- **WCAG AA Compliance**: Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section aria-labelledby="...">`, `<footer>`), single `<h1>`, accessible `<label>` associations in the enquiry form, keyboard focus rings, and focus trapping in all modals.

---

## Known Limitations

1. **OTP Verification**: The phone OTP flow in the enquiry form is an isolated client-side mock (`useOtpFlow.js`). Entering any 4-digit code (such as `1234`) will successfully simulate phone verification.
2. **Eva Virtual Assistant**: The Eva chat panel is a front-end UI mock featuring interactive quick-reply chips and canned responses without a live AI server backend.
3. **External Navigation Links**: Submenu items and portal links resolve directly to their real counterparts on `https://tis.edu.in` and `https://admission.tis.edu.in`.
4. **Placeholders**: All 107 official assets were fetched directly from the live TIS site without failures. Illustrated fallbacks are utilized for the Eva avatar and the 4 hamburger tiles, and can be swapped directly in `public/assets/` if proprietary photographs are provided.

---

## Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete tulas international school homepage redesign"
   git remote add origin https://github.com/<your-username>/tulas-international-school.git
   git branch -M main
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository `tulas-international-school`.
4. Keep the default settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. The site will deploy in under a minute with clean URLs and asset caching.

### Deploy to Netlify
1. Log in to [netlify.com](https://www.netlify.com/) and click **"Add new site" > "Import an existing project"**.
2. Select GitHub and choose your repository.
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **"Deploy site"**.

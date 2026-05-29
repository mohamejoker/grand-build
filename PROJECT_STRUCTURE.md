# Grand Build - Project Structure Documentation

## Project Overview

A professional landing page for Grand Build, an interior design and finishing services company. Built with React, TanStack Router, and Tailwind CSS.

## Directory Structure

```
project/
├── src/
│   ├── assets/
│   │   ├── grand-build-logo.jpg         # Company logo
│   │   ├── hero-interior.jpg            # Hero section image
│   │   ├── service-*.jpg                # Service images
│   │   ├── image.png                    # Additional assets
│   │   └── portfolio/
│   │       └── project-*.jpg            # Portfolio images (6 projects)
│   │
│   ├── components/
│   │   ├── icons.tsx                    # Reusable icon components
│   │   │   ├── WhatsAppIcon
│   │   │   ├── PhoneIcon
│   │   │   ├── PlayIcon
│   │   │   └── CheckIcon
│   │   │
│   │   ├── landing/                     # Landing page reusable components
│   │   │   ├── reveal.tsx               # Scroll reveal animation wrapper
│   │   │   ├── counter.tsx              # Animated counter component
│   │   │   ├── section-eyebrow.tsx      # Section header component
│   │   │   └── index.ts                 # Barrel export
│   │   │
│   │   └── ui/                          # shadcn/ui components
│   │       ├── accordion.tsx            # Used for FAQ section
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── [45+ other components]
│   │
│   ├── data/
│   │   └── landing-page.ts              # ALL landing page data (NEW)
│   │       ├── BRAND, WHATSAPP_URL constants
│   │       ├── TypeScript interfaces
│   │       ├── services array
│   │       ├── processSteps array
│   │       ├── testimonials array
│   │       ├── features array
│   │       ├── portfolioItems array
│   │       ├── faqItems array
│   │       ├── branches array
│   │       ├── statistics array
│   │       └── heroTrustItems array
│   │
│   ├── hooks/
│   │   ├── use-in-view.ts               # IntersectionObserver hook for scroll animations
│   │   └── use-mobile.tsx               # Mobile detection hook
│   │
│   ├── lib/
│   │   ├── config.server.ts             # Server configuration
│   │   ├── error-capture.ts             # Error tracking
│   │   ├── error-page.ts                # Error page utilities
│   │   ├── lovable-error-reporting.ts   # Error reporting
│   │   └── utils.ts                     # Utility functions (cn, etc.)
│   │
│   ├── routes/
│   │   ├── __root.tsx                   # Root layout with metadata
│   │   └── index.tsx                    # Main landing page (REFACTORED)
│   │       └── Components: Sections for:
│   │           - Hero
│   │           - Navigation
│   │           - Services
│   │           - Process
│   │           - Why Us
│   │           - Testimonials
│   │           - Portfolio
│   │           - FAQ
│   │           - Branches
│   │           - Final CTA
│   │           - Footer
│   │
│   ├── styles.css                       # Global styles & animations
│   ├── router.tsx                       # Router configuration
│   ├── routeTree.gen.ts                 # Generated route tree
│   ├── start.ts                         # Application startup
│   └── server.ts                        # Server setup
│
├── vite.config.ts                       # Vite configuration
├── tsconfig.json                        # TypeScript configuration (UPDATED)
├── eslint.config.js                     # ESLint rules
├── .prettierrc                          # Prettier config
├── package.json                         # Dependencies
└── PROJECT_STRUCTURE.md                 # This file

```

## Key Improvements Made

### 1. Data Extraction (`src/data/landing-page.ts`)

**Before**: All data was inline in index.tsx (1012+ lines)
**After**: Centralized in dedicated data file with TypeScript interfaces

**Benefits**:

- Single source of truth for all content
- Easy to update content without touching component code
- Reusable interfaces for type safety
- Separation of concerns

**Data Objects**:

- `services`: 3 service offerings with features
- `processSteps`: 4-step process flow
- `testimonials`: 3 customer reviews with ratings
- `features`: 6 company features/benefits
- `portfolioItems`: 6 portfolio projects with grid spans
- `faqItems`: 6 FAQ Q&A pairs
- `branches`: 2 office locations with details
- `statistics`: 4 company stats with counters
- `heroTrustItems`: 4 hero section trust indicators

### 2. Reusable Components (`src/components/landing/`)

**Before**: Functions defined inline in route file
**After**: Extracted into separate component files

```typescript
// Components created:
-Reveal.tsx - // Scroll reveal wrapper with IntersectionObserver
  Counter.tsx - // Animated number counter with easing
  SectionEyebrow.tsx - // Section header with accent line & translations
  icons.tsx; // SVG icon components (WhatsApp, Phone, Play, Check)
```

**Benefits**:

- Reusability across multiple pages
- Easier testing
- Better code organization
- Type-safe props

### 3. TypeScript Improvements

**Added Interfaces**:

```typescript
interface Service {
  num;
  icon;
  title;
  desc;
  img;
  features;
}
interface ProcessStep {
  n;
  icon;
  t;
  d;
}
interface Testimonial {
  name;
  role;
  rating;
  text;
  avatar;
}
interface Feature {
  icon;
  t;
  d;
}
interface PortfolioItem {
  img;
  title;
  tag;
  span;
}
interface FAQ {
  q;
  a;
}
interface Branch {
  icon;
  tag;
  title;
  desc;
  contact;
  map;
}
interface Statistic {
  n;
  s;
  label;
  en;
}
interface TrustItem {
  icon;
  t;
  s;
}
```

**tsconfig.json Updates**:

- Enabled `noUnusedLocals: true` (was false)
- Enabled `noUnusedParameters: true` (was false)
- Better type safety for development

### 4. Code Quality

- **Prettier Formatting**: All files formatted and consistent
- **Component Imports**: Proper barrel exports (index.ts files)
- **Icon Consolidation**: SVG icons centralized in icons.tsx
- **Removed Duplication**: No repeated component definitions

## Component Hierarchy

```
LandingPage
├── Navigation (sticky)
├── Hero Section
│   ├── Background animations
│   ├── Trust items
│   └── CTA buttons
├── Visual anchor (hero image)
├── Stats Section (with Counter components)
├── About Section
├── Services Section
│   └── ServiceCard[] (3 cards with features)
├── Process Section
│   └── ProcessStep[] (4 steps with timeline)
├── Why Us / Features Section
│   └── FeatureCard[] (6 features)
├── Testimonials Section
│   └── TestimonialCard[] (3 testimonials)
├── Portfolio Section (Bento layout)
│   └── PortfolioItem[] (6 items with responsive spans)
├── FAQ Section
│   └── Accordion[] (6 FAQ items with Radix UI)
├── Branches Section
│   └── BranchCard[] (2 offices with maps)
├── Final CTA Section
└── Footer
    ├── Brand info
    ├── Quick links
    ├── Services menu
    └── Contact info
```

## File Size Optimization

| File                     | Before     | After       | Change              |
| ------------------------ | ---------- | ----------- | ------------------- |
| src/routes/index.tsx     | 1012 lines | ~800 lines  | -208 lines          |
| Total extracted          | All inline | Distributed | Better organization |
| src/data/landing-page.ts | N/A        | ~200 lines  | New file            |
| src/components/landing/  | N/A        | 4 files     | New directory       |

## Styling System

### Global Animations (src/styles.css)

- `reveal-up`: Entrance animation for scroll reveal
- `float-soft`: Floating background elements
- `pulse-ring`: Pulsing circle animation (WhatsApp button)
- `gradient-pan`: Gradient background animation

### Tailwind Classes Used

- **Spacing**: 8px system (mt-4, p-6, gap-3, etc.)
- **Colors**: Brand (dark blue), accent (teal), secondary (light)
- **Typography**: Tajawal (display), JetBrains Mono (mono)
- **Responsive**: sm:, md:, lg: breakpoints
- **Effects**: shadow-lg, blur-3xl, transition-all

### Accessibility Features

- `aria-label` on interactive elements
- `aria-hidden="true"` on decorative SVGs
- Semantic HTML (`<nav>`, `<section>`, `<footer>`)
- Skip links (implicit via anchor navigation)
- High color contrast ratios
- Keyboard navigation support

## Data Flow

```
landing-page.ts (data)
    ↓
src/routes/index.tsx (consumer)
    ├── maps over data arrays
    ├── renders Reveal wrappers
    ├── uses Counter for animations
    └── uses SectionEyebrow for headers
```

## Performance Optimizations

1. **Image Loading**: `loading="lazy"` on portfolio/service images
2. **Code Splitting**: Automatic via Vite bundling
3. **CSS Bundle**: 114.79 kB (16.79 kB gzipped)
4. **JS Bundle**: ~440 kB total (111.52 kB gzipped main app)
5. **Tree Shaking**: Enabled for unused components
6. **Animation Performance**: CSS transforms, GPU acceleration

## Build Configuration

```typescript
// vite.config.ts
- Framework: TanStack Start (React SSR)
- Build tool: Vite 7.3.1
- React: 19.2.0
- Router: TanStack Router 1.168.25

// Module resolution
- Path alias: @/* → ./src/*
- Module format: ESNext
- Target: ES2022
```

## Development Workflow

```bash
# Format all files with Prettier
npm run format

# Build production bundle
npm run build

# Build for development
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Key Files Modified/Created

| File                     | Action         | Purpose                          |
| ------------------------ | -------------- | -------------------------------- |
| src/data/landing-page.ts | **CREATED**    | Centralize all landing page data |
| src/components/landing/  | **CREATED**    | Reusable components directory    |
| src/components/icons.tsx | **CREATED**    | Centralized icon components      |
| src/routes/index.tsx     | **REFACTORED** | Remove inline data & functions   |
| tsconfig.json            | **UPDATED**    | Enable strict type checking      |

## Content Management

To update landing page content:

1. **Services**: Edit `services` array in `src/data/landing-page.ts`
2. **Testimonials**: Edit `testimonials` array
3. **FAQ**: Edit `faqItems` array
4. **Portfolio**: Edit `portfolioItems` array
5. **Company Info**: Edit constants (BRAND, PHONE_DISPLAY, etc.)

No component code changes needed!

## Future Enhancements

Potential improvements for next phase:

- [ ] Extract section components (HeroSection.tsx, ServicesSection.tsx, etc.)
- [ ] Add animations library (Framer Motion for advanced animations)
- [ ] Implement image optimization (webp, srcset)
- [ ] Add form validation for contact
- [ ] Implement CMS integration (Sanity, Contentful)
- [ ] Add multi-language support (i18n)
- [ ] Performance monitoring (Web Vitals)
- [ ] Analytics integration (Google Analytics, Mixpanel)

## Testing Notes

Build Status: ✅ PASSING

- 1939 modules transformed
- CSS: 114.79 kB (16.79 kB gzipped)
- JS: 89.50 kB + 350.43 kB (24.20 + 111.52 kB gzipped)
- Build time: ~10s (client) + 1.8s (SSR)

No TypeScript errors or warnings with strict mode enabled.

---

**Last Updated**: 2026-05-29
**Project Version**: 1.0.0
**Framework**: React 19.2.0 + TanStack Start 1.167.50

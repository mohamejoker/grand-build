# Grand Build - Developer Guide

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Setup

```bash
# Install dependencies
npm install

# Format code
npm run format

# Build project
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

### Core Directories

```
src/
├── routes/              # Page routes (TanStack Router)
│   ├── __root.tsx       # Root layout with metadata
│   └── index.tsx        # Landing page (main page)
│
├── components/          # React components
│   ├── landing/         # Landing page specific components
│   │   ├── reveal.tsx
│   │   ├── counter.tsx
│   │   └── section-eyebrow.tsx
│   ├── icons.tsx        # SVG icon components
│   └── ui/              # shadcn/ui components (47 components available)
│
├── data/                # Data files
│   └── landing-page.ts  # Landing page content & interfaces
│
├── hooks/               # Custom React hooks
│   ├── use-in-view.ts   # Scroll intersection observer
│   └── use-mobile.tsx   # Mobile detection
│
├── lib/                 # Utilities and helpers
│   ├── config.server.ts # Server config
│   ├── error-capture.ts # Error tracking
│   ├── utils.ts         # Helper functions (cn, clsx)
│   └── ...
│
├── styles/              # Global styles
│   └── styles.css       # Tailwind, animations, custom classes
│
├── assets/              # Static files
│   ├── *.jpg            # Images
│   └── portfolio/       # Portfolio images
│
└── [other files...]
```

---

## Adding Features

### Add a New Section to Landing Page

1. **Define data structure** in `src/data/landing-page.ts`:

```typescript
export interface MySection {
  id: string;
  title: string;
  content: string;
}

export const mySectionItems: MySection[] = [{ id: "1", title: "Item 1", content: "Content..." }];
```

2. **Render in** `src/routes/index.tsx`:

```typescript
<section id="my-section" className="px-4 py-16 sm:px-6 sm:py-24">
  <div className="mx-auto max-w-7xl">
    <Reveal>
      <SectionEyebrow en="Section" ar="القسم" />
      <h2 className="font-display text-3xl font-bold">Section Title</h2>
    </Reveal>

    {mySectionItems.map((item, i) => (
      <Reveal key={item.id} delay={i * 80}>
        {/* Render item */}
      </Reveal>
    ))}
  </div>
</section>
```

### Create a New Component

**Example**: Creating a custom button component

```typescript
// src/components/custom-button.tsx
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function CustomButton({
  href,
  children,
  variant = "primary",
}: CustomButtonProps) {
  const variants = {
    primary: "bg-brand text-white hover:bg-brand/90",
    secondary: "bg-secondary border-black/5 hover:shadow-lg",
  };

  return (
    <a href={href} className={cn("rounded-lg px-6 py-3 transition-all", variants[variant])}>
      {children}
    </a>
  );
}
```

**Usage**:

```typescript
import { CustomButton } from "@/components/custom-button";

<CustomButton href="/services" variant="primary">
  View Services
</CustomButton>
```

### Add a New Page Route

1. Create file: `src/routes/page-name.tsx`
2. Export route:

```typescript
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/page-name")({
  head: () => ({
    meta: [
      { title: "Page Title" },
      { name: "description", content: "Page description" },
    ],
  }),
  component: PageComponent,
});

function PageComponent() {
  return (
    <div>
      {/* Page content */}
    </div>
  );
}
```

3. Routes are automatically discovered and registered

---

## Styling System

### Tailwind CSS

All styling uses Tailwind CSS v4 with custom theme:

```css
/* src/styles.css */
@theme inline {
  --color-brand: var(--brand); /* Dark blue primary */
  --color-accent: var(--accent); /* Teal secondary */
  --color-secondary: var(--secondary); /* Light neutral */
  --font-display: "Tajawal", ...;
  --font-body: "Tajawal", ...;
  --font-mono: "JetBrains Mono", ...;
}
```

### Color System

```typescript
// Available color tokens:
bg - brand; // Dark blue primary color
text - brand; // Brand text color
bg - accent; // Teal accent color
text - accent; // Accent text color
bg - secondary; // Light secondary background
text - secondary; // Secondary text color
bg - card; // Card backgrounds (white)
border - black / 5; // Subtle borders
```

### Spacing System

Uses 8px base unit:

```
gap-1   = 0.25rem (4px)
gap-2   = 0.5rem (8px)
gap-3   = 0.75rem (12px)
gap-4   = 1rem (16px)
gap-6   = 1.5rem (24px)
gap-8   = 2rem (32px)
```

### Animations

```css
/* Available animations in src/styles.css */
animate-reveal    /* Entrance animation */
animate-float     /* Floating effect */
animate-pulse-ring /* Pulsing ring effect */
```

Usage:

```typescript
<div className="animate-reveal">
  {/* Animated on mount */}
</div>

<div className="animate-float">
  {/* Continuous floating animation */}
</div>
```

---

## Working with Data

### Update Landing Page Content

**File**: `src/data/landing-page.ts`

```typescript
// Add a new service
export const services: Service[] = [
  {
    num: "04",
    icon: "🆕",
    title: "New Service",
    desc: "Service description",
    img: newServiceImage,
    features: ["Feature 1", "Feature 2"],
  },
];

// Add a new testimonial
export const testimonials: Testimonial[] = [
  {
    name: "New Client",
    role: "Client Type - Location",
    rating: 5,
    text: "Testimonial text...",
    avatar: "👤",
  },
];

// Add FAQ item
export const faqItems: FAQ[] = [
  {
    q: "Question?",
    a: "Answer to the question...",
  },
];
```

---

## Image Handling

### Importing Images

```typescript
// In TypeScript/React files
import heroImage from "@/assets/hero-interior.jpg";

// Usage in JSX
<img src={heroImage} alt="Description" loading="lazy" />
```

### Image Optimization Tips

1. **Use lazy loading** for below-fold images:

```typescript
<img loading="lazy" src={image} alt="..." />
```

2. **Add width/height** for better layout stability:

```typescript
<img width={1600} height={900} src={image} alt="..." />
```

3. **Use object-fit** for consistent sizing:

```typescript
<img className="object-cover" src={image} alt="..." />
```

---

## Component Props & TypeScript

### Example Component with Full Types

```typescript
// src/components/section-header.tsx
interface SectionHeaderProps {
  en: string;
  ar?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  en,
  ar,
  children,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <SectionEyebrow en={en} ar={ar} />
      {children}
    </div>
  );
}
```

### Using Icons

```typescript
import {
  WhatsAppIcon,
  PhoneIcon,
  PlayIcon,
  CheckIcon,
} from "@/components/icons";

// Default size (h-5 w-5)
<WhatsAppIcon />

// Custom size
<WhatsAppIcon className="h-6 w-6" />
```

---

## Responsive Design

### Breakpoints

```
sm: 640px    (small devices)
md: 768px    (tablets)
lg: 1024px   (laptops)
xl: 1280px   (desktops)
2xl: 1536px  (large screens)
```

### Usage Pattern

```typescript
<div className="
  grid
  grid-cols-1           /* Mobile: 1 column */
  sm:grid-cols-2        /* Tablet: 2 columns */
  md:grid-cols-3        /* Desktop: 3 columns */
  gap-4
  text-sm
  sm:text-base          /* Responsive text size */
  md:text-lg
">
  {/* Responsive grid */}
</div>
```

### Mobile-First Approach

Always start with mobile styles, then add responsive modifiers:

```typescript
// ✅ Correct
<div className="w-full sm:w-auto md:w-1/2">

// ❌ Avoid
<div className="hidden md:block">

// ✅ Instead use
<div className="block md:hidden">  {/* Visible on mobile */}
<div className="hidden md:block"> {/* Visible on desktop */}
```

---

## Performance Tips

### Lazy Loading Components

```typescript
import { lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

<Suspense fallback={<Skeleton />}>
  <HeavyComponent />
</Suspense>
```

### Image Optimization

```typescript
// Use for image-heavy sections
<img
  src={image}
  alt="Description"
  loading="lazy"
  width={1200}
  height={600}
  className="w-full h-auto object-cover"
/>
```

### Event Handler Optimization

```typescript
// Debounce scroll listeners
const handleScroll = debounce(() => {
  // Handle scroll
}, 100);

window.addEventListener("scroll", handleScroll);
```

---

## Accessibility Checklist

- [ ] All images have `alt` text
- [ ] Interactive elements have `aria-label` if needed
- [ ] Decorative SVGs have `aria-hidden="true"`
- [ ] Color is not the only means of information
- [ ] Text has sufficient contrast (4.5:1 for normal text)
- [ ] Focus indicators are visible
- [ ] Keyboard navigation works
- [ ] Form labels are properly associated
- [ ] Links are distinguishable from text

---

## Common Tasks

### Update Company Phone Number

1. Open `src/data/landing-page.ts`
2. Change `PHONE_DISPLAY` constant
3. Change `WHATSAPP_URL` constant
4. Updates everywhere automatically

### Change Brand Colors

1. Edit `src/styles.css` CSS variables:

```css
:root {
  --brand: oklch(...); /* Primary color */
  --accent: oklch(...); /* Secondary color */
  --secondary: oklch(...); /* Light color */
}
```

2. Colors update throughout the site

### Add Social Media Links

1. Add to footer in `src/routes/index.tsx`
2. Import icon from `src/components/icons.tsx`
3. Create new icon if needed in icons.tsx

### Update Navigation Links

1. Edit navigation in `src/routes/index.tsx`
2. Ensure section IDs match (id="services", href="#services")
3. Add new sections as needed

---

## Debugging

### Console Logging

```typescript
// In components
console.log("Debug:", value);
console.error("Error:", error);
console.warn("Warning:", warning);
```

### Browser DevTools

- **Elements**: Inspect DOM structure
- **Styles**: Check applied CSS classes
- **Console**: View errors and logs
- **Network**: Monitor HTTP requests
- **Performance**: Profile animations

### TypeScript Errors

```bash
# Check for type errors
npm run type-check  # If available, or use VSCode

# The build will catch TypeScript errors
npm run build
```

---

## Testing Approach

### Manual Testing Checklist

- [ ] Hero section displays correctly
- [ ] Navigation links work
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] Responsive design works (test on mobile, tablet, desktop)
- [ ] Form submissions work
- [ ] External links open correctly
- [ ] Page performance is acceptable

### Browser Testing

Test on:

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

---

## Deployment

### Build for Production

```bash
npm run build
```

Creates optimized bundles in `dist/` directory:

- `dist/client/` - Frontend assets
- `dist/server/` - Server code

### Preview Production Build

```bash
npm run preview
```

Serves production build locally to test before deployment.

---

## Troubleshooting

### Issue: Prettier conflicts with ESLint

Solution:

```bash
npm run format
npm run lint --fix
```

### Issue: Images not loading

Check:

1. Image file exists in `src/assets/`
2. Import path is correct
3. File has correct extension (.jpg, .png, etc.)
4. Webpack alias `@/` is correctly configured

### Issue: Component not rendering

Check:

1. Component is exported properly
2. Import path is correct
3. Props match interface definition
4. No TypeScript errors in console

### Issue: Styling not applied

Check:

1. Class names are spelled correctly
2. Tailwind CSS classes are valid
3. No CSS conflicts
4. Tailwind is properly configured in vite.config.ts

---

## Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TanStack Router Docs](https://tanstack.com/router/latest)
- [React Docs](https://react.dev)
- [shadcn/ui Components](https://ui.shadcn.com)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

---

## Getting Help

1. Check existing components for patterns
2. Review TypeScript interfaces in `src/data/landing-page.ts`
3. Look at similar sections in the landing page
4. Check browser console for errors
5. Verify file imports and paths

---

**Last Updated**: 2026-05-29
**Framework**: React 19.2.0 + TanStack Start 1.167.50
**Status**: ✅ Production Ready

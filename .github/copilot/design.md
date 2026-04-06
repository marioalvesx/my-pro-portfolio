---
description: Expert portfolio design and UI/UX customization skill for Mario Alves' portfolio. Handles layout modifications, animation effects, Bento grid adjustments, color schemes, typography, spacing, and visual hierarchy using Framer Motion, Tailwind CSS, and shadcn/ui components.
applyTo:
  - "**/*.tsx"
  - "**/*.jsx"
  - "**/*.css"
  - "**/globals.css"
  - "**/tailwind.config.ts"
  - "**/components/**"
---

# Portfolio Design Skill

You are a specialized design agent for Mario Alves' professional portfolio. Your expertise includes modern UI/UX design patterns, animation systems, and responsive layouts.

## Core Responsibilities

### 1. Design System Management

- **Colors & Theming**: Modify CSS variables in globals.css for light/dark mode
- **Typography**: Adjust font sizes, weights, line heights, and tracking
- **Spacing**: Control padding, margins, and gaps using Tailwind utilities
- **Borders & Shadows**: Update border radius, shadows, and visual depth

### 2. Animation & Motion

- **Framer Motion**: Create smooth, performant animations using motion components
- **Variants**: Define animation sequences with stagger effects
- **Gestures**: Implement hover, tap, and scroll-triggered animations
- **Transitions**: Use spring physics and easing curves for natural movement
- **Best Practices**:
  - Use `ease: [0.16, 0.84, 0.44, 1]` for smooth cubic-bezier
  - Apply `stagger` for sequential animations
  - Use `whileInView` for scroll-based reveals with viewport thresholds

### 3. Layout Patterns

- **Bento Grid**: Create card-based grid layouts with varying sizes
- **Responsive Design**: Ensure mobile-first, tablet, and desktop breakpoints
- **Flexbox & Grid**: Use modern CSS layout techniques
- **Container Queries**: Adapt components based on container size

### 4. Component Styling

- **shadcn/ui**: Leverage existing component library
- **Custom Components**: Build reusable, themed components
- **Variants**: Use cva (class-variance-authority) for component variants
- **Composition**: Combine primitives for complex UI patterns

## Project-Specific Guidelines

### Color Palette

```css
Light Mode:
- Background: 0 0% 100%
- Foreground: 240 19% 16%
- Muted: 240 4.8% 95.9%
- Accent: 240 4.8% 95.9%

Dark Mode:
- Background: 240 10% 3.9%
- Foreground: 0 0% 98%
- Muted: 240 3.7% 15.9%
- Accent: 240 3.7% 15.9%
```

### Animation Patterns

```typescript
// Standard container animation
const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 0.84, 0.44, 1],
      when: "beforeChildren",
      delayChildren: stagger(0.1),
    },
  },
};

// Hover scale effect
whileHover={{ scale: 1.03 }}
whileTap={{ scale: 0.97 }}
transition={{ type: "spring", stiffness: 500, damping: 28 }}

// Scroll reveal
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-80px" }}
transition={{ duration: 0.4, ease: [0.16, 0.84, 0.44, 1] }}
```

### Bento Grid Structure

- Use CSS Grid for layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`
- Create cards with varying sizes: `col-span-1`, `col-span-2`, `row-span-2`
- Add numbered badges: Small circular indicators (01, 02, 03, etc.)
- Include hover effects: Subtle scale, background changes, border animations

### Typography Hierarchy

```css
.heroName: text-6xl xl:text-[3rem] font-bold tracking-[1px]
.h1: text-6xl xl:text-[52px] font-bold tracking-[-2px]
.h2: text-5xl xl:text-[42px] font-bold tracking-[-2px]
.subtitle: text-lg text-muted-foreground font-light
```

## Common Design Tasks

### When User Asks to "Modernize" or "Update Design":

1. Check current component structure
2. Add/improve Framer Motion animations
3. Enhance spacing and visual hierarchy
4. Apply modern UI patterns (Bento grid, glass morphism, subtle gradients)
5. Ensure responsive breakpoints
6. Test light/dark mode compatibility

### When User Asks for "Bento Grid Layout":

1. Create grid container with `grid` and appropriate columns
2. Add cards with varying `col-span` and `row-span` values
3. Include numbered badges in top-left corner
4. Add hover animations (scale, background, border)
5. Ensure content is properly aligned and spaced
6. Make responsive for mobile (single column), tablet (2 columns), desktop (3+ columns)

### When User Asks to "Add Animations":

1. Import necessary Framer Motion hooks/components
2. Define animation variants
3. Apply to motion components with appropriate triggers
4. Test performance (avoid animating width/height, prefer transform/opacity)
5. Ensure accessibility (respect prefers-reduced-motion)

### When User Asks for "Color Scheme Changes":

1. Update CSS variables in globals.css
2. Ensure both light and dark modes are adjusted
3. Test contrast ratios for accessibility (WCAG AA minimum)
4. Update any hardcoded colors to use theme variables

## File Structure Reference

- **Components**: `/src/components/` - UI components
- **Styles**: `/src/app/globals.css` - Global styles and CSS variables
- **Translations**: `/src/languages/` - i18n files (en-us.json, pt-br.json)
- **Config**: `tailwind.config.ts` - Tailwind configuration

## Translation System

Always update both language files when adding new UI text:

- `/src/languages/en-us.json`
- `/src/languages/pt-br.json`

Use the `LanguageTranslation` component:

```tsx
import LanguageTranslation from "@/shared/language-provider/LanguageProvider";
<LanguageTranslation id={"translation.key"} />;
```

## Best Practices

1. **Performance**: Use transform and opacity for animations
2. **Accessibility**: Provide `alt` text, ARIA labels, semantic HTML
3. **Responsive**: Mobile-first approach with progressive enhancement
4. **Consistency**: Follow established patterns in the codebase
5. **Maintainability**: Use Tailwind utilities over custom CSS when possible
6. **Theme Support**: Always test both light and dark modes

## Common Pitfalls to Avoid

- Don't animate width/height directly (causes layout shifts)
- Don't forget to update both language files
- Don't hardcode colors (use CSS variables)
- Don't ignore mobile breakpoints
- Don't create animations that run continuously (battery drain)
- Don't forget to add `viewport={{ once: true }}` to scroll animations to prevent re-triggering

## Example Bento Card Component

```tsx
<motion.a
  href="/projects"
  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-accent-foreground transition-all"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400, damping: 28 }}
>
  <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
    01
  </div>
  <div className="mt-12">
    <h3 className="text-2xl font-bold mb-2">
      <LanguageTranslation id={"projects.title"} />
    </h3>
    <p className="text-sm text-muted-foreground">
      <LanguageTranslation id={"projects.subtitle"} />
    </p>
  </div>
</motion.a>
```

When the user requests design changes, analyze the request, apply appropriate patterns from this skill, and implement changes across relevant files while maintaining consistency with the existing design system.

---
name: Ethos Dark Professional
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393f'
  surface-container-lowest: '#0c0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#282a2f'
  surface-container-highest: '#33353a'
  on-surface: '#e2e2e9'
  on-surface-variant: '#c3c6d6'
  inverse-surface: '#e2e2e9'
  inverse-on-surface: '#2e3036'
  outline: '#8d909f'
  outline-variant: '#434654'
  surface-tint: '#b3c5ff'
  primary: '#b3c5ff'
  on-primary: '#002a77'
  primary-container: '#608bff'
  on-primary-container: '#002468'
  inverse-primary: '#1b55ce'
  secondary: '#cabeff'
  on-secondary: '#32009a'
  secondary-container: '#4918c8'
  on-secondary-container: '#b9aaff'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#dc7613'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00174a'
  on-primary-fixed-variant: '#003ea6'
  secondary-fixed: '#e6deff'
  secondary-fixed-dim: '#cabeff'
  on-secondary-fixed: '#1c0062'
  on-secondary-fixed-variant: '#4918c8'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#111318'
  on-background: '#e2e2e9'
  surface-variant: '#33353a'
  surface-card: '#13161E'
  text-heading: '#F0F2F8'
  text-body: '#8B93A8'
  border-subtle: '#252932'
typography:
  display-xl:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
  gutter: 24px
  container-max-width: 1280px
---

## Brand & Style

The design system is built on a foundation of **Modern Minimalism** with a focus on precision and technical excellence. It targets a corporate software audience, evoking a sense of reliability, speed, and high-tier engineering.

The aesthetic avoids heavy-handed decoration, favoring structural integrity and generous whitespace. It mimics the "Linear-style" look through the use of deep-layered surfaces, subtle borders instead of heavy shadows, and a rigid 8px rhythmic grid. The emotional response should be one of "calm power"—software that feels advanced yet exceptionally easy to navigate.

## Colors

The palette is anchored in a deep near-black (`#0D0F14`) to provide maximum contrast for the technical accent colors. 

- **Primary & Secondary:** The Electric Blue and Soft Purple function as functional accents for interactivity and brand presence. They should be used sparingly for primary actions and status indicators.
- **Warmth:** The use of `#F0F2F8` for headings provides a "warm" off-white that reduces eye strain compared to pure white, creating a more sophisticated, premium feel.
- **Functional Grays:** Text and borders use cool-toned grays to maintain the "software/IDE" aesthetic.
- **Ambient Accents:** Use subtle radial glows of the primary blue at 5-10% opacity behind major UI sections or cards to create depth without resorting to gradients.

## Typography

This design system utilizes a three-font strategy to balance character with utility:

1.  **Sora (Headings):** A geometric sans-serif that feels bold and futuristic. It should always use the warm off-white color.
2.  **Inter (Body):** A highly legible, systematic font for all prose and UI text.
3.  **JetBrains Mono (Labels/Technical):** Used for small labels, tags, and metadata to reinforce the software-centric nature of the company.

Letter spacing is tightened for large headings to maintain a "high-end" editorial look and widened slightly for mono labels to ensure legibility at small scales.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy within a max-width container, centered on the screen. 

- **The 8px Rhythm:** All padding, margins, and component heights must be multiples of 8px.
- **Spaciousness:** To achieve the premium feel, use "generous" vertical spacing. Section dividers should have at least 80-120px of vertical padding to allow the content to breathe.
- **Breakpoints:**
  - **Desktop (1280px+):** 12-column grid, 24px gutters.
  - **Tablet (768px - 1279px):** 8-column grid, 20px gutters, 40px side margins.
  - **Mobile (<768px):** 4-column grid, 16px gutters, 24px side margins.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Subtle Outlines** rather than traditional shadows.

- **Base Layer:** The deepest near-black (`#0D0F14`).
- **Surface Layer (Cards/Modals):** A slightly lighter gray-black (`#13161E`).
- **Borders:** Surfaces are defined by a 1px solid border (`#252932`). This creates a crisp, "engineered" look.
- **Interactions:** On hover, a card border may transition to the primary blue (`#4F7EF7`) at 30% opacity to signal interactivity. 
- **Glows:** For hero sections or featured cards, place a very large, soft radial gradient (0% to 10% opacity) of the primary color far behind the element to create a "backlit" atmosphere.

## Shapes

The design system uses a consistent **Rounded** language. 

- **Standard Elements:** Buttons, input fields, and small UI components use a 0.5rem (8px) radius.
- **Containers:** Large cards and section containers use a 1rem (16px) radius to feel more approachable.
- **Consistent Enclosure:** Ensure that if a button is inside a card, the card's radius is always larger than the button's radius to maintain visual harmony.

## Components

- **Buttons:** Primary buttons use a solid Electric Blue background with the display-name white text. Secondary buttons are "ghost" style with a subtle border and no fill.
- **Cards:** Defined by the `#13161E` surface and 1px border. There should be no drop shadow; depth is achieved via the color contrast against the `#0D0F14` background.
- **Inputs:** Dark backgrounds (`#0D0F14`) with a subtle border. On focus, the border glows with the primary blue and a 2px outer rings at 20% opacity.
- **Chips/Badges:** Use the Secondary Soft Purple at low opacity (10-15%) for the background, with the text in full-saturation purple, using the Mono font for a technical vibe.
- **Icons:** Use thin-stroke (1.5pt) abstract icons. Avoid illustrative or multi-color icons; keep them monochromatic in the body text color or primary blue.
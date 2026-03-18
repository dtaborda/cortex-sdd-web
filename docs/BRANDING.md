# dTaborda -- Brand System

> Single source of truth for the dTaborda visual identity.
> A designer or developer should be able to recreate the entire brand from this document.

---

## 1. Identity

### Name

| Variant | Rendering | Usage |
|---------|-----------|-------|
| **Full** | **d**Taborda | Header (desktop), metadata, external references |
| **Compact** | **d**T | Header (mobile), favicons, tight spaces |
| **Tagline ES** | _Rompe el chat. Construi el sistema._ | Marketing, hero sections, presentations |
| **Tagline EN** | _Beyond the prompt._ | Header subtitle, international contexts |

### Logo Treatment

- Font: **JetBrains Mono Bold** (monospace)
- The letter **"d"** renders in **accent cyan** (`#00F0FF`)
- The rest **"Taborda"** / **"T"** renders in **primary white** (`#F0F0F5`)
- No icon/symbol -- the typographic treatment IS the logo
- Size: `text-lg` (1.125rem) in header

### Brand Voice

- Tone: Transgressive, technical, authoritative, provocative
- Style: Senior architect at a premium masterclass
- Language: Direct, sharp, slightly irreverent, zero fluff
- EN variant: Silicon Valley tech jargon ("ship", "blast radius", "zero-config")

---

## 2. Color Palette

### Backgrounds

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `bg-base` | `#050508` | 5, 5, 8 | Page background, main canvas |
| `bg-surface` | `#0A0A0F` | 10, 10, 15 | Cards, visual panel, elevated surfaces |
| `bg-elevated` | `#14141F` | 20, 20, 31 | Active states, hover states, nested surfaces |
| `bg-overlay` | `rgba(5,5,8,0.85)` | -- | Modal backdrops, sidebar overlay on mobile |

### Borders

| Token | Hex | Usage |
|-------|-----|-------|
| `border-subtle` | `#14141F` | Default dividers, light separators |
| `border-default` | `#1E1E2E` | Standard borders, card outlines |
| `border-strong` | `#2A2A3A` | Emphasis borders, scrollbar hover |

### Text

| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#F0F0F5` | Headings, active text, white body |
| `text-secondary` | `#8888AA` | Body text, descriptions, secondary labels |
| `text-muted` | `#555577` | Tertiary text, timestamps, hints |
| `text-ghost` | `#333355` | Decorative text, disabled states, module numbers |

### Accent -- Primary (Cyan)

| Token | Value | Usage |
|-------|-------|-------|
| `accent-cyan` | `#00F0FF` | Logo "d", interactive elements, links, focus, key highlights |
| `accent-cyan-dim` | `rgba(0,240,255, 0.08)` | Key message backgrounds, subtle fills |
| `accent-cyan-glow` | `rgba(0,240,255, 0.3)` | Glow effects, box-shadow halos |

### Accent -- Secondary (Hot Pink)

| Token | Value | Usage |
|-------|-------|-------|
| `accent-hot` | `#FF3366` | Energy, warnings, "chaos" elements, attention |
| `accent-hot-dim` | `rgba(255,51,102, 0.15)` | Subtle hot backgrounds |

### Module Accent Colors

| # | Module | Token | Hex | Visual Character |
|---|--------|-------|-----|------------------|
| 01 | IA Generativa | `mod-amber` | `#FFB800` | Warm, foundational |
| 02 | Context Window | `mod-blue` | `#4D8DFF` | Cool, structural |
| 03 | Chat vs Agente | `mod-emerald` | `#00E5A0` | Growth, action |
| 04 | Evolucion Contexto | `mod-orange` | `#FF6B2B` | Warning, transition |
| 05 | God Agent | `mod-red` | `#FF3366` | Danger, anti-pattern |
| 06 | SDD Orchestrator | `mod-gold` | `#00F0FF` | System, primary (cyan) |
| 07 | Memoria Persistente | `mod-pink` | `#FF69B4` | Memory, persistence |
| 08 | Skills Registry | `mod-lime` | `#7FFF00` | Fresh, on-demand |
| 09 | Stack y Bibliotecas | `mod-violet` | `#9B59FF` | Ecosystem, depth |
| 10 | Cierre | `mod-purple` | `#C471FF` | Synthesis, completion |

### Color Rules

- Primary accent (cyan) for: interactive elements, logo, focus states, key highlights
- Secondary accent (hot pink) for: energy, chaos visuals, warnings, call-to-action
- Module colors for: sidebar active indicator, eyebrow labels, bullet dots, visual panel theming
- NEVER use module colors for body text or large backgrounds (too vibrant)
- Maintain contrast ratios against `bg-base` for all text tokens

---

## 3. Typography

### Font Stack

| Role | Font | Weights | Fallback | CSS Variable |
|------|------|---------|----------|--------------|
| Display / Headings | Inter | 700, 800, 900 | system-ui, -apple-system, sans-serif | `--font-display` |
| Body | Inter | 400, 500 | system-ui, -apple-system, sans-serif | `--font-body` |
| Code / Labels | JetBrains Mono | 400, 500, 600 | ui-monospace, monospace | `--font-mono` |

### Font Loading

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
```

### Type Scale

| Element | Size | Weight | Color | Extra |
|---------|------|--------|-------|-------|
| Page title (h1) | `text-2xl` / `text-3xl` / `text-4xl` | 800 (extrabold) | `text-primary` | `tracking-tight`, `leading-tight` |
| Subtitle | `text-base` / `text-lg` | 500 (medium) | `text-secondary` | -- |
| Eyebrow | `text-[11px]` / `text-xs` | 600 (semibold) | module accent | `uppercase`, `tracking-widest`, `font-mono` |
| Body | `text-sm` / `text-base` | 400 (regular) | `text-secondary` | `leading-relaxed`, `max-w-lg` |
| Key message | `text-sm` | 500 (medium) | `accent-cyan` | Inside highlighted box |
| Next bridge | `text-sm` | 400 (regular) | `text-muted` | `italic` |
| Navigation | `text-sm` | 400 | `text-secondary` | `font-mono` |
| Slide counter | `text-xs` | 400 | `text-ghost` | `font-mono` |
| Module number (sidebar) | `text-[10px]` | 700 (bold) | `text-ghost` | `font-mono`, decorative |
| Header logo | `text-lg` | 700 (bold) | see logo treatment | `font-mono`, `tracking-tight` |
| Keyboard hints | -- | -- | `text-muted` | `font-mono`, inside `<kbd>` bordered pills |
| Version footer | `text-[10px]` | 400 | `text-ghost` | `font-mono`, `uppercase`, `tracking-wider` |

### Typography Rules

- Eyebrows: ALWAYS `uppercase`, `font-mono`, `tracking-widest`, module accent color
- Headings: ALWAYS `font-extrabold`, `tracking-tight`, `text-primary`
- Body: ALWAYS `text-secondary`, `leading-relaxed`
- Technical terms: ALWAYS `font-mono`
- Key messages: accent cyan text inside dim cyan box with left border
- Numbers as decoration: large, ghost color, monospace

---

## 4. Spacing & Layout

### Structural Dimensions

| Element | Value |
|---------|-------|
| Header height | `56px` (3.5rem) |
| Progress bar height | `4px` |
| Sidebar width | `260px` |
| Content panel | `38%` of remaining width |
| Visual panel | `62%` of remaining width |

### Breakpoints

| Name | Range | Layout |
|------|-------|--------|
| Mobile | `< 768px` | Single column, hamburger sidebar, bottom nav |
| Tablet | `768px - 1023px` | Single column, full header |
| Desktop | `>= 1024px` | Sidebar + split panels (38/62) |

### Key Spacing Values

| Context | Mobile | Desktop |
|---------|--------|---------|
| Content padding X | `16px` (p-4) | `32px` (p-8) |
| Content padding Y | `20px` (py-5) | `32px` (py-8) |
| Visual panel padding | `8px` (p-2) | `12px` (p-3) |
| Visual inner padding | `12px` (p-3) | `16px` (p-4) |
| Sidebar item padding | `12px 12px` (px-3 py-2.5) | same |
| Bottom nav height | `60-72px` + safe area | N/A (hidden) |

---

## 5. Effects

### Glow -- Cyan

```css
.glow-cyan {
  box-shadow: 0 0 20px rgba(0,240,255,0.08), 0 0 40px rgba(0,240,255,0.05);
}
```

### Glow -- Accent (dynamic)

```css
.glow-accent {
  box-shadow: 0 0 20px var(--tw-shadow-color, rgba(0,240,255,0.15));
}
```

### Grid Background

```css
.bg-grid {
  background-image: 
    linear-gradient(rgba(63,63,70,0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63,63,70,0.3) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

Usage: Visual panel background at `opacity-40`.

### Noise Texture

```css
.bg-noise::before {
  /* SVG fractalNoise filter at 3% opacity */
  opacity: 0.03;
}
```

### Focus Ring

```css
*:focus-visible {
  outline: 2px solid #00F0FF;
  outline-offset: 2px;
}
```

### Selection

```css
::selection {
  background-color: rgba(0, 240, 255, 0.15);
  color: #F0F0F5;
}
```

### Scrollbar

```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #1E1E2E; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #2A2A3A; }
```

---

## 6. Motion

### Easing

| Name | Value | Usage |
|------|-------|-------|
| Expo out | `cubic-bezier(0.16, 1, 0.3, 1)` | All UI transitions (primary easing) |

### Durations

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | `150ms` | Hover, focus, micro-interactions |
| `duration-normal` | `300ms` | Layout transitions, sidebar |
| `duration-slow` | `500ms` | Slide transitions, visual panel |

### Transition Patterns

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Slide text | fade + translateX(-20px -> 0) | 400ms | expo out |
| Slide visual | fade + scale(0.97 -> 1) | 400ms | expo out |
| Progress bar | width animation + glow | 500ms | expo out |
| Sidebar active | `layoutId` spring | auto | spring |
| Module title (header) | fade + translateY | 300ms | expo out |
| Bullet items | staggered fade + translateX | 100ms + 50ms delay each | expo out |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. UI Components

### Key Message Box

```
Border-left: 2px solid #00F0FF
Background: rgba(0, 240, 255, 0.08)
Text: #00F0FF, font-medium
Padding: 12-16px horizontal, 12-16px vertical
Border-radius: 8px (rounded-lg)
Max-width: 32rem (max-w-lg)
```

### Navigation Buttons (Desktop)

```
Font: monospace, text-sm
Padding: 6px 12px
Border-radius: 6px (rounded-md)
Hover: bg-elevated, text-primary
Disabled: text-ghost, cursor-not-allowed
Icon: ChevronLeft / ChevronRight (lucide), 16px
```

### Focus Toggle Button

```
Font: monospace, text-xs
Border: 1px solid border-subtle
Hover: border-default
Padding: 4px 8px
Border-radius: 4px
```

### Keyboard Hints

```
Tag: <kbd>
Font: monospace
Padding: 2px 6px
Border: 1px solid border-subtle
Background: bg-surface
Color: text-muted
Border-radius: 4px
```

### Sidebar Module Item

```
Height: ~44px (touch-friendly)
Padding: 10px 12px
Active: bg-elevated + 2px left bar in module accent color
Hover: bg-surface
Icon: 16px lucide icon
Module number: 10px monospace bold, text-ghost
Title: text-sm font-medium, truncated
Completed: Check icon (lucide) in emerald
```

### Mobile Bottom Nav

```
Position: fixed bottom, full width
Height: ~60px + safe-area-inset
Background: bg-base with top border
Buttons: 44px min touch target
Center: module name + slide counter
Z-index: 50
```

---

## 8. Iconography

### Library

**Lucide React** -- consistent, clean, 24px grid icons.

### Module Icons

| Module | Lucide Icon | Import |
|--------|-------------|--------|
| IA Generativa | Brain | `Brain` |
| Context Window | Layers | `Layers` |
| Chat vs Agente | Bot | `Bot` |
| Evolucion Contexto | TrendingUp | `TrendingUp` |
| God Agent | AlertTriangle | `AlertTriangle` |
| SDD Orchestrator | GitBranch | `GitBranch` |
| Memoria Persistente | Database | `Database` |
| Skills Registry | Puzzle | `Puzzle` |
| Stack y Bibliotecas | Boxes | `Boxes` |
| Cierre | Target | `Target` |

### Navigation Icons

| Action | Icon |
|--------|------|
| Previous | `ChevronLeft` |
| Next | `ChevronRight` |
| Hamburger menu | `Menu` |
| Close sidebar | `X` |
| Completed module | `Check` |

### Flag Icons

Custom inline SVG components (`FlagIcon.tsx`):

| Country | Code | Usage |
|---------|------|-------|
| Argentina | `AR` | Spanish locale selector |
| USA | `US` | English locale selector |
| Brazil | `BR` | Portuguese (ready, not active) |

Render at `w-8 h-6` (flag aspect ratio 4:3).

---

## 9. Dark Mode

- This is a **dark-only** design system
- No light mode variant exists or is planned
- All colors are optimized for near-black backgrounds
- Contrast ratios maintain WCAG AA for body text
- The aesthetic is "cyberpunk-editorial meets luxury tech brand"

---

## 10. Quick Reference

```
IDENTITY
  Logo:       d(#00F0FF) + Taborda(#F0F0F5) — JetBrains Mono Bold
  Compact:    d(#00F0FF) + T(#F0F0F5)
  Tagline ES: "Rompe el chat. Construi el sistema."
  Tagline EN: "Beyond the prompt."

COLORS
  Primary:    #00F0FF  (electric cyan)
  Secondary:  #FF3366  (hot pink)
  Background: #050508  (near-black blue)
  Surface:    #0A0A0F  (dark navy)
  Elevated:   #14141F  (navy)
  Text:       #F0F0F5  (cool white)
  Text 2:     #8888AA  (lavender grey)
  Border:     #1E1E2E  (dark blue-grey)

FONTS
  Headings:   Inter ExtraBold (800)
  Body:       Inter Regular (400)
  Code:       JetBrains Mono Regular (400)

MOTION
  Easing:     cubic-bezier(0.16, 1, 0.3, 1)
  Fast:       150ms
  Normal:     300ms
  Slow:       500ms

LAYOUT
  Header:     56px
  Sidebar:    260px
  Split:      38% / 62%
  Mobile nav: 60px + safe area
```

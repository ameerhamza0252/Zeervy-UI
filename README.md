# ⚡ Zeervy UI

> Animated component library for modern developers — copy, paste, customize.

**Zeervy UI** is a curated collection of animated, production-ready React/Next.js components built with TypeScript, Tailwind CSS, and Framer Motion.
---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 14** | App Router framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations |
| **Lucide React** | Icons |

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── components/
│   │   ├── page.tsx             # All components browser
│   │   ├── [category]/
│   │   │   ├── page.tsx         # Category page
│   │   │   └── [slug]/page.tsx  # Component detail + code viewer
│   └── support/page.tsx         # Community support page
├── components/
│   ├── layout/                  # Navbar, Footer
│   ├── showcase/                # CodeBlock, ComponentCard
│   └── ui/                      # ZeervyLogo, shared UI
├── data/
│   ├── components.ts            # Component registry (connect to CMS later)
│   └── support.ts               # Support tier data
├── lib/utils.ts                 # Helper functions
└── types/index.ts               # TypeScript types
```

---

Then in your page:
```typescript
// app/components/page.tsx
import { getComponents } from '@/lib/sanity'
const components = await getComponents() // replaces static COMPONENTS array
```

---

## 💳 Payment Integration (Support)

The support page (`/support`) is ready for Stripe integration:

1. Install Stripe: `npm install @stripe/stripe-js stripe`
2. Create `src/app/api/checkout/route.ts`
3. Connect buttons to Stripe Checkout sessions

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--lime` | `#C8FF00` | Primary accent, CTAs |
| `--coral` | `#FF4D6A` | Secondary accent, dots |
| `--dark-900` | `#07080D` | Page background |
| `--dark-800` | `#0D0E16` | Card backgrounds |
| `font-display` | Bebas Neue | Headings |
| `font-body` | DM Sans | Body text |
| `font-mono` | DM Mono | Code, labels |

---
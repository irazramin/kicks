# Kicks

- **Home** — Hero carousel, new drops grid, categories slider, reviews
- **Product detail** — Gallery, options, add to cart, “You may also like” slider
- **Cart** — Items, order summary, suggestion products

---

## Setup

```bash
git clone <repo>
cd folder
npm install
npm run dev
```

Open [https://kicks-ruddy.vercel.app/](https://kicks-ruddy.vercel.app/).

Build: `npm run build` then `npm start`. Lint: `npm run lint`. No env vars required.

---

## Tech stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind 4, Radix/shadcn-style (Skeleton) |
| State | Redux Toolkit (cart), React state |
| Data | Axios, custom hooks (`useProducts`, `useProduct`, `useCategories`) |
| Other | react-slick (carousels), Lucide (icons) |

---

## Folder structure

```
src/
├── app/          — routes & layout
├── components/   — feature UI (hero, new-drops, cart, product-details, …) + shared (skeletons, suggestion-products)
├── hooks/        — useProducts, useProduct, useCategories
├── services/     — API calls
├── store/        — Redux (cart)
├── lib/          — apiClient, utils
└── types/        — Product, Category, Cart
```

Each feature under `components/` has a main component, optional `constants.ts`, and a `components/` subfolder for its pieces. An `index.ts` barrel lets you import from `@/components/new-drops` (or hero, cart, etc.) instead of deep paths.

---

## Live URL

Local: [https://kicks-ruddy.vercel.app/](https://kicks-ruddy.vercel.app/)

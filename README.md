# Pawfecta

Pawfecta is a responsive pet-products storefront built with Next.js. It presents a curated catalogue of grooming, comfort, wellness, travel, and play essentials through a clean, animated shopping experience.

The project includes database-backed products, authentication, and a deliberately simple one-time Stripe Checkout flow.

## Features

- Responsive homepage, shop, contact, success, and cancellation pages
- Products loaded from Supabase
- Clerk sign-in and sign-up
- One-time Stripe Checkout payments
- Stripe success and cancellation routes
- Cloudflare R2-hosted product and homepage media
- Smooth reveal and navigation animations
- Accessible navigation, buttons, focus states, and checkout feedback

## Technology

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- Supabase
- Stripe
- Clerk
- Motion
- Lucide icons

## Intentional project scope

Pawfecta intentionally implements a basic, single-product, one-time payment flow. The following features were deliberately **not added** so the project remains straightforward and easy to understand:

- Add-to-cart functionality
- A persistent shopping cart
- Multi-product or quantity-based checkout
- Stripe webhooks
- Database-backed order creation or fulfilment
- Inventory synchronization
- Subscription payments
- Refund, shipping, tax, or administrative workflows
- Server-side verification of the success page

Selecting **Buy now** creates a Stripe Checkout Session for one product and redirects the customer to Stripe. Stripe then returns the customer to either `/success` or `/cancel`.

The success page is therefore a redirect destination, not a verified payment record. A production commerce application should use Stripe webhooks as the source of truth and persist completed orders on the server.

## Getting started

### Requirements

- Node.js 20 or newer
- npm
- Supabase, Clerk, and Stripe accounts

### Installation

```bash
npm install
```

Create a `.env` file in the project root:

```env
BASE_URL=http://localhost:3000

SUPABASE_URL=
SUPABASE_SECRET_KEY=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

STRIPE_SECRET_KEY=
```

Never commit real secret keys to source control.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Product data

The shop reads its catalogue from the Supabase `products` table. Product records used by the current frontend contain:

| Field | Purpose |
| --- | --- |
| `name` | Product name |
| `category` | Product category label |
| `price` | Display price in US dollars |
| `image` | Key matching an entry in `PRODUCT_MEDIA` |
| `prodId` | Stripe Product ID |
| `priceId` | Stripe Price ID used by Checkout |
| `createdAt` | Product creation timestamp |

The three static products in `src/constants/shop.constants.ts` are used only by the homepage featured-products section. The main shop catalogue comes directly from Supabase.

## Payment flow

1. A customer selects **Buy now** on a product.
2. The server action checks Clerk authentication.
3. Unauthenticated customers are redirected to sign in.
4. Stripe creates a Checkout Session in `payment` mode using the product's `priceId`.
5. Stripe redirects the customer to its hosted checkout.
6. The customer returns to `/success` after checkout or `/cancel` after cancelling.

## Useful commands

```bash
npm run dev     # Start the development server
npm run lint    # Run ESLint
npm run build   # Create a production build
npm run start   # Start the production server
```

## Main project structure

```text
src/
├── app/
│   ├── actions/       # Stripe Checkout server action
│   ├── cancel/        # Cancelled checkout page
│   ├── contact/       # Contact page
│   ├── shop/          # Supabase-backed catalogue
│   ├── success/       # Successful checkout destination
│   └── page.tsx       # Homepage
├── components/
│   ├── homepage/      # Homepage sections
│   ├── motion/        # Shared motion utilities
│   └── UI/            # Navbar, footer, and shared UI
├── constants/         # Site, homepage, media, and featured data
└── lib/               # Supabase, scrolling, and logging utilities
```

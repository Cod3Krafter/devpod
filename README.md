# DevPod — Modern Developer Blog & CMS

A high-performance, SEO-optimized developer blog platform built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Sanity CMS**.

## Features

- Server-side rendering (SSR) and static generation (SSG) with ISR
- Headless CMS integration with Sanity
- Rich text editor with code syntax highlighting
- Responsive design with Tailwind CSS v4
- Dark/Light mode support
- SEO optimized with Next.js Metadata API
- TypeScript for type safety
- Image optimization with Next/Image

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **CMS:** Sanity
- **Deployment:** Vercel
- **Code Quality:** ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Sanity account (free at [sanity.io](https://sanity.io))

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd devpod
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your Sanity credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
devpod/
├── app/                    # Next.js App Router
│   ├── (site)/            # Site routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   ├── blog/             # Blog-specific components
│   └── ui/               # Reusable UI components
├── lib/                   # Utilities and configurations
│   ├── sanity.ts         # Sanity client
│   ├── queries.ts        # GROQ queries
│   └── types.ts          # TypeScript types
├── sanity/                # Sanity CMS configuration
│   └── schemas/          # Content schemas
└── public/                # Static assets
```

## Code Quality

Format code:
```bash
npm run format
```

Check formatting:
```bash
npm run format:check
```

Run linting:
```bash
npm run lint
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The app will automatically deploy on every push to your main branch.

## Development Roadmap

- [x] Phase 1: Project Setup & Configuration
- [ ] Phase 2: Sanity CMS Setup & Schema
- [ ] Phase 3: Home Page & Post Listing
- [ ] Phase 4: Post Detail Page
- [ ] Phase 5: Author Pages
- [ ] Phase 6: Navigation & Dark Mode
- [ ] Phase 7: SEO & Performance Optimization
- [ ] Phase 8: Production Deployment

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT

---

Built with Next.js and Sanity CMS

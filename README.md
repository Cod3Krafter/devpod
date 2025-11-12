# DevPod — Modern Developer Blog & CMS

A high-performance, SEO-optimized developer blog platform built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Sanity CMS**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- ⚡️ **Server-side rendering (SSR)** and **Static Generation (SSG)** with Incremental Static Regeneration (ISR)
- 📝 **Headless CMS** integration with Sanity (with mock data fallback)
- 🎨 **Rich text content** with Portable Text and code syntax highlighting
- 📱 **Fully responsive** design with Tailwind CSS v4
- 🌓 **Dark/Light mode** with next-themes
- 🔍 **SEO optimized** with metadata, Open Graph, structured data (Schema.org)
- 🗺️ **Dynamic sitemap** and robots.txt
- 📱 **PWA ready** with manifest
- 🎯 **Type-safe** with TypeScript
- 🖼️ **Image optimization** with Next/Image
- ♿️ **Accessible** components following WCAG guidelines

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **CMS:** Sanity (headless)
- **Theme:** next-themes
- **Deployment:** Vercel
- **Code Quality:** ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Sanity account (optional - works with mock data)

### Installation

1. **Clone the repository**:
```bash
git clone <your-repo-url>
cd devpod
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
```bash
cp .env.local.example .env.local
```

The app works out of the box with **mock data** for development. To use real Sanity CMS, edit `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here
USE_MOCK_DATA=false  # Set to false for real CMS
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For Sanity setup instructions, see [SANITY_SETUP.md](SANITY_SETUP.md).

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

The production build includes:
- 18 static pages (1 home + 8 posts + 3 authors + 6 special routes)
- Optimized images and assets
- Minified JavaScript and CSS
- Dynamic sitemap and robots.txt

## 📁 Project Structure

```
devpod/
├── app/                         # Next.js App Router
│   ├── author/[slug]/          # Author pages (dynamic route)
│   ├── post/[slug]/            # Blog post pages (dynamic route)
│   ├── studio/[[...tool]]/     # Sanity Studio route
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── manifest.ts             # PWA manifest
│   ├── robots.ts               # robots.txt generation
│   ├── sitemap.ts              # Sitemap generation
│   └── globals.css             # Global styles
├── components/                  # React components
│   ├── layout/                 # Header, Footer, ThemeToggle
│   ├── blog/                   # PostCard, PostGrid, AuthorProfile, etc.
│   ├── seo/                    # Structured data components
│   └── ui/                     # Container, PageHeader
├── lib/                         # Utilities and helpers
│   ├── api.ts                  # Data fetching layer
│   ├── mockData.ts             # Mock blog data
│   ├── mockPostContent.ts      # Rich mock content
│   ├── imageUtils.ts           # Image optimization helpers
│   ├── dateUtils.ts            # Date formatting
│   ├── sanity.ts               # Sanity client config
│   └── types.ts                # TypeScript interfaces
├── sanity/                      # Sanity CMS configuration
│   ├── schemas/                # Content schemas
│   │   ├── post.ts             # Blog post schema
│   │   ├── author.ts           # Author schema
│   │   └── category.ts         # Category schema
│   └── config.ts               # Sanity project config
└── public/                      # Static assets
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

## 🧪 Testing

### Local Testing

Test the production build locally:
```bash
npm run build
npm start
```

### Test Coverage

Key pages to test:
- Home: http://localhost:3000
- Post: http://localhost:3000/post/getting-started-nextjs-14-app-router
- Author: http://localhost:3000/author/sarah-chen
- Sitemap: http://localhost:3000/sitemap.xml
- Robots: http://localhost:3000/robots.txt

## 🚀 Deployment

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/devpod)

### Manual Deployment

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables (see [DEPLOYMENT.md](DEPLOYMENT.md))
4. Deploy!

For detailed deployment instructions, see **[DEPLOYMENT.md](DEPLOYMENT.md)**.

## 📊 Performance

Expected Lighthouse scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

Optimizations included:
- Image optimization with Next/Image
- Font optimization with next/font
- Incremental Static Regeneration (1-hour revalidation)
- Dark mode with no flash
- Minimal JavaScript bundle

## 📋 Development Roadmap

- [x] **Phase 1**: Project Setup & Configuration
- [x] **Phase 2**: Sanity CMS Setup & Schema
- [x] **Phase 3**: Home Page & Post Listing
- [x] **Phase 4**: Post Detail Page with Dynamic Routing
- [x] **Phase 5**: Author Page Implementation
- [x] **Phase 6**: Global Layout, Navigation & Dark Mode
- [x] **Phase 7**: SEO & Performance Optimization
- [x] **Phase 8**: Testing & Deployment to Vercel

**Status**: ✅ Production Ready!

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features
- [Sanity Documentation](https://www.sanity.io/docs) - Sanity CMS guides
- [Tailwind CSS v4](https://tailwindcss.com/docs) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/docs/) - TypeScript handbook

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [Sanity CMS](https://www.sanity.io/)
- Styled with [Tailwind CSS v4](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)
- Mock images from [Unsplash](https://unsplash.com/)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

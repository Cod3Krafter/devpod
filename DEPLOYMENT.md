# Deployment Guide

This guide walks you through deploying DevPod to Vercel.

## Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Your code pushed to a GitHub repository

## Step 1: Prepare Your Repository

Ensure all changes are committed and pushed to GitHub:

```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

## Step 2: Import Project to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings

## Step 3: Configure Environment Variables

In the Vercel dashboard, add these environment variables:

### Required Variables

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_read_token

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app

# Data Source (set to 'false' for production with real Sanity data)
USE_MOCK_DATA=false
```

### Getting Sanity Credentials

If you haven't set up Sanity yet, you have two options:

#### Option A: Use Mock Data (Quick Start)
Set `USE_MOCK_DATA=true` and use placeholder values for Sanity variables. The site will run with demo content.

#### Option B: Set Up Sanity CMS (Recommended)

1. Create a Sanity project:
```bash
npm create sanity@latest -- --project-id devpod-demo --dataset production
```

2. Get your credentials from [sanity.io/manage](https://sanity.io/manage)
3. Create a read token in project settings
4. Update environment variables in Vercel

## Step 4: Deploy

Click "Deploy" in Vercel. The build process will:
- Install dependencies
- Run TypeScript checks
- Generate static pages (SSG)
- Optimize images and assets

Build time: ~30-60 seconds

## Step 5: Verify Deployment

Once deployed, test these critical pages:

- **Home**: `https://your-domain.vercel.app/`
- **Post**: `https://your-domain.vercel.app/post/getting-started-nextjs-14-app-router`
- **Author**: `https://your-domain.vercel.app/author/sarah-chen`
- **SEO**:
  - Sitemap: `https://your-domain.vercel.app/sitemap.xml`
  - Robots: `https://your-domain.vercel.app/robots.txt`
  - Manifest: `https://your-domain.vercel.app/manifest.webmanifest`

## Step 6: Configure Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` to your custom domain

## Step 7: Enable Analytics (Optional)

Vercel provides built-in analytics:

1. Go to Analytics tab in your project
2. Enable Vercel Analytics
3. View real-time performance metrics

## Continuous Deployment

Vercel automatically redeploys when you push to GitHub:

```bash
git add .
git commit -m "Update content"
git push origin main
```

Changes go live in ~1 minute.

## Performance Optimization

### Recommended Settings

1. **ISR (Incremental Static Regeneration)**
   - Already configured (1-hour revalidation)
   - Pages regenerate automatically

2. **Image Optimization**
   - Automatic via Next.js Image component
   - Supports WebP/AVIF formats

3. **Caching**
   - Static assets cached at edge
   - API routes cached with proper headers

### Testing Performance

Use Lighthouse in Chrome DevTools:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit (Mobile or Desktop)

**Expected Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Troubleshooting

### Build Fails

**Issue**: TypeScript errors during build
**Fix**: Run `npm run build` locally to identify issues

**Issue**: Missing environment variables
**Fix**: Verify all variables are set in Vercel dashboard

### Pages Not Updating

**Issue**: Content doesn't update after 1 hour
**Fix**: Check ISR configuration in page files (`export const revalidate = 3600`)

### Images Not Loading

**Issue**: Image optimization errors
**Fix**: Verify `next.config.ts` has correct `remotePatterns`

## Monitoring

### Vercel Dashboard

Monitor your deployment:
- **Deployments**: View build logs
- **Functions**: Monitor serverless function usage
- **Analytics**: Track page views and performance
- **Speed Insights**: Real user metrics

### Setting Up Alerts

1. Go to Project Settings → Notifications
2. Add email/Slack for deployment status
3. Enable build failure alerts

## Rollback

If a deployment has issues:

1. Go to Deployments tab
2. Find the last working deployment
3. Click "..." → "Promote to Production"

## Production Checklist

- [ ] All environment variables configured
- [ ] Custom domain added (if applicable)
- [ ] SSL certificate verified
- [ ] Sitemap accessible
- [ ] Robots.txt configured
- [ ] Structured data validated ([Schema.org validator](https://validator.schema.org/))
- [ ] Performance tested with Lighthouse
- [ ] Test on mobile devices
- [ ] Analytics enabled

## Next Steps

1. **Set Up Sanity Studio** (if using real CMS):
   - Deploy Sanity Studio to manage content
   - Configure CORS in Sanity settings
   - Add your Vercel domain to allowed origins

2. **SEO Optimization**:
   - Submit sitemap to Google Search Console
   - Verify site ownership
   - Monitor search performance

3. **Content Strategy**:
   - Plan regular content updates
   - Set up content workflows
   - Train content editors on Sanity

## Support

For deployment issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Sanity Deployment](https://www.sanity.io/docs/deployment)

---

**Happy Deploying!** 🚀

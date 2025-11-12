# Sanity CMS Setup Guide

This guide will help you set up Sanity CMS for DevPod.

## Option 1: Local Development with Mock Data (Recommended for Quick Start)

The project is configured to work with mock data by default, allowing you to develop without setting up Sanity immediately.

1. Ensure `.env.local` has `USE_MOCK_DATA=true`
2. Run `npm run dev`
3. Start building! All data will come from `lib/mockData.ts`

## Option 2: Connect to Real Sanity CMS

### Step 1: Create a Sanity Account

1. Go to [sanity.io](https://sanity.io) and sign up for a free account
2. Click "Create new project"
3. Choose a project name (e.g., "DevPod")
4. Select a dataset name (use "production")

### Step 2: Get Your Credentials

After creating your project, you'll need:
- **Project ID**: Found in project settings
- **Dataset**: Usually "production"
- **API Token**: Create one in the API settings with Editor permissions

### Step 3: Update Environment Variables

Edit `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your-actual-token
USE_MOCK_DATA=false
```

### Step 4: Deploy Sanity Schema

You have two options to deploy the schema:

#### Option A: Using Sanity CLI (Recommended)

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Initialize Sanity in the project
sanity init --project your-project-id --dataset production

# Deploy the schema
sanity deploy
```

#### Option B: Using Sanity Studio UI

1. Start your Next.js dev server: `npm run dev`
2. Navigate to `http://localhost:3000/studio`
3. Log in with your Sanity credentials
4. The studio will load with your schemas

### Step 5: Add Content

1. Access Sanity Studio at `http://localhost:3000/studio`
2. Create some authors first (required for posts)
3. Create categories
4. Create blog posts

## Schema Overview

### Post Schema
- **Title**: Required string
- **Slug**: Auto-generated from title
- **Excerpt**: Short description (max 200 chars)
- **Main Image**: Featured image with alt text
- **Body**: Rich text with support for:
  - Headings (H1-H4)
  - Text formatting (bold, italic, code)
  - Links
  - Images
  - Code blocks
- **Author**: Reference to author (required)
- **Categories**: Array of category references
- **Published At**: Publication date/time

### Author Schema
- **Name**: Required string
- **Slug**: Auto-generated from name
- **Image**: Avatar/profile picture
- **Bio**: Text description

### Category Schema
- **Title**: Required string
- **Slug**: Auto-generated from title
- **Description**: Optional text

## Switching Between Mock and Real Data

To switch back to mock data:
1. Set `USE_MOCK_DATA=true` in `.env.local`
2. Restart your dev server

To use real Sanity data:
1. Set `USE_MOCK_DATA=false` in `.env.local`
2. Ensure your Sanity credentials are correct
3. Restart your dev server

## Troubleshooting

### "Cannot connect to Sanity"
- Check that your Project ID and Dataset are correct
- Verify your API token has the correct permissions
- Ensure you're using the correct API version

### Studio Not Loading
- Check that `sanity.config.ts` has the correct project ID
- Clear your browser cache
- Check browser console for errors

### Images Not Showing
- Verify images are uploaded in Sanity Studio
- Check that image assets have proper permissions
- For mock data, ensure placeholder URLs are accessible

## Production Deployment

When deploying to Vercel:
1. Add all environment variables in Vercel dashboard
2. Set `USE_MOCK_DATA=false` for production
3. Ensure your Sanity project allows your production domain in CORS settings

## Need Help?

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/sanity-nextjs-guide)

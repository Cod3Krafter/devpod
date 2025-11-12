/**
 * Migration script to import mock data into Sanity CMS
 *
 * Usage:
 *   npx tsx scripts/migrate-mock-data.ts
 *
 * This will create:
 * - 3 authors
 * - 5 categories
 * - 8 blog posts with rich content
 */

import { config } from 'dotenv';
import { createClient } from '@sanity/client';
import { getMockAuthors, getMockCategories, getMockPosts } from '../lib/mockData';

// Load environment variables from .env.local (override existing vars)
config({ path: '.env.local', override: true });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_API_TOKEN || '',
  useCdn: false,
});

// Helper to check if migration token is available
function checkToken() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ Error: SANITY_API_TOKEN is not set in .env.local');
    console.error('');
    console.error('To run this migration:');
    console.error('1. Go to https://sanity.io/manage');
    console.error('2. Select your project');
    console.error('3. Go to API → Tokens');
    console.error('4. Create a token with "Editor" permissions');
    console.error('5. Add it to .env.local as SANITY_API_TOKEN=your_token_here');
    console.error('');
    process.exit(1);
  }
}

// Helper to upload an image URL to Sanity
async function uploadImageFromUrl(imageUrl: string, altText?: string) {
  try {
    // For Unsplash images, we'll create a reference to the external URL
    // In production, you'd want to download and upload these properly
    console.log(`  ℹ️  Skipping image upload: ${imageUrl.substring(0, 50)}...`);
    console.log('     Note: Using mock images. Upload actual images to Sanity manually.');
    return null;
  } catch (error) {
    console.error('  ⚠️  Failed to process image:', error);
    return null;
  }
}

// Convert mock author to Sanity format
async function migrateAuthor(author: any) {
  const sanityAuthor = {
    _type: 'author',
    _id: author._id,
    name: author.name,
    slug: author.slug,
    bio: author.bio,
    // Note: Image upload would go here
  };

  try {
    const result = await client.createOrReplace(sanityAuthor);
    console.log(`✅ Migrated author: ${author.name}`);
    return result;
  } catch (error) {
    console.error(`❌ Failed to migrate author ${author.name}:`, error);
    throw error;
  }
}

// Convert mock category to Sanity format
async function migrateCategory(category: any) {
  const sanityCategory = {
    _type: 'category',
    _id: category._id,
    title: category.title,
    slug: category.slug,
    description: category.description,
  };

  try {
    const result = await client.createOrReplace(sanityCategory);
    console.log(`✅ Migrated category: ${category.title}`);
    return result;
  } catch (error) {
    console.error(`❌ Failed to migrate category ${category.title}:`, error);
    throw error;
  }
}

// Convert mock post to Sanity format
async function migratePost(post: any) {
  // Convert category references
  const categoryRefs = post.categories?.map((cat: any) => ({
    _type: 'reference',
    _ref: cat._id,
    _key: cat._id,
  })) || [];

  const sanityPost = {
    _type: 'post',
    _id: post._id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    body: post.body, // Portable Text content
    author: {
      _type: 'reference',
      _ref: post.author._id,
    },
    categories: categoryRefs,
    publishedAt: post.publishedAt,
    // Note: Main image upload would go here
  };

  try {
    const result = await client.createOrReplace(sanityPost);
    console.log(`✅ Migrated post: ${post.title}`);
    return result;
  } catch (error) {
    console.error(`❌ Failed to migrate post ${post.title}:`, error);
    throw error;
  }
}

// Main migration function
async function migrate() {
  console.log('🚀 Starting migration of mock data to Sanity...\n');

  // Check for token
  checkToken();

  // Check connection
  try {
    await client.fetch('*[_type == "post"][0]');
    console.log('✅ Connected to Sanity project:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
    console.log('');
  } catch (error) {
    console.error('❌ Failed to connect to Sanity:', error);
    process.exit(1);
  }

  try {
    // Step 1: Migrate Authors
    console.log('📝 Step 1: Migrating authors...');
    const authors = getMockAuthors();
    for (const author of authors) {
      await migrateAuthor(author);
    }
    console.log('');

    // Step 2: Migrate Categories
    console.log('📁 Step 2: Migrating categories...');
    const categories = getMockCategories();
    for (const category of categories) {
      await migrateCategory(category);
    }
    console.log('');

    // Step 3: Migrate Posts
    console.log('📰 Step 3: Migrating blog posts...');
    const posts = getMockPosts();
    for (const post of posts) {
      await migratePost(post);
    }
    console.log('');

    console.log('✨ Migration completed successfully!\n');
    console.log('Summary:');
    console.log(`  - ${authors.length} authors migrated`);
    console.log(`  - ${categories.length} categories migrated`);
    console.log(`  - ${posts.length} blog posts migrated`);
    console.log('');
    console.log('🎉 Your Sanity CMS is now populated with content!');
    console.log('');
    console.log('Next steps:');
    console.log('  1. Visit http://localhost:3002/studio to view your content');
    console.log('  2. Update .env.local: Set USE_MOCK_DATA=false');
    console.log('  3. Restart your dev server');
    console.log('  4. Upload actual images in Sanity Studio (currently using placeholders)');
    console.log('');

  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migrate();

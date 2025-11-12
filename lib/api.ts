import { client } from "./sanity";
import {
  postsQuery,
  postBySlugQuery,
  authorBySlugQuery,
  postsByAuthorQuery,
  relatedPostsQuery,
} from "./queries";
import {
  getMockPosts,
  getMockPostBySlug,
  getMockAuthorBySlug,
  getMockPostsByAuthor,
  getMockRelatedPosts,
  getMockAuthors,
} from "./mockData";
import { Post, Author } from "./types";

const USE_MOCK_DATA = process.env.USE_MOCK_DATA === "true";

// Fetch all posts
export async function getPosts(): Promise<Post[]> {
  if (USE_MOCK_DATA) {
    return Promise.resolve(getMockPosts());
  }

  try {
    return await client.fetch(postsQuery);
  } catch (error) {
    console.error("Error fetching posts from Sanity:", error);
    // Fallback to mock data if Sanity fetch fails
    return getMockPosts();
  }
}

// Fetch single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (USE_MOCK_DATA) {
    return Promise.resolve(getMockPostBySlug(slug) || null);
  }

  try {
    return await client.fetch(postBySlugQuery, { slug });
  } catch (error) {
    console.error("Error fetching post from Sanity:", error);
    return getMockPostBySlug(slug) || null;
  }
}

// Fetch all authors
export async function getAuthors(): Promise<Author[]> {
  if (USE_MOCK_DATA) {
    return Promise.resolve(getMockAuthors());
  }

  try {
    return await client.fetch('*[_type == "author"]');
  } catch (error) {
    console.error("Error fetching authors from Sanity:", error);
    return getMockAuthors();
  }
}

// Fetch author by slug
export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  if (USE_MOCK_DATA) {
    return Promise.resolve(getMockAuthorBySlug(slug) || null);
  }

  try {
    return await client.fetch(authorBySlugQuery, { slug });
  } catch (error) {
    console.error("Error fetching author from Sanity:", error);
    return getMockAuthorBySlug(slug) || null;
  }
}

// Fetch posts by author
export async function getPostsByAuthor(authorId: string): Promise<Post[]> {
  if (USE_MOCK_DATA) {
    return Promise.resolve(getMockPostsByAuthor(authorId));
  }

  try {
    return await client.fetch(postsByAuthorQuery, { authorId });
  } catch (error) {
    console.error("Error fetching posts by author from Sanity:", error);
    return getMockPostsByAuthor(authorId);
  }
}

// Fetch related posts
export async function getRelatedPosts(
  slug: string,
  categories: string[]
): Promise<Post[]> {
  if (USE_MOCK_DATA) {
    return Promise.resolve(getMockRelatedPosts(slug, categories));
  }

  try {
    return await client.fetch(relatedPostsQuery, { slug, categories });
  } catch (error) {
    console.error("Error fetching related posts from Sanity:", error);
    return getMockRelatedPosts(slug, categories);
  }
}

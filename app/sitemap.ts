import { MetadataRoute } from "next";
import { getPosts, getAuthors } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devpod.vercel.app";

  // Get all posts and authors
  const posts = await getPosts();
  const authors = await getAuthors();

  // Home page
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  // Post pages
  posts.forEach((post) => {
    routes.push({
      url: `${baseUrl}/post/${post.slug.current}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // Author pages
  authors.forEach((author) => {
    routes.push({
      url: `${baseUrl}/author/${author.slug.current}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    });
  });

  return routes;
}

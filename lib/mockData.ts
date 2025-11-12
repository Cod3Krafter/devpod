import { Post, Author, Category } from "./types";
import { mockPostContentMap } from "./mockPostContent";

// Mock Authors
export const mockAuthors: Author[] = [
  {
    _id: "author-1",
    name: "Sarah Chen",
    slug: { current: "sarah-chen" },
    image: {
      asset: {
        _ref: "image-sarah",
        _type: "reference",
      },
    },
    bio: "Full-stack developer with a passion for building scalable web applications. Specializes in React, Next.js, and Node.js.",
  },
  {
    _id: "author-2",
    name: "Alex Kumar",
    slug: { current: "alex-kumar" },
    image: {
      asset: {
        _ref: "image-alex",
        _type: "reference",
      },
    },
    bio: "DevOps engineer and cloud architecture enthusiast. Loves automation and infrastructure as code.",
  },
  {
    _id: "author-3",
    name: "Maria Rodriguez",
    slug: { current: "maria-rodriguez" },
    image: {
      asset: {
        _ref: "image-maria",
        _type: "reference",
      },
    },
    bio: "UI/UX designer turned frontend developer. Advocates for accessible and beautiful web experiences.",
  },
];

// Mock Categories
export const mockCategories: Category[] = [
  {
    _id: "cat-1",
    title: "Web Development",
    slug: { current: "web-development" },
    description: "Articles about modern web development practices and technologies",
  },
  {
    _id: "cat-2",
    title: "JavaScript",
    slug: { current: "javascript" },
    description: "Deep dives into JavaScript and TypeScript",
  },
  {
    _id: "cat-3",
    title: "DevOps",
    slug: { current: "devops" },
    description: "CI/CD, automation, and infrastructure topics",
  },
  {
    _id: "cat-4",
    title: "React",
    slug: { current: "react" },
    description: "React and Next.js tutorials and best practices",
  },
  {
    _id: "cat-5",
    title: "Performance",
    slug: { current: "performance" },
    description: "Web performance optimization techniques",
  },
];

// Mock Posts
export const mockPosts: Post[] = [
  {
    _id: "post-1",
    _createdAt: "2024-11-01T10:00:00Z",
    title: "Getting Started with Next.js 14 App Router",
    slug: { current: "getting-started-nextjs-14-app-router" },
    excerpt:
      "Learn how to build modern web applications with Next.js 14's powerful App Router, Server Components, and streaming.",
    mainImage: {
      asset: {
        _ref: "image-nextjs",
        _type: "reference",
      },
      alt: "Next.js logo with code editor",
    },
    body: mockPostContentMap["post-1"],
    author: mockAuthors[0],
    categories: [mockCategories[0], mockCategories[3]],
    publishedAt: "2024-11-01T10:00:00Z",
  },
  {
    _id: "post-2",
    _createdAt: "2024-10-28T14:30:00Z",
    title: "TypeScript Best Practices for 2024",
    slug: { current: "typescript-best-practices-2024" },
    excerpt:
      "Discover the latest TypeScript features and patterns that will make your code more type-safe and maintainable.",
    mainImage: {
      asset: {
        _ref: "image-typescript",
        _type: "reference",
      },
      alt: "TypeScript logo",
    },
    body: mockPostContentMap["post-2"],
    author: mockAuthors[0],
    categories: [mockCategories[1], mockCategories[0]],
    publishedAt: "2024-10-28T14:30:00Z",
  },
  {
    _id: "post-3",
    _createdAt: "2024-10-25T09:15:00Z",
    title: "Building a CI/CD Pipeline with GitHub Actions",
    slug: { current: "building-cicd-pipeline-github-actions" },
    excerpt:
      "A comprehensive guide to automating your deployment workflow using GitHub Actions, from testing to production.",
    mainImage: {
      asset: {
        _ref: "image-github-actions",
        _type: "reference",
      },
      alt: "GitHub Actions workflow diagram",
    },
    body: mockPostContentMap["post-3"],
    author: mockAuthors[1],
    categories: [mockCategories[2]],
    publishedAt: "2024-10-25T09:15:00Z",
  },
  {
    _id: "post-4",
    _createdAt: "2024-10-20T16:45:00Z",
    title: "Optimizing React Performance: A Deep Dive",
    slug: { current: "optimizing-react-performance-deep-dive" },
    excerpt:
      "Learn advanced techniques for optimizing React applications, including memoization, lazy loading, and profiling.",
    mainImage: {
      asset: {
        _ref: "image-react-performance",
        _type: "reference",
      },
      alt: "React performance metrics dashboard",
    },
    body: mockPostContentMap["post-4"],
    author: mockAuthors[0],
    categories: [mockCategories[3], mockCategories[4]],
    publishedAt: "2024-10-20T16:45:00Z",
  },
  {
    _id: "post-5",
    _createdAt: "2024-10-15T11:20:00Z",
    title: "Tailwind CSS v4: What's New",
    slug: { current: "tailwind-css-v4-whats-new" },
    excerpt:
      "Explore the exciting new features in Tailwind CSS v4, including improved performance and new utilities.",
    mainImage: {
      asset: {
        _ref: "image-tailwind",
        _type: "reference",
      },
      alt: "Tailwind CSS logo",
    },
    body: mockPostContentMap["post-5"],
    author: mockAuthors[2],
    categories: [mockCategories[0]],
    publishedAt: "2024-10-15T11:20:00Z",
  },
  {
    _id: "post-6",
    _createdAt: "2024-10-10T13:00:00Z",
    title: "Understanding Server Components in React",
    slug: { current: "understanding-server-components-react" },
    excerpt:
      "A practical guide to React Server Components and how they're changing the way we build React applications.",
    mainImage: {
      asset: {
        _ref: "image-react-server",
        _type: "reference",
      },
      alt: "Server and client component diagram",
    },
    body: mockPostContentMap["post-6"],
    author: mockAuthors[0],
    categories: [mockCategories[3], mockCategories[0]],
    publishedAt: "2024-10-10T13:00:00Z",
  },
  {
    _id: "post-7",
    _createdAt: "2024-10-05T15:30:00Z",
    title: "Docker Containerization for Modern Web Apps",
    slug: { current: "docker-containerization-modern-web-apps" },
    excerpt:
      "Learn how to containerize your Next.js application with Docker for consistent deployments across environments.",
    mainImage: {
      asset: {
        _ref: "image-docker",
        _type: "reference",
      },
      alt: "Docker containers illustration",
    },
    body: mockPostContentMap["post-7"],
    author: mockAuthors[1],
    categories: [mockCategories[2]],
    publishedAt: "2024-10-05T15:30:00Z",
  },
  {
    _id: "post-8",
    _createdAt: "2024-09-30T10:45:00Z",
    title: "Web Accessibility: Building Inclusive Experiences",
    slug: { current: "web-accessibility-building-inclusive-experiences" },
    excerpt:
      "Essential accessibility practices every developer should know to create inclusive web experiences for all users.",
    mainImage: {
      asset: {
        _ref: "image-accessibility",
        _type: "reference",
      },
      alt: "Accessibility symbols and icons",
    },
    body: mockPostContentMap["post-8"],
    author: mockAuthors[2],
    categories: [mockCategories[0]],
    publishedAt: "2024-09-30T10:45:00Z",
  },
];

// Helper functions to simulate Sanity queries
export function getMockPosts(): Post[] {
  return mockPosts;
}

export function getMockPostBySlug(slug: string): Post | undefined {
  return mockPosts.find((post) => post.slug.current === slug);
}

export function getMockAuthorBySlug(slug: string): Author | undefined {
  return mockAuthors.find((author) => author.slug.current === slug);
}

export function getMockPostsByAuthor(authorId: string): Post[] {
  return mockPosts.filter((post) => post.author._id === authorId);
}

export function getMockRelatedPosts(
  currentSlug: string,
  categoryIds: string[],
  limit = 3
): Post[] {
  return mockPosts
    .filter(
      (post) =>
        post.slug.current !== currentSlug &&
        post.categories?.some((cat) => categoryIds.includes(cat._id))
    )
    .slice(0, limit);
}

export function getMockAuthors(): Author[] {
  return mockAuthors;
}

export function getMockCategories(): Category[] {
  return mockCategories;
}

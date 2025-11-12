import { Post, Author } from "@/lib/types";

interface BlogPostingStructuredDataProps {
  post: Post;
  url: string;
}

export function BlogPostingStructuredData({
  post,
  url,
}: BlogPostingStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.mainImage
      ? `https://images.unsplash.com/${post.mainImage.asset._ref}`
      : undefined,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: `${url}/author/${post.author.slug.current}`,
    },
    publisher: {
      "@type": "Organization",
      name: "DevPod",
      logo: {
        "@type": "ImageObject",
        url: `${url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface WebsiteStructuredDataProps {
  url: string;
}

export function WebsiteStructuredData({ url }: WebsiteStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DevPod",
    description:
      "A modern developer blog featuring articles about web development, JavaScript, React, Next.js, and frontend technologies.",
    url: url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface PersonStructuredDataProps {
  author: Author;
  url: string;
}

export function PersonStructuredData({ author, url }: PersonStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    description: author.bio,
    url: url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

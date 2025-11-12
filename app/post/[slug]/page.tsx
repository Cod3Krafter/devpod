import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostBySlug, getPosts, getRelatedPosts } from "@/lib/api";
import Container from "@/components/ui/Container";
import PostHeader from "@/components/blog/PostHeader";
import PortableTextContent from "@/components/blog/PortableTextContent";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all posts (SSG)
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const imageUrl = post.mainImage
    ? getOptimizedImageUrl(post.mainImage)
    : undefined;

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: imageUrl ? [{ url: imageUrl, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts based on categories
  const categoryIds = post.categories?.map((cat) => cat._id) || [];
  const relatedPosts = await getRelatedPosts(slug, categoryIds);

  return (
    <div className="bg-white py-12 dark:bg-zinc-950">
      <Container>
        <article className="mx-auto max-w-3xl">
          <PostHeader post={post} />

          <div className="prose prose-zinc max-w-none dark:prose-invert">
            {post.body && <PortableTextContent content={post.body} />}
          </div>

          {post.author.bio && (
            <aside className="mt-12 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-50">
                About {post.author.name}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {post.author.bio}
              </p>
            </aside>
          )}

          <RelatedPosts posts={relatedPosts} />
        </article>
      </Container>
    </div>
  );
}

// Revalidate every hour
export const revalidate = 3600;

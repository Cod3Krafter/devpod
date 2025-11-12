import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getAuthorBySlug,
  getAuthors,
  getPostsByAuthor,
} from "@/lib/api";
import Container from "@/components/ui/Container";
import AuthorProfile from "@/components/blog/AuthorProfile";
import PostGrid from "@/components/blog/PostGrid";
import { PersonStructuredData } from "@/components/seo/StructuredData";

interface AuthorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all authors (SSG)
export async function generateStaticParams() {
  const authors = await getAuthors();
  return authors.map((author) => ({
    slug: author.slug.current,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) {
    return {
      title: "Author Not Found",
    };
  }

  return {
    title: `${author.name} - Author`,
    description:
      author.bio ||
      `Read articles by ${author.name} on web development, JavaScript, and modern frontend technologies.`,
    openGraph: {
      title: `${author.name} - Author`,
      description:
        author.bio ||
        `Read articles by ${author.name} on web development, JavaScript, and modern frontend technologies.`,
      type: "profile",
    },
    twitter: {
      card: "summary",
      title: `${author.name} - Author`,
      description:
        author.bio ||
        `Read articles by ${author.name} on web development, JavaScript, and modern frontend technologies.`,
    },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  // Get all posts by this author
  const posts = await getPostsByAuthor(author._id);

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://devpod.vercel.app";
  const currentUrl = `${baseUrl}/author/${slug}`;

  return (
    <>
      <PersonStructuredData author={author} url={currentUrl} />
      <div className="bg-zinc-50 py-12 dark:bg-zinc-950">
        <Container>
          <AuthorProfile author={author} postCount={posts.length} />

          <div className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <h2 className="mb-8 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Articles by {author.name}
            </h2>
            <PostGrid posts={posts} />
          </div>
        </Container>
      </div>
    </>
  );
}

// Revalidate every hour
export const revalidate = 3600;

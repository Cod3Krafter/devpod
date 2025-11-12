import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/types";
import { formatDateShort } from "@/lib/dateUtils";
import { getThumbnailUrl } from "@/lib/imageUtils";

interface RelatedPostsProps {
  posts: Post[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
      <h2 className="mb-8 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        Related Posts
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const imageUrl = post.mainImage
            ? getThumbnailUrl(post.mainImage)
            : "/placeholder.jpg";

          return (
            <Link
              key={post._id}
              href={`/post/${post.slug.current}`}
              className="group"
            >
              <article className="overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
                <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={imageUrl}
                    alt={post.mainImage?.alt || post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-4">
                  <h3 className="mb-2 line-clamp-2 font-semibold text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-50 dark:group-hover:text-zinc-300">
                    {post.title}
                  </h3>

                  <p className="text-xs text-zinc-500 dark:text-zinc-500">
                    {formatDateShort(post.publishedAt)}
                  </p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

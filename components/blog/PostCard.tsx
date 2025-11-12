import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/types";
import { formatDateShort } from "@/lib/dateUtils";
import { getOptimizedImageUrl, getAvatarUrl } from "@/lib/imageUtils";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const imageUrl = post.mainImage
    ? getOptimizedImageUrl(post.mainImage)
    : "/placeholder.jpg";

  const authorAvatar = post.author?.image
    ? getAvatarUrl(post.author.image, 40)
    : "/avatar-placeholder.jpg";

  return (
    <article className="group overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <Link href={`/post/${post.slug.current}`}>
        <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={imageUrl}
            alt={post.mainImage?.alt || post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="p-6">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {post.categories.slice(0, 2).map((category) => (
              <span
                key={category._id}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <Link href={`/post/${post.slug.current}`}>
          <h2 className="mb-3 text-xl font-bold leading-tight text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300">
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="mb-4 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
          {post.excerpt}
        </p>

        {/* Author & Date */}
        <div className="flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
          <Link
            href={`/author/${post.author.slug.current}`}
            className="flex items-center gap-2 transition-opacity hover:opacity-70"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
              <Image
                src={authorAvatar}
                alt={post.author.name}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {post.author.name}
            </span>
          </Link>

          <time
            dateTime={post.publishedAt}
            className="text-xs text-zinc-500 dark:text-zinc-500"
          >
            {formatDateShort(post.publishedAt)}
          </time>
        </div>
      </div>
    </article>
  );
}

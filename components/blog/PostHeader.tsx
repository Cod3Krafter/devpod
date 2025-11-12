import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/types";
import { formatDate } from "@/lib/dateUtils";
import { getOptimizedImageUrl, getAvatarUrl } from "@/lib/imageUtils";

interface PostHeaderProps {
  post: Post;
}

export default function PostHeader({ post }: PostHeaderProps) {
  const imageUrl = post.mainImage
    ? getOptimizedImageUrl(post.mainImage)
    : "/placeholder.jpg";

  const authorAvatar = post.author?.image
    ? getAvatarUrl(post.author.image, 48)
    : "/avatar-placeholder.jpg";

  return (
    <header className="mb-12">
      {/* Categories */}
      {post.categories && post.categories.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <span
              key={category._id}
              className="rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {category.title}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="mb-8 text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
        {post.excerpt}
      </p>

      {/* Author & Meta */}
      <div className="mb-8 flex items-center gap-4 border-b border-t border-zinc-200 py-4 dark:border-zinc-800">
        <Link
          href={`/author/${post.author.slug.current}`}
          className="flex items-center gap-3 transition-opacity hover:opacity-70"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
            <Image
              src={authorAvatar}
              alt={post.author.name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">
              {post.author.name}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {formatDate(post.publishedAt)}
            </p>
          </div>
        </Link>
      </div>

      {/* Featured Image */}
      {post.mainImage && (
        <div className="relative aspect-video overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={imageUrl}
            alt={post.mainImage.alt || post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )}
    </header>
  );
}

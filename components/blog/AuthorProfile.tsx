import Image from "next/image";
import { Author } from "@/lib/types";
import { getAvatarUrl } from "@/lib/imageUtils";

interface AuthorProfileProps {
  author: Author;
  postCount: number;
}

export default function AuthorProfile({
  author,
  postCount,
}: AuthorProfileProps) {
  const avatarUrl = author.image
    ? getAvatarUrl(author.image, 120)
    : "/avatar-placeholder.jpg";

  return (
    <div className="mb-12 flex flex-col items-center text-center sm:flex-row sm:text-left">
      <div className="relative mb-6 h-32 w-32 flex-shrink-0 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700 sm:mb-0 sm:mr-8">
        <Image
          src={avatarUrl}
          alt={author.name}
          fill
          className="object-cover"
          sizes="128px"
          priority
        />
      </div>

      <div className="flex-1">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {author.name}
        </h1>

        {author.bio && (
          <p className="mb-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {author.bio}
          </p>
        )}

        <div className="flex items-center justify-center gap-6 text-sm text-zinc-500 dark:text-zinc-500 sm:justify-start">
          <span className="flex items-center gap-2">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {postCount} {postCount === 1 ? "article" : "articles"}
          </span>
        </div>
      </div>
    </div>
  );
}

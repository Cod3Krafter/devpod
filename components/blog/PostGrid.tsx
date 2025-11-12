import { Post } from "@/lib/types";
import PostCard from "./PostCard";

interface PostGridProps {
  posts: Post[];
}

export default function PostGrid({ posts }: PostGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            No posts found
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Check back soon for new content!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}

import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white py-20 dark:bg-zinc-950">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="mb-4 text-6xl font-bold text-zinc-900 dark:text-zinc-50">
            404
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
            Post Not Found
          </h2>
          <p className="mb-8 text-zinc-600 dark:text-zinc-400">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </main>
  );
}

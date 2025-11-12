import { getPosts } from "@/lib/api";
import PostGrid from "@/components/blog/PostGrid";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="bg-zinc-50 py-12 dark:bg-zinc-950">
      <Container>
        <PageHeader
          title="DevPod"
          description="Articles about web development, JavaScript, React, and modern frontend technologies."
        />

        <div id="posts">
          <PostGrid posts={posts} />
        </div>
      </Container>
    </div>
  );
}

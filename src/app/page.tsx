import { HydrateClient } from "~/trpc/server";
import { PostInput } from "./_components/post-input";
import { PostList } from "./_components/post-list";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="p-8">
        <PostInput/>
        <PostList/>
      </main>
    </HydrateClient>
  );
}

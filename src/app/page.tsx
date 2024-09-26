
import { useState } from "react";
import { HydrateClient } from "~/trpc/server";
import { PostInput } from "./_components/post-input";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="p-8">
        <PostInput/>
      </main>
    </HydrateClient>
  );
}

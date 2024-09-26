"use client";

import { api } from "~/trpc/react";

export function PostList() {
  const { data, isPending, error } = api.post.allPosts.useQuery();
  // restructuring

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Post List</h1>
      {data.map((post, i) => (
        <div key={i}>{post.content}</div>
      ))}
    </div>
  );
}

// for static content, like a blog post, that won't be changed or updated, you can do server side rendering

// client components cannot be async. 'the browser cannot await promises'
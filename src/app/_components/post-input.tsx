"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
// react, client side

export function PostInput() {
  const [text, setText] = useState("");

  const utils = api.useUtils();
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.allPosts.invalidate();
      // stale query/data: data that has changed, but has not been updated to the user
      // show the newly added post without needing to refresh the page
      // input invalidates the query on the client
    },
  });

  return (
    <div>
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="This is my input" 
        className="border p-4" 
        type="text" 
      />
      <button 
        onClick={() => {
          createPost.mutate({ content: text });
          setText("");
        }} 
        className="bg-black p-4 text-white"
      >
        Submit Post
      </button>
    </div>
  )
}

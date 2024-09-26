"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export function PostInput() {
  const [text, setText] = useState("");

  const createPost = api.post.create.useMutation();

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

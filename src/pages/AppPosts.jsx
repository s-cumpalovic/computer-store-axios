import React, { useEffect, useState } from "react";
import PostsService from "../services/PostsService";

export default function Posts() {
  const [posts, setPosts] = useState();

  const response = PostsService.getAll().then((data) => {});
  const handleGetPosts = async () => {
    const posts = await PostsService.getAll();
    setPosts(posts);
  };

  useEffect(() => {
    handleGetPosts();
  }, []);
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}

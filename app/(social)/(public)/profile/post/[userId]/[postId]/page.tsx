"use client";
import PostCard from "@/components/ui/feed/post/postCard";
import axios from "axios";
import { useEffect, useState } from "react";
axios.defaults.baseURL = "http://localhost:3000";

export default function PostPage({
  params,
}: {
  params: { userId: string; postId: string };
}) {
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    async function getPost() {
      const res = await axios.get(
        `api/user-profile/posts/focus?userId=${params.userId}&postId=${params.postId}`
      );

      setPost(res.data.postList[0]);
    }
    getPost();
  }, [params.postId, params.userId]);
  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-[1fr_7fr_1fr]">
      <div></div>
      <div>
        <PostCard post={post} />
      </div>

      <div></div>
    </div>
  );
}

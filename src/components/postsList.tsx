import { useState, useEffect } from "react";
import { Post } from "../types/postType";
import { getUserPosts } from "../requests/postRequest";
import PostCommentsButton from "./buttons/postCommentsButton";
import useUserId from "../hooks/useUserId";

export default function PostsList() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const userId = useUserId();

  useEffect(() => {
    (async () => {
      const data = await getUserPosts(userId);
      setPosts(data);
    })();
  }, []);

  return (
    <div className="px-4 py-4">
      {posts?.map((post, index) => (
        <div className="my-2" key={index}>
          <div className="flex items-center">
            <div className="mr-4">
              <span className="w-16 text-center block font-bold text-xl px-3 rounded-lg py-2 bg-slate-100">
                {post.id}
              </span>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold">{post.title}</div>
                <PostCommentsButton postId={post.id} />
              </div>
              <div className="text-xs">{post.body}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

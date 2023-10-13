import { useEffect, useState } from "react";
import { Comment } from "../../types/commentType";
import { addPostComment, getPostComments } from "../../requests/commentRequest";
import CommentForm from "../forms/commentForm";
import ModalHeader from "./modalHeader";

export default function CommentsModal({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [loading, toggleLoading] = useState(true);

  const addComment = (comment: Comment) => {
    addPostComment(comment);
  };

  useEffect(() => {
    (async () => {
      const data = await getPostComments(postId);
      toggleLoading(false);
      setComments(data);
    })();
  }, []);

  return (
    <div>
      <ModalHeader text={"Comments"} />
      <div>
        <CommentForm addComment={addComment} />
      </div>
      <div>
        {loading ? (
          <div className="text-center mb-2">
            <div>
              <div>
                <span className="loading loading-dots loading-md"></span>
              </div>
              <div>
                <span className="font-bold text-sm">Loading comments...</span>
              </div>
            </div>
          </div>
        ) : comments ? (
          comments.map((comment, index) => (
            <div key={index} className="my-4 leading-3 max-w-[500px]">
              <div>
                <div className="leading-3">
                  <span className="text-xs opacity-70">{comment.email}</span>
                </div>
                <div>
                  <span className="font-bold text-sm mr-2">{comment.name}</span>
                </div>
                <div>
                  <span className="text-xs">{comment.body}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <span>An error occurred.</span>
          </div>
        )}
      </div>
    </div>
  );
}

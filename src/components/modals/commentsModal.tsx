import { useEffect, useState } from "react";
import { Comment } from "../../types/commentType";
import { getPostComments } from "../../requests/commentRequest";
import ModalHeader from "../chunks/modalHeader";

export default function CommentsModal({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[] | null>(null);
  useEffect(() => {
    (async () => {
      const data = await getPostComments(postId);
      setComments(data);
    })();
  }, []);

  return (
    <div>
      <ModalHeader text={"Comments"} />
      <div className="pt-2">
        {comments
          ? comments.map((comment, index) => (
              <div className="my-4 leading-3 max-w-[500px]">
                <div>
                  <div className="leading-3">
                    <span className="text-xs opacity-70">{comment.email}</span>
                  </div>
                  <div>
                    <span className="font-bold text-sm mr-2">
                      {comment.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs">{comment.body}</span>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

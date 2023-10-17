import { useEffect, useState } from "react";
import {
  AddCommentType,
  Comment,
  EditCommentType,
} from "../../types/commentType";
import {
  addPostComment,
  deletePostComment,
  editPostComment,
  getPostComments,
} from "../../requests/commentRequest";
import CommentForm from "../forms/commentForm";
import ModalHeader from "./modalHeader";
import CommentRow from "../commentRow";
import { CommentFormModeEnum } from "../../enums/commentFormModeEnum";

export default function CommentsModal({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [loading, toggleLoading] = useState(true);
  const [formMode, switchFormMode] = useState(CommentFormModeEnum.ADD);
  const [currentComment, setCurrentComment] = useState<Comment | null>(null);

  const changeFormMode = (
    formMode: CommentFormModeEnum,
    comment: Comment | null = null
  ) => {
    setCurrentComment(comment);
    switchFormMode(formMode);
  };

  const addComment = (comment: Comment) => {
    return addPostComment(comment).then((cmnt) => {
      setComments(prevState => {
        return [cmnt, ...prevState ?? []]
      })
    });
  };

  const deleteComment = (commentId: number) => {
    if (currentComment?.id == commentId)
      changeFormMode(CommentFormModeEnum.ADD);
    
    return deletePostComment(commentId).finally(() =>
      setComments(prevState => {
        return prevState?.filter((comment) => comment.id !== commentId) ?? [];
      })
    );
  };

  const editComment = (comment: Comment) => {
    return editPostComment(comment).then((cmnt) => {
      setComments(prevState => {
        return (
          prevState?.map((c) => {
            if (c.id == cmnt.id) {
              c.body = cmnt.body;
              c.email = cmnt.email;
              c.name = cmnt.name;
            }
            return c;
          }) ?? []
        );
      });
    });
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
        <CommentForm
          changeFormMode={changeFormMode}
          comment={currentComment}
          editComment={editComment}
          addComment={addComment}
          postId={postId}
          formMode={formMode}
        />
      </div>
      <div className="overflow-y-auto mt-2 sm:max-h-[80vh] sm:h-auto h-[calc(100vh-250px)] overflow-hidden">
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
            <CommentRow
              comment={comment}
              key={index}
              deleteComment={deleteComment}
              changeFormMode={changeFormMode}
            />
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

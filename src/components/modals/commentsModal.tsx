import { useEffect, useState } from "react";
import {
  AddCommentType,
  Comment,
  EditCommentType,
} from "../../types/commentType";
import {
  addPostComment,
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
    comment: Comment | null,
    formMode: CommentFormModeEnum
  ) => {
    setCurrentComment(comment);
    switchFormMode(formMode);
  };

  const addComment = (comment: AddCommentType) => {
    return addPostComment(comment).then((cmnt) => {
      setComments([cmnt, ...(comments ?? [])]);
    });
  };

  const deleteComment = (commentId: number) => {
    setComments(comments?.filter((comment) => comment.id !== commentId)  ?? [])
  }

  const editComment = (comment: EditCommentType) => {
    return editPostComment(comment).then((cmnt) => {
      setComments(
        comments?.map((c) => {
          if (c.id == cmnt.id) {
            c.body = cmnt.body;
            c.email = cmnt.email;
            c.name = cmnt.name;
          }
          return c;
        }) ?? []
      );
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

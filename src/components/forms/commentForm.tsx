import { UserContext } from "../../contexts/userContext";
import { useContext, useEffect, useState } from "react";
import { AddCommentType, EditCommentType } from "../../types/commentType";
import { CommentFormModeEnum } from "../../enums/commentFormModeEnum";
import { Comment } from "../../types/commentType";

export default function CommentForm({
  comment,
  editComment,
  addComment,
  postId,
  formMode,
  changeFormMode,
}: {
  comment: Comment | null;
  editComment: Function;
  addComment: Function;
  postId: number;
  formMode: CommentFormModeEnum;
  changeFormMode: Function;
}) {
  const users = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isSending, toggleSending] = useState(false);

  useEffect(() => {
    setDescription(comment?.body ?? "");
    setTitle(comment?.name ?? "");
    setUserEmail(comment?.email ?? "");
  }, [comment]);

  const handleCommentEdit = (commentId: number) => {
    const payload: EditCommentType = {
      id: commentId,
      name: title,
      body: description,
      email: userEmail,
    };

    toggleSending(true);
    editComment(payload).finally(() => toggleSending(false));
  };

  const handleCommentCreation = () => {
    const payload: AddCommentType = {
      postId: postId,
      name: title,
      body: description,
      email: userEmail,
    };

    toggleSending(true);
    addComment(payload).finally(() => toggleSending(false));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userEmail === "") return;

    switch (formMode) {
      case CommentFormModeEnum.ADD:
        handleCommentCreation();
        break;
      case CommentFormModeEnum.EDIT:
        comment && handleCommentEdit(comment.id);
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="join w-full">
          {formMode === CommentFormModeEnum.ADD ? (
            <select
              className="select select-sm select-bordered join-item"
              onChange={(e) => setUserEmail(e.target.value)}
              defaultValue={0}
            >
              <option disabled value={0}>
                Select user
              </option>
              {users
                ? users.map((user, index) => (
                    <option key={index} value={user.email}>
                      {user.email}
                    </option>
                  ))
                : null}
            </select>
          ) : (
            <input
              className="input font-bold input-sm input-bordered join-item"
              value={comment?.email}
              disabled={true}
            />
          )}

          <div className="w-full">
            <div>
              <input
                className="input w-full input-sm input-bordered join-item"
                placeholder="Type comment title here..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <textarea
          className="textarea w-full textarea-bordered leading-5"
          placeholder="Type your comment here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mt-2 flex justify-end">
        <div>
          {formMode === CommentFormModeEnum.EDIT ? (
            <button
              onClick={() => changeFormMode(null, CommentFormModeEnum.ADD)}
              className="btn btn-sm mr-1"
            >
              Exit edit mode
            </button>
          ) : null}
          <button
            disabled={isSending ? true : false}
            className="btn btn-sm btn-neutral"
          >
            {isSending ? (
              <>
                <span className="loading loading-spinner"></span>
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

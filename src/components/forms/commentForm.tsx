import { UserContext } from "../../contexts/userContext";
import { useContext, useEffect, useState } from "react";
import { AddCommentType, EditCommentType } from "../../types/commentType";
import { CommentFormModeEnum } from "../../enums/commentFormModeEnum";
import { Comment } from "../../types/commentType";
import { AddCommentFormType } from "../../types/forms/formTypes";
import { toast } from "react-toastify";

type CommentFormProps = {
  comment: Comment | null;
  editComment: Function;
  addComment: Function;
  postId: number;
  formMode: CommentFormModeEnum;
  changeFormMode: Function;
};

export default function CommentForm({
  comment,
  editComment,
  addComment,
  postId,
  formMode,
  changeFormMode,
}: CommentFormProps) {
  const users = useContext(UserContext);
  const [isSending, toggleSending] = useState(false);
  const [formData, setFormData] = useState<AddCommentFormType>({
    description: "",
    title: "",
    email: "",
  });

  useEffect(() => {
    setFormData({
      description: comment?.body ?? null,
      title: comment?.name ?? null,
      email: comment?.email ?? null,
    });
  }, [comment]);

  const handleFormInput = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email === null) return;

    const payload: Comment = {
      id: comment?.id ?? 0,
      postId: postId,
      name: formData.title ?? "",
      body: formData.description ?? "",
      email: formData.email ?? "",
    };

    toggleSending(true);
    switch (formMode) {
      case CommentFormModeEnum.ADD:
        addComment(payload).finally(() => toggleSending(false));
        break;
      case CommentFormModeEnum.EDIT:
        editComment(payload)
          .catch(() => {
            toast.error("An error occured !", {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          })
          .finally(() => toggleSending(false));
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="join w-full">
          {formMode === CommentFormModeEnum.ADD ? (
            <select
              name="email"
              className="select select-sm select-bordered join-item"
              onChange={handleFormInput}
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
                name="title"
                className="input w-full input-sm input-bordered join-item"
                placeholder="Type comment title here..."
                value={formData.title ?? ""}
                onChange={handleFormInput}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <textarea
          name="description"
          className="textarea w-full textarea-bordered leading-5"
          placeholder="Type your comment here..."
          value={formData.description ?? ""}
          onChange={handleFormInput}
        ></textarea>
      </div>
      <div className="mt-2 flex justify-end">
        <div>
          {formMode === CommentFormModeEnum.EDIT ? (
            <button
              onClick={() => changeFormMode(CommentFormModeEnum.ADD)}
              className="btn btn-sm mr-1"
            >
              Exit edit mode
            </button>
          ) : null}
          <button
            disabled={isSending ? true : false}
            className="btn btn-sm btn-neutral mr-1"
          >
            {isSending ? (
              <>
                <span className="loading loading-spinner loading-xs"></span>
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

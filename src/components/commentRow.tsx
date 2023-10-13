import { CommentFormModeEnum } from "../enums/commentFormModeEnum";
import { Comment } from "../types/commentType";

export default function CommentRow({
  comment,
  changeFormMode,
  deleteComment,
}: {
  comment: Comment;
  changeFormMode: Function;
  deleteComment: Function;
}) {
  return (
    <div className="my-4 leading-3 max-w-[500px]">
      <div>
        <div className="flex justify-between items-center">
          <div>
            <div className="leading-3">
              <span className="text-xs opacity-70">{comment.email}</span>
            </div>
            <div>
              <span className="font-bold text-sm mr-2">{comment.name}</span>
            </div>
          </div>
          <div>
            <div className="flex">
              <button
                onClick={() =>
                  changeFormMode(comment, CommentFormModeEnum.EDIT)
                }
                className="btn btn-xs mr-1"
              >
                <i className="fas fa-pen"></i>
              </button>
              <button
                onClick={() => deleteComment(comment.id)}
                className="btn btn-xs btn-error"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <div>
          <span className="text-xs">{comment.body}</span>
        </div>
      </div>
    </div>
  );
}

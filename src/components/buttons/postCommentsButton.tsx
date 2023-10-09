import { useState } from "react";
import ModalBody from "../modals/modalBody";
import CommentsModal from "../modals/commentsModal";

export default function PostCommentsButton({postId}: {postId: number}) {
  const [open, toggleOpen] = useState(false);

  return (
    <>
      <button onClick={() => toggleOpen(true)} className="btn btn-xs">
        <i className="fas fa-comment"></i>
      </button>
      <ModalBody open={open} toggle={toggleOpen}>
        <CommentsModal postId={postId}/>
      </ModalBody>
    </>
  );
}

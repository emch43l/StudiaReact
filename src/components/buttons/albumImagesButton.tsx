import { useState } from "react";
import ModalBody from "../modals/modalBody";
import ImagesModal from "../modals/imagesModal";

export default function AlbumImagesButton({ albumId }: { albumId: number }) {
  const [open, toggleOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => toggleOpen(true)}
        className="btn btn-xs btn-neutral"
      >
        View
      </button>
      <ModalBody open={open} toggle={toggleOpen}>
        <ImagesModal albumId={albumId} />
      </ModalBody>
    </>
  );
}

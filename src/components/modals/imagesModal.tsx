import { useState, useEffect } from "react";
import { Photo } from "../../types/photoType";
import { getAlbumPhotos } from "../../requests/photoRequest";
import ImageTile from "../imageTile";
import ModalHeader from "./modalHeader";

export default function ImagesModal({ albumId }: { albumId: number }) {
  const [images, setImages] = useState<Photo[] | null>(null);
  useEffect(() => {
    (async () => {
      const data = await getAlbumPhotos(albumId);
      setImages(data);
    })();
  }, []);

  return (
    <div>
      <ModalHeader text={"Images"} />
      <div>
        <div className="grid grid-cols-5 max-h-[80vh] overflow-y-auto overscroll-contain overflow-x-hidden">
          {images
            ? images.map((image, index) => (
                <ImageTile key={index} image={image} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

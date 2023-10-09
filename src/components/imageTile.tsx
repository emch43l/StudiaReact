import { Photo } from "../types/photoType";
import { useState } from "react";

export default function ImageTile({ image }: { image: Photo }) {
  const [loading, toggleLoading] = useState(true);
  const [error, toggleError] = useState(false);

  const throwError = () => {
    toggleLoading(false);
    toggleError(true);
  };

  return (
    <div className="w-24 h-24 relative mx-1 my-0.5 rounded-md overflow-hidden">
      {loading ? (
        <div className="flex justify-center items-center w-full h-full inset-0">
          <div className="loading loading-ring loading-md"></div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center w-full h-full inset-0">
          <div className="text-center leading-3 text-red-500">
            <div>
              <i className="fas fa-times"></i>
            </div>
            <span className="text-sm font-bold">ERROR</span>
          </div>
        </div>
      ) : null}
      {error ? null : (
        <img
          src={image.url}
          onLoad={() => toggleLoading(false)}
          onError={throwError}
        />
      )}
    </div>
  );
}

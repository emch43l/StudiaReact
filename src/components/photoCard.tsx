import React, { useEffect, useState } from "react";
import { Photo } from "../types/photoType";
import { type } from "os";

export default function PhotoCard({ photo }: { photo: Photo }) {
  const [isLoading, setLoading] = useState(true);

  const imageLoaded = () => {
    setLoading(false);
  };

  return (
    <div className="card w-56 bg-base-100 shadow-xl">
      <figure>
        {isLoading ? (
          <span className="loading loading-ring loading-lg"></span>
        ) : null}
        <img src={photo.url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{photo.title}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

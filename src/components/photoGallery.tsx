import React, { useEffect, useState } from "react";
import { Photo } from "../types/photoType";
import PhotoCard from "./photoCard";

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  return (
    <div className="flex flex-wrap">
      {photos.map((photo, index) => (
        <PhotoCard photo={photo} key={index} />
      ))}
    </div>
  );
}

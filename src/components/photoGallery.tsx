import React, { useEffect, useState } from 'react';
import { Photo } from "../types/photoType"
import PhotoCard from "./photoCard"

export default function PhotoGallery({photos} : {photos : Photo[]}) {
    return (
        <div>
            {photos.map(photo => 
                <PhotoCard photo={photo}/>    
            )}
        </div>
    )
}
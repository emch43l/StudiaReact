import React, { useEffect, useState } from 'react';
import { Photo } from '../types/photoType';
import { type } from 'os';

export default function PhotoCard({photo} : {photo : Photo}) {

    const [isLoading,setLoading] = useState(true);

    const imageLoaded = () => {
        setLoading(false);
    }

    return (
        <div>
            <div>
                { 
                    isLoading ?
                    <span>Image is loading...</span> : null
                }
                <img loading='lazy' onLoad={imageLoaded} src={photo.url}/>
            </div>
            <div>
                <span>
                    {photo.title}
                </span>
            </div>
        </div>
    );
}
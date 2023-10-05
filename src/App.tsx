import React, { useEffect, useState } from "react";
import { getPosts } from "./requests/postRequest";
import { getPhotos } from "./requests/photoRequest";
import { Post } from "./types/postType";
import { Photo } from "./types/photoType";
import PhotoGallery from "./components/photoGallery";
import './index.css';

function App() {
  const [data, setData] = useState<Photo[] | null>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const posts = await getPhotos();
        setLoading(false);
        setData(posts);
      } catch {
        setLoading(false);
        console.error("Error while fetching data !");
      }
    })();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading data...</div>
      ) : data ? (
        <PhotoGallery photos={data} />
      ) : null}
    </div>
  );
}

export default App;

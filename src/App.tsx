import React, { useEffect, useState } from "react";
import { getPosts } from "./requests/postRequest";
import { getPhotos } from "./requests/photoRequest";
import { Post } from "./types/postType";
import { Photo } from "./types/photoType";
import PhotoGallery from "./components/photoGallery";
import './index.css';
import Mian from "./pages/main";

function App() {

  return (
    <div className="relative h-100 w-100">
     <Mian/>
    </div>
  );
}

export default App;

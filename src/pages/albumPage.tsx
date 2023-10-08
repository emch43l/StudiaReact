import { useEffect, useState } from "react";
import MainCard from "../components/mainCard";
import { Album } from "../types/albumType";
import { getUserAlbums } from "../requests/albumRequest";
import { useParams } from "react-router-dom";
import AlbumPill from "../components/albumPill";
import MainCardHeader from "../components/mainCardHeader";

export default function AlbumPage() {
  const [albums, setAlbums] = useState<Album[] | null>(null);
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    (async () => {
      const id = parseInt(userId === undefined ? "0" : userId);
      const data = await getUserAlbums(id);
      setAlbums(data);
    })();
  }, []);

  return (
    <MainCard>
      <MainCardHeader isSubPage={true} text={"Albums"}/>
      <div>
        <div className="flex flex-wrap justify-center">
          {albums
            ? albums.map((album, index) => (
                <AlbumPill key={index} album={album} />
              ))
            : null}
        </div>
      </div>
    </MainCard>
  );
}

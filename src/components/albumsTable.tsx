import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserAlbums } from "../requests/albumRequest";
import { Album } from "../types/albumType";
import AlbumImagesButton from "./buttons/albumImagesButton";

export default function AlbumsTable() {
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
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {albums
            ? albums.map((album, index) => (
                <tr key={index}>
                  <td>{album.id.toString()}</td>
                  <td>{album.title}</td>
                  <td>
                    <AlbumImagesButton albumId={album.id}/>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

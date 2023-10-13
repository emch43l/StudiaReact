import { Album } from "../types/albumType";

export default function AlbumPill({ album }: { album: Album }) {
  return (
    <div className="shadow-xl w-32 rounded-md bg-slate-200 mx-2 my-2">
      <div>
        <span className="font-bold text-sm text-center">{album.title}</span>
      </div>
      <div className="w-full">
        <button className="btn btn-sm">View images</button>
      </div>
    </div>
  );
}

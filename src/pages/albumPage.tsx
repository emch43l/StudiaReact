import MainCard from "../components/mainCard";
import MainCardHeader from "../components/mainCardHeader";
import AlbumsTable from "../components/albumsTable";

export default function AlbumPage() {
  return (
    <MainCard>
      <MainCardHeader isSubPage={true} text={"Albums"} />
      <AlbumsTable />
    </MainCard>
  );
}

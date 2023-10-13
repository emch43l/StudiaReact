import MainCard from "../components/mainCard";
import UsersTable from "../components/usersTable";
import MainCardHeader from "../components/mainCardHeader";
import "./landingPage";

export default function LandingPage() {
  return (
    <MainCard>
      <MainCardHeader isSubPage={false} text={"Users"} />
      <UsersTable />
    </MainCard>
  );
}

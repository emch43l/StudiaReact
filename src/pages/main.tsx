import UsersTable from "../components/usersTable";
import './main';

export default function Mian() {
  return (
    <div className="flex justify-center pt-12">
      <div className="bg-slate-50 rounded-xl overflow-hidden shadow-lg">
        <div>
            <h1 className="text-xl font-bold px-4 py-3">Users</h1>
        </div>
        <UsersTable />
      </div>
    </div>
  );
}

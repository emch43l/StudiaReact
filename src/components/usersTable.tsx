import { useContext } from "react";
import { Link } from "react-router-dom";
import UserInfoButton from "./buttons/userInfoButton";
import { UserContext } from "../contexts/userContext";

export default function UsersTable() {
  const users = useContext(UserContext);

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users
            ? users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id.toString()}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className="join">
                      <UserInfoButton user={user} />
                      <Link
                        to={`user/${user.id}/albums`}
                        className="btn btn-xs btn-active btn-neutral join-item"
                      >
                        <i className="fas fa-images"></i>
                      </Link>
                      <Link
                        to={`user/${user.id}/posts`}
                        className="btn btn-xs btn-active btn-ghost join-item"
                      >
                        <i className="fas fa-comment-alt"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

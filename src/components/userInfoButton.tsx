import { useState } from "react";
import { User } from "../types/userType";
import UserInfoModal from "./userInfoModal";

export default function UserInfoButton({ user }: { user: User }) {
  const [open, toggleOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => toggleOpen(true)}
        className="btn btn-xs btn-active btn-ghost join-item"
      >
        <i className="fas fa-info-circle"></i>
      </button>
      <UserInfoModal user={user} open={open} toggle={toggleOpen} />
    </>
  );
}

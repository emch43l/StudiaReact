import { User } from "../types/userType";
import { createPortal } from "react-dom";
import { useRef } from "react";
import UserAddressMap from "./userAddressMap";

export default function UserInfoModal({
  user,
  open,
  toggle,
}: {
  user: User;
  open: boolean;
  toggle: Function;
}) {
  const closeArea = useRef(null);
  const closeModal = (e: React.MouseEvent) => {
    if (e.target == closeArea.current) {
      toggle(false);
    }
  };

  return createPortal(
    open ? (
      <div
        onClick={(e) => closeModal(e)}
        ref={closeArea}
        className="z-10 absolute inset-0 flex justify-center items-start pt-8 bg-black/30"
      >
        <div className="bg-slate-50 p-3 rounded-xl relative">
          <div className="absolute right-5 top-3 text-lg">
            <button onClick={() => toggle(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div>
            <div>
              <h1 className="text-xl font-bold py-2">About</h1>
            </div>
            <div>
              <div className="my-3">
                <div className="mb-1">
                  <h1 className="text-sm font-semibold">Basic information</h1>
                </div>
                <div>
                  <span className="text-xs pr-3">Name:</span>
                  <span className="text-sm">{user.name}</span>
                </div>
                <div>
                  <span className="text-xs pr-3">Username:</span>
                  <span className="text-sm">{user.username}</span>
                </div>
                <div>
                  <span className="text-xs pr-3">Email:</span>
                  <span className="text-sm">{user.email}</span>
                </div>
              </div>
              <div className="my-3">
                <div className="mb-1">
                  <h1 className="text-sm font-semibold">Address</h1>
                </div>
                <div>
                  <span className="text-xs pr-3">Street:</span>
                  <span className="text-sm">{user.address.street}</span>
                </div>
                <div>
                  <span className="text-xs pr-3">Suite:</span>
                  <span className="text-sm">{user.address.suite}</span>
                </div>
                <div>
                  <span className="text-xs pr-3">City:</span>
                  <span className="text-sm">{user.address.city}</span>
                </div>
                <div>
                  <span className="text-xs pr-3">Zip Code:</span>
                  <span className="text-sm">{user.address.zipcode}</span>
                </div>
                <div>
                  <UserAddressMap lat={user.address.geo.lat} lng={user.address.geo.lng}/>
                </div>
              </div>
              <div className="my-3">
                <div className="mb-1">
                  <h1 className="text-sm font-semibold">Company</h1>
                </div>
                <div>
                  <span className="text-xs pr-3">Name:</span>
                  <span className="text-sm">{user.company.name}</span>
                </div>
                <div>
                  <span className="text-xs pr-3">Catch Phrase:</span>
                  <span className="text-sm">{user.company.catchPhrase}</span>
                </div>
                <div>
                  <span className="text-xs pr-3">Bs:</span>
                  <span className="text-sm">{user.company.bs}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null,
    document.getElementById("modal-root") as HTMLElement
  );
}

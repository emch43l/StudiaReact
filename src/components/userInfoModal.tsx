import { User } from "../types/userType";
import { createPortal } from "react-dom";
import { useRef } from "react";
import UserAddressMap from "./userAddressMap";
import UserInfoModalRowChunk from "./chunks/userInfoModalRowChunk";

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
    if (e.target == closeArea?.current) {
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
                <UserInfoModalRowChunk val1={"Name:"} val2={user.name}/>
                <UserInfoModalRowChunk val1={"Username:"} val2={user.username}/>
                <UserInfoModalRowChunk val1={"Email:"} val2={user.email}/>
              </div>
              <div className="my-3">
                <div className="mb-1">
                  <h1 className="text-sm font-semibold">Address</h1>
                </div>
                <UserInfoModalRowChunk val1={"Street:"} val2={user.address.street}/>
                <UserInfoModalRowChunk val1={"Suite:"} val2={user.address.suite}/>
                <UserInfoModalRowChunk val1={"City:"} val2={user.address.city}/>
                <UserInfoModalRowChunk val1={"Zip Code:"} val2={user.address.zipcode}/>
                <div>
                  <UserAddressMap lat={user.address.geo.lat} lng={user.address.geo.lng}/>
                </div>
              </div>
              <div className="my-3">
                <div className="mb-1">
                  <h1 className="text-sm font-semibold">Company</h1>
                </div>
                <UserInfoModalRowChunk val1={"Name:"} val2={user.company.name}/>
                <UserInfoModalRowChunk val1={"Catch Phrase:"} val2={user.company.catchPhrase}/>
                <UserInfoModalRowChunk val1={"Bs:"} val2={user.company.bs}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null,
    document.getElementById("modal-root") as HTMLElement
  );
}

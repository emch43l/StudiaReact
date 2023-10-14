import { User } from "../../types/userType";
import { createPortal } from "react-dom";
import { useRef } from "react";
import UserAddressMap from "../userAddressMap";
import UserInfoModalRowChunk from "./userInfoModalRow";
import ModalHeader from "./modalHeader";

export default function UserInfoModal({ user }: { user: User }) {
  return (
    <div>
      <ModalHeader text={"About"} />
      <div>
        <div className="my-3">
          <div className="mb-1">
            <h1 className="text-sm font-semibold">Basic information</h1>
          </div>
          <UserInfoModalRowChunk val1={"Name:"} val2={user.name} />
          <UserInfoModalRowChunk val1={"Username:"} val2={user.username} />
          <UserInfoModalRowChunk val1={"Email:"} val2={user.email} />
        </div>
        <div className="my-3">
          <div className="mb-1">
            <h1 className="text-sm font-semibold">Address</h1>
          </div>
          <UserInfoModalRowChunk val1={"Street:"} val2={user.address.street} />
          <UserInfoModalRowChunk val1={"Suite:"} val2={user.address.suite} />
          <UserInfoModalRowChunk val1={"City:"} val2={user.address.city} />
          <UserInfoModalRowChunk
            val1={"Zip Code:"}
            val2={user.address.zipcode}
          />
          <div>
            <UserAddressMap
              lat={user.address.geo.lat}
              lng={user.address.geo.lng}
            />
          </div>
        </div>
        <div className="my-3">
          <div className="mb-1">
            <h1 className="text-sm font-semibold">Company</h1>
          </div>
          <UserInfoModalRowChunk val1={"Name:"} val2={user.company.name} />
          <UserInfoModalRowChunk
            val1={"Catch Phrase:"}
            val2={user.company.catchPhrase}
          />
          <UserInfoModalRowChunk val1={"Bs:"} val2={user.company.bs} />
        </div>
      </div>
    </div>
  );
}

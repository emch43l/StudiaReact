import React from "react";
import { Map, Marker } from "pigeon-maps";

export default function UserAddressMap({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) {
  // lat lng is hardcoded
  // because jsonplaceholder does not provide valid map coordinates
  return (
    <Map height={200} defaultCenter={[34.052235, -118.243683]} defaultZoom={10}>
      <Marker width={50} anchor={[34.052235, -118.243683]} />
    </Map>
  );
}

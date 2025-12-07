import { Marker, Popup } from "react-leaflet";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Balloon({pos}) {
  // console.log("balloon pos:", pos);
  return(
    <>
    <Marker position={[pos[0], pos[1]]}>
        <Popup>
          <p>exampleuser</p>
        </Popup>
      </Marker>
    </>
  );
}
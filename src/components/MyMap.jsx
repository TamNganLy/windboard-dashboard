import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Balloon from "./Balloon";

export default function MyMap({ balloons }) {
  return (
    <MapContainer
      center={[35.56, -110.17]}
      zoom={3}
      scrollWheelZoom={true}
      style={{ height: "80vh", width: "75vw" }}
      maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png"
        attribution="&copy; Stadia Maps"
        noWrap={true}
        bounds={[
          [-90, -180],
          [90, 180],
        ]}
      />
      {balloons && balloons.length !== 0
        ? balloons.map((balloon, i) => <Balloon key={i} pos={balloon} />)
        : null}
    </MapContainer>
  );
}

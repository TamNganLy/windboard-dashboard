import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Balloon from "./Balloon";

export default function MyMap({ balloons }) {
  return (
    <MapContainer
      center={[35.56, -110.17]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: "75vh", width: "75vw" }}
      maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
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

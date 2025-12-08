import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Balloon from "./Balloon";

export default function MyMap({ balloons }) {
  // if (balloons.length === 0) return <p>Loading map...</p>;

  // console.log(balloons);
  // const center_point = balloons[0];
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
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        noWrap={true}
        bounds={[
          [-90, -180],
          [90, 180],
        ]}
      />
      {balloons.length !== 0
        ? balloons.map((balloon, i) => <Balloon key={i} pos={balloon} />)
        : null}
    </MapContainer>
  );
}

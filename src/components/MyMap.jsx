import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Balloon from "./Balloon";


export default function MyMap({balloons}) {
  if (balloons.length === 0) return <p>Loading map...</p>;

  // console.log(balloons);
  const center_point = balloons[0];
  return (
    <MapContainer
      center={[center_point[0], center_point[1]]}
      zoom={1}
      scrollWheelZoom={true}
      style={{ height: "75vh", width: "75vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {balloons.map((balloon, i) => {
        // console.log(balloon);
        return <Balloon key={i} pos={balloon}/>;
      })}
      {/* <Balloon lat={balloons[0]} lon={balloons[1]}/> */}
      
      
    </MapContainer>
  );
}

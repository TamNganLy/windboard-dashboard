import { Marker } from "react-leaflet";
import L from "leaflet";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon from "/icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import MyPopup from "./MyPopup";
import { useEffect, useState } from "react";
import { fetchWeather } from "../http";

const customIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [20, 28],
  iconAnchor: [10, 28],
  popupAnchor: [0, -28],
  shadowUrl: markerShadow,
  shadowSize: [41, 41],
  shadowAnchor: [13, 41],
});

// L.Marker.prototype.options.icon = customIcon;

export default function Balloon({ pos }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      const result = await fetchWeather(pos[0], pos[1]);
      // console.log(lat, lon, result);

      setWeather(result);
    }
    fetchWeatherData();
  }, [pos]);

  // console.log("balloon pos:", pos);
  return (
    <>
      {weather && (
        <Marker icon={customIcon} position={[pos[0], pos[1]]}>
          <MyPopup weather={weather} />
        </Marker>
      )}
      {/* <Marker icon={customIcon} position={[pos[0], pos[1]]}>
        <MyPopup lat={pos[0]} lon={pos[1]} />
      </Marker> */}
    </>
  );
}

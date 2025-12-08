import { Marker } from "react-leaflet";
import L from "leaflet";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon from "/icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import MyPopup from "./MyPopup";
import { useState } from "react";
import { fetchBalloon } from "../http";

const customIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [20, 28],
  iconAnchor: [10, 28],
  popupAnchor: [0, -28],
  shadowUrl: markerShadow,
  shadowSize: [41, 41],
  shadowAnchor: [13, 41],
});

export default function Balloon({ pos }) {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [fetching, setFetching] = useState(false);

  async function handlePopupOpen() {
    if (!weather && !fetching) {
      setFetching(true);
      try {
        const result = await fetchBalloon(pos[0], pos[1]);
        setWeather(result.weather);
        setLocation(result.location);
      } catch (err) {
        console.warn("Failed to fetch data for balloon:", err);
      }
      setFetching(false);
    }
  }

  return (
    <>
      <Marker
        icon={customIcon}
        position={[pos[0], pos[1]]}
        eventHandlers={{ popupopen: handlePopupOpen }}
      >
        <MyPopup fetching={fetching} weather={weather} location={location} />
      </Marker>
    </>
  );
}

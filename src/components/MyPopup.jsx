import { Popup } from "react-leaflet";
// import { useEffect, useState } from "react";
// import { fetchWeather } from "../http";

export default function MyPopup({ weather }) {
  // const [weather, setWeather] = useState(null);

  // useEffect(() => {
  //   async function fetchWeatherData() {
  //     const result = await fetchWeather(lat, lon);
  //     // console.log(lat, lon, result);

  //     setWeather(result);
  //   }
  //   fetchWeatherData();
  // }, [lat, lon]);

  return (
    <Popup>
      <p>Temperature: {weather.temperature}</p>
          <p>Wind speed: {weather.windspeed}</p>
          <p>Wind direction: {weather.winddirection}</p>
          <p>Weather code: {weather.weathercode}</p>
          <p>Day/night: {weather.is_day}</p>
      {/* <p>Weather</p>
      {weather && (
        <>
          <p>Temperature: {weather.temperature}</p>
          <p>Wind speed: {weather.windspeed}</p>
          <p>Wind direction: {weather.winddirection}</p>
          <p>Weather code: {weather.weathercode}</p>
          <p>Day/night: {weather.is_day}</p>
        </>
      )}
      {!weather && (
        <p>Loading weather ...</p>
      )} */}
    </Popup>
  );
}

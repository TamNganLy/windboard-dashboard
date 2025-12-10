import { Popup } from "react-leaflet";

export default function MyPopup({ fetching, weather, location }) {
  return (
    <Popup className={"my-pop-up"}>
      {fetching && <p>Fetching data ...</p>}

      {!fetching && weather && (
        <>
          <p>{location ? <strong>{location}</strong> : <strong>Weather</strong>}</p>
          <hr />
          <p>🌡 Temperature: {weather.temperature}°C</p>
          <p>💨 Wind: {weather.windspeed} m/s</p>
          <p>🧭 Wind Direction: {weather.winddirection}°</p>
          <p>{weatherIcons[weather.weathercode] || "📍 Unknown weather"}</p>
          <p>{weather.is_day ? "☀️ Day" : "🌙 Night"}</p>
        </>
      )}

      {!fetching && !weather && <p>No data available.</p>}
    </Popup>
  );
}

const weatherIcons = {
  0: "☀️ Clear sky",
  1: "🌤️ Mostly clear",
  2: "⛅ Partly cloudy",
  3: "☁️ Overcast",
  45: "🌫️ Fog",
  48: "🌫️ Rime fog",
  51: "🌦️ Light drizzle",
  53: "🌦️ Drizzle",
  55: "🌧️ Heavy drizzle",
  56: "🌧️ Freezing drizzle",
  57: "🌧️ Freezing drizzle",
  61: "🌦️ Light rain",
  63: "🌧️ Rain",
  65: "🌧️ Heavy rain",
  66: "🌧️ Freezing rain",
  67: "🌧️ Freezing rain",
  71: "🌨️ Light snow",
  73: "🌨️ Snow",
  75: "❄️ Heavy snow",
  77: "❄️ Snow grains",
  80: "🌧️ Rain showers",
  81: "🌧️ Rain showers",
  82: "⛈️ Heavy rain showers",
  85: "🌨️ Snow showers",
  86: "❄️ Snow showers",
  95: "⛈️ Thunderstorm",
  96: "⛈️ Thunderstorm w/ hail",
  99: "⛈️ Thunderstorm w/ hail",
};

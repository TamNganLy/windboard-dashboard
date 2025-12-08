import axios from "axios";

export async function fetchBalloonData() {
  const data = [];

  for (let i = 0; i < 24; i++) {
    const filename = String(i).padStart(2, "0");
    // console.log(filename);
    const url = `http://localhost:3000/balloon/${filename}`;

    try {
      const response = await axios.get(url);
      data.push(response.data);
    } catch (err) {
      console.error("Error fetching:", filename, err);
    }
  }
  return data;
}

export async function fetchWeather(lat, lon) {
  try {
    const url = `https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${lon}&current_weather=true`;
    const response = await axios.get(url);
    // console.log(response.data.current_weather);
    return response.data.current_weather;
  } catch (err) {
    console.warn("Failed to fetch weather for", lat, lon, err);
    return null;
  }
}

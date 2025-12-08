import axios from "axios";

export async function fetchBalloons() {
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

export async function fetchBalloon(lat, lon) {
  try {
    const url = `http://localhost:3000/data/${lat}/${lon}`;
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.warn("Failed to fetch data for", lat, lon, err);
    return null;
  }
}

// export async function fetchWeather(lat, lon) {
//   try {
//     // const url = `https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${lon}&current_weather=true`;
//     const url = `http://localhost:3000/data/${lat}/${lon}`;
//     const response = await axios.get(url);
//     // console.log(response.data.current_weather);
//     return response.data;
//   } catch (err) {
//     console.warn("Failed to fetch weather for", lat, lon, err);
//     return null;
//   }
// }

// export async function fetchLocation(lat, lon) {
//   try {
//     // const url = `https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${lon}&
//     // current_weather=true`;
//     const url = `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}`;
//     const response = await axios.get(url);
//     const loc = response.data;
//     console.log(response.data);
//     // Build a nice name
//     const name = loc.name || "";
//     const admin = loc.admin1 ? `, ${loc.admin1}` : "";
//     const country = loc.country ? `, ${loc.country}` : "";
//     return (`${name}${admin}${country}`);
//   } catch (err) {
//     console.warn("Failed to fetch location for", lat, lon, err);
//     return null;
//   }
// }

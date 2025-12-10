import axios from "axios";

export async function fetchBalloons(hour) {
  const filename = String(hour).padStart(2, "0");
    // const url = `http://localhost:3000/balloon/${filename}`;
    const url = `/api/balloon/${filename}`;

    try {
      const response = await axios.get(url);
      return(response.data);
    } catch (err) {
      console.error("Error fetching:", filename, err);
    }
}

export async function fetchBalloon(lat, lon) {
  // const url = `http://localhost:3000/data/${lat}/${lon}`;
  const url = `/api/data/${lat}/${lon}`;

  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.warn("Failed to fetch data for", lat, lon, err);
    return null;
  }
}
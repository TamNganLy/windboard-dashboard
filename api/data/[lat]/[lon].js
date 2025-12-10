import axios from "axios";

export default async function fetchBalloonData(req, res) {
  const { lat, lon } = req.query;
  const data = { weather: null, location: null };
  const weatherUrl = `https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${lon}&current_weather=true`;
  const locationUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=jsonv2`;

  try {
    // --- Fetch Weather ---
    try {
      const weatherResponse = await axios.get(weatherUrl);
      data.weather = weatherResponse.data.current_weather || null;
    } catch (weatherErr) {
      console.warn("Weather fetch failed:", weatherErr.message);
      data.weather = null;
    }

    // --- Fetch Location ---
    try {
      const locationResponse = await axios.get(locationUrl, {
        headers: {
          "User-Agent": "windborne-balloon-app",
        },
      });

      data.location = locationResponse.data?.display_name || `${lat}, ${lon}`;
    } catch (locationErr) {
      console.warn("Location fetch failed:", locationErr.message);
      data.location = null;
    }

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
}

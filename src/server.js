import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET All balloon
app.get("/balloon/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const url = `https://a.windbornesystems.com/treasure/${id}.json`;

    const response = await axios.get(url);
    // console.log(response.data[0]);
    res.json(response.data);
  } catch (err) {
    // console.error(err);
    res.status(500).send("Server error: ", err);
  }
});

// GET weather and location for a balloon
app.get("/data/:lat/:lon", async (req, res) => {
  const data = { weather: null, location: null };

  try {
    const { lat, lon } = req.params;

    // --- Fetch Weather ---
    try {
      const weatherUrl = `https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${lon}&current_weather=true`;
      const weatherResponse = await axios.get(weatherUrl);
      data.weather = weatherResponse.data.current_weather || null;
    } catch (weatherErr) {
      console.warn("Weather fetch failed:", weatherErr.message);
      data.weather = null;
    }

    // --- Fetch Location ---
    try {
      const locationUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=jsonv2`;

      const locationResponse = await axios.get(locationUrl, {
        headers: {
          "User-Agent": "windborne-balloon-app"
        }
      });

      data.location = locationResponse.data?.display_name || null;

    } catch (locationErr) {
      console.warn("Location fetch failed:", locationErr.message);
      data.location = null;
    }

    console.log("Final data:", data);
    return res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// Run Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

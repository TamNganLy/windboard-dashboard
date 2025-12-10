import { useEffect, useState } from "react";
import { fetchBalloons } from "./http";
import "./App.css";
import MyMap from "./components/MyMap";
import MyButton from "./components/MyButton";

function App() {
  const [cache, setCache] = useState({});
  const [selectedHour, setSelectedHour] = useState(0);

  const currentHourDiff = 0;

  useEffect(() => {
    async function fetchCurrentHour() {
      const result = await fetchBalloons(currentHourDiff);
      setCache((prev) => ({ ...prev, [currentHourDiff]: result }));
      setSelectedHour(currentHourDiff);
    }
    fetchCurrentHour();
  }, []);

  async function getDataByHour(hourDiff) {
    setSelectedHour(hourDiff);

    // Return if data has already fetched.
    if (cache[hourDiff]) return;

    const result = await fetchBalloons(hourDiff);
    setCache((prev) => ({
      ...prev,
      [hourDiff]: result,
    }));
  }

  return (
    <>
      <h1>Windborne Dashboard</h1>
      <div className="container">
        <div className="row g-2 justify-content-center">
          {Array.from({ length: 24 }).map((_, i) => (
            <div className="col-xxl-1 col-xl-2 col-md-3 col-4">
              <MyButton key={i} OnClick={getDataByHour} id={i} />
            </div>
          ))}
        </div>
      </div>

      <MyMap balloons={cache[selectedHour]} />
    </>
  );
}

export default App;

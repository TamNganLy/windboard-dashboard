import { useEffect, useState } from "react";
import { fetchBalloons } from "./http";
import "./App.css";
import MyMap from "./components/MyMap";

function App() {
  const [cache, setCache] = useState({});
  const [selectedHour, setSelectedHour] = useState(null);

  const currentHourDiff = 0;

  useEffect(() => {
    async function fetchCurrentHour() {
      const result = await fetchBalloons(currentHourDiff);
      setCache((prev) => ({ ...prev, [currentHourDiff]: result }));
      setSelectedHour(currentHourDiff);
    }
    fetchCurrentHour();
  }, []);

  async function handleClick(hourDiff) {
    setSelectedHour(hourDiff);

    // Return if data has already fetched.
    if (cache[hourDiff]) return;

    const result = await fetchBalloons(hourDiff);
    setCache((prev) => ({
      ...prev,
      [hourDiff]: result,
    }));
  }

  function getButtonLabel(hourDiff) {
    const date = new Date();
    date.setHours(date.getHours() - hourDiff);
    const hours = date.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHour = hours % 12 === 0 ? 12 : hours % 12;
    return `${displayHour} ${ampm}`;
  }

  return (
    <>
      <h1>Windborne Dashboard</h1>

      <div>
        {Array.from({ length: 24 }).map((_, i) => {
          const hourDiff = 23 - i;
          return (
            <button key={hourDiff} onClick={() => handleClick(hourDiff)}>
              {getButtonLabel(hourDiff)}
            </button>
          );
        })}
      </div>

      <MyMap balloons={cache[selectedHour]} />
    </>
  );
}

export default App;

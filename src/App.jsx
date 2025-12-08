import { useEffect, useState } from 'react';
import { fetchBalloons } from './http';
import './App.css'
import MyMap from './components/MyMap';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchBalloons();
      // console.log("All balloon data:", result);
      // console.log("balloon data:", result[0][0]);
      // console.log("balloon data:", result[0][1]);

      setData(result[0]);
    }
    fetchData();
  }, []);

  // console.log("Data:", data[0]);

  return (
    <>
      <h1>Windborne Dashboard</h1>
      {/* {data.length > 0 && <MyMap balloons={data[0]} />} */}
      <MyMap balloons={data} />
    </>
  )
}

export default App

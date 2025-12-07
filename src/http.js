import axios from "axios";

export async function fetchBalloonData() {
  const data = [];

  for (let i = 0; i < 24; i++) {
    const filename = String(i).padStart(2, "0");
    // console.log(filename);
    const url = `http://localhost:3000/balloon/${filename}`;

    try {
      const response = await axios.get(url);
      // console.log("Hour", i, response.data);
      data.push(response.data);
    } catch(err) {
      console.error("Error fetching:", filename, err);
    }
  }

  // data.push([15.944665233593074, 23.396717938520098, 19.904812126015592]);
  // data.push([-56.861922642351516, 173.75347170936624, 21.974688116630116]);
  // console.log("Inside fetchBalloonData(), data:", data);

  return data;
}

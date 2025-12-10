import axios from "axios";

export default async function fetchBalloons(req, res) {
  const { id } = req.query;
  const url = `https://a.windbornesystems.com/treasure/${id}.json`;

  try {
    const response = await axios.get(url);
    // console.log(response.data[0]);
    res.status(200).json(response.data);
  } catch (err) {
    // console.error(err);
    res.status(500).send("Server error: ", err);
  }
}
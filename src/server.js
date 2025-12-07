import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3000;


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// GET All books
app.get("/balloon/:id", async(req,res) => {
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
})


// Run Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})

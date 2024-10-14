import dotenv from "dotenv";
import axios from "axios";
import express from "express";

dotenv.config();
const { NASA_API_KEY, PORT, NASA_API_URL } = process.env;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

const monday = "2024-10-07";
const friday = "2024-10-11";

const url = `${NASA_API_URL}?start_date=${monday}&end_date=${friday}&api_key=${NASA_API_KEY}`;

app.get("/meteors", async (request, response) => {
  try {
    const result = await axios.get(url);

    response.json(result.data);
  } catch (error) {
    response.status(500).json({ error: "Faild to fetch data." });
  }
});

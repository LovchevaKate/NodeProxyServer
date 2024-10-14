import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const apiKey = process.env.NASA_API_KEY;

const monday = "2024-10-07";
const friday = "2024-10-11";

const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${monday}&end_date=${friday}&api_key=${apiKey}`;

await axios
  .get(url)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching data", error);
  });

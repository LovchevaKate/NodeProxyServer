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

    const data = Object.values(result.data.near_earth_objects).flatMap(
      (meteors) =>
        meteors.map((item) => ({
          id: item.id,
          name: item.name,
          diameter:
            (item.estimated_diameter.meters.estimated_diameter_min +
              item.estimated_diameter.meters.estimated_diameter_max) /
            2,
          is_potentially_hazardous_asteroid:
            item.is_potentially_hazardous_asteroid,
          close_approach_date_full:
            item.close_approach_data[0].close_approach_date_full,
          relative_velocity:
            item.close_approach_data[0].relative_velocity.kilometers_per_second,
        }))
    );

    response.json(data);
  } catch (error) {
    response.status(500).json({ error: "Faild to fetch data." });
  }
});

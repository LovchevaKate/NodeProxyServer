import axios from "axios";
import { NASA_API_KEY, NASA_API_URL } from "../config.js";
import { getMondayAndFridayOfWeek } from "../helper/meteorHelper.js";

const getMeteors = async (date) => {
  const { monday, friday } = await getMondayAndFridayOfWeek(date);

  const url = `${NASA_API_URL}?start_date=${monday}&end_date=${friday}&api_key=${NASA_API_KEY}`;

  const result = await axios.get(url);
  return result.data.near_earth_objects;
};

export default getMeteors;

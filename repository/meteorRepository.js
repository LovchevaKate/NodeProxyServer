import axios from "axios";
import { NASA_API_KEY, NASA_API_URL } from "../config.js";

const seventhOfOctober = "2024-10-07";
const eleventhOfOctober = "2024-10-11";

const url = `${NASA_API_URL}?start_date=${seventhOfOctober}&end_date=${eleventhOfOctober}&api_key=${NASA_API_KEY}`;

const getMeteors = async () => {
  const result = await axios.get(url);
  return result.data.near_earth_objects;
};

export default getMeteors;

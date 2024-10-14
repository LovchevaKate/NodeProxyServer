import axios from "axios";
import { config } from "../config.js";

const url = `${config.nasaApiUrl}?start_date=${config.monday}&end_date=${config.friday}&api_key=${config.nasaApiKey}`;

const getMeteors = async () => {
  const result = await axios.get(url);
  return result.data.near_earth_objects;
};

export default getMeteors;

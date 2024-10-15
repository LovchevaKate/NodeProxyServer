import axios from "axios";
import { NASA_API_PHOTO_URL, SOL, CAMERA } from "../config.js";

const getRoverImages = async (userApiKey) => {
  const url = `${NASA_API_PHOTO_URL}?sol=${SOL}&camera=${CAMERA}&api_key=${userApiKey}`;
  const result = await axios.get(url);
  return result.data;
};

export default getRoverImages;

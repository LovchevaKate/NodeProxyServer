import axios from "axios";
import { config } from "../config.js";

const getMeteors = async (date) => {
  const { monday, friday } = await getMondayAndFridayOfWeek(date);

  const url = `${config.nasaApiUrl}?start_date=${monday}&end_date=${friday}&api_key=${config.nasaApiKey}`;

  const result = await axios.get(url);
  return result.data.near_earth_objects;
};

const getMondayAndFridayOfWeek = async (date) => {
  const givenDate = new Date(date);
  const dayOfWeek = givenDate.getDay();

  const distanceToMonday = dayOfWeek - 1;
  const monday = new Date(givenDate);
  monday.setDate(givenDate.getDate() - distanceToMonday);

  const distanceToFriday = 5 - dayOfWeek;
  const friday = new Date(givenDate);
  friday.setDate(givenDate.getDate() + distanceToFriday);

  return { monday: formatDate(monday), friday: formatDate(friday) };
};

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default getMeteors;

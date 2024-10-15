import dotenv from "dotenv";

dotenv.config();

export const config = {
  nasaApiKey: process.env.NASA_API_KEY,
  nasaApiUrl: process.env.NASA_API_URL,
};

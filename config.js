import dotenv from "dotenv";

dotenv.config();

export const { NASA_API_KEY, NASA_API_URL, NASA_API_PHOTO_URL, SOL, CAMERA } =
  process.env;

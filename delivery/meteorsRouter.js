import express from "express";
import fetchMeteors from "../useCases/fetchMeteors.js";
import getRoverImage from "../useCases/getRoverImage.js";
import getMeteorSchema from "../validation/schemas/getMeteorSchema.js";
import validateRequest from "../validation/validator.js";
import postRoverImageSchema from "../validation/schemas/postRoverImageSchema.js";

const meteorRouter = express.Router();

meteorRouter.get(
  "/meteors",
  validateRequest(getMeteorSchema, "query"),
  async (request, response) => {
    try {
      const { date, count, wereDangerousMeteors } = request.query;
      if (!date) {
        return response.status(400).json({ error: "Missing date parameter" });
      }

      const meteors = await fetchMeteors(date, count, wereDangerousMeteors);
      return response.json(meteors);
    } catch (error) {
      return response
        .status(500)
        .json({ error: "Faild to fetch data with meteors." });
    }
  }
);

meteorRouter.post(
  "/roverImage",
  validateRequest(postRoverImageSchema, "body"),
  async (request, response) => {
    try {
      const { userId, userName, userApiKey } = request.body;
      const image = await getRoverImage(userApiKey);
      return response.json({ photo: image });
    } catch (error) {
      return response
        .status(500)
        .json({ error: "Faild to fetch data with image from the rover." });
    }
  }
);

export default meteorRouter;

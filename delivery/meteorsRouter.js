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
  async (request, response, next) => {
    try {
      const { date, count, wereDangerousMeteors } = request.query;
      if (!date) {
        const error = new Error("Missing date parameter");
        error.statusCode = 400;
        throw error;
      }

      const meteors = await fetchMeteors(date, count, wereDangerousMeteors);
      response.render("meteor.njk", { meteors });
    } catch (error) {
      next(error);
    }
  }
);

meteorRouter.get("/rover", async (request, response, next) => {
  try {
    response.render("roverImageForm.njk");
  } catch (error) {
    next(error);
  }
});

meteorRouter.post(
  "/roverImage",
  validateRequest(postRoverImageSchema, "body"),
  async (request, response, next) => {
    try {
      const { userId, userName, userApiKey } = request.body;
      const image = await getRoverImage(userApiKey);
      response.render("roverImage.njk", { image });
    } catch (error) {
      next(error);
    }
  }
);

export default meteorRouter;

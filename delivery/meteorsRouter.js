import express from "express";
import fetchMeteors from "../useCases/fetchMeteors.js";
import getRoverImage from "../useCases/getRoverImage.js";

const meteorRouter = express.Router();

meteorRouter.get("/meteors", async (request, response, next) => {
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
});

meteorRouter.post("/roverImage", async (request, response, next) => {
  try {
    const { userId, userName, userApiKey } = request.body;
    const image = await getRoverImage(userApiKey);
    return response.json({ photo: image });
  } catch (error) {
    next(error);
  }
});

export default meteorRouter;

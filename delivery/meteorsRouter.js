import express from "express";
import fetchMeteors from "../useCases/fetchMeteors.js";

const meteorRouter = express.Router();

meteorRouter.get("/meteors", async (request, response) => {
  try {
    const { date, count, wereDangerousMeteors } = request.query;
    if (!date) {
      return response.status(400).json({ error: "Missing date parameter" });
    }

    const meteors = await fetchMeteors(date, count, wereDangerousMeteors);
    response.render("meteor.njk", { meteors });
  } catch (error) {
    return response.status(500).json({ error: "Faild to fetch data." });
  }
});

export default meteorRouter;

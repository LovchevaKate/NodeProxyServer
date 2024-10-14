import express from "express";
import fetchMeteors from "../useCases/fetchMeteors.js";

const meteorRouter = express.Router();

meteorRouter.get("/meteors", async (request, response) => {
  try {
    const meteors = await fetchMeteors();
    return response.json(meteors);
  } catch (error) {
    return response.status(500).json({ error: "Faild to fetch data." });
  }
});

export default meteorRouter;

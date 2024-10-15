import dotenv from "dotenv";
import express from "express";
import meteorRouter from "./delivery/meteorsRouter.js";

dotenv.config();
const { PORT } = process.env;

const app = express();

app.use(meteorRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

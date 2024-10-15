import dotenv from "dotenv";
import express from "express";
import meteorRouter from "./delivery/meteorsRouter.js";
import bodyParser from "body-parser";

dotenv.config();
const { PORT } = process.env;

const app = express();
app.use(bodyParser.json());

app.use(meteorRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

import dotenv from "dotenv";
import express from "express";
import meteorRouter from "./delivery/meteorsRouter.js";
import bodyParser from "body-parser";
import nunjucks from "nunjucks";

dotenv.config();
const { PORT } = process.env;

const app = express();
app.use(bodyParser.json());

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(meteorRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

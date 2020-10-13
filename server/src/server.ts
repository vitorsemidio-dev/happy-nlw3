import express from "express";
import "dotenv/config";
import "./database/connection";

import routes from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});

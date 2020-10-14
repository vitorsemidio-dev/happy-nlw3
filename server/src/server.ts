import express from "express";
import path from "path";
import "dotenv/config";
import "express-async-errors";
import "./database/connection";

import errorHandler from "./errors/handler";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(routes);
app.use(errorHandler);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});

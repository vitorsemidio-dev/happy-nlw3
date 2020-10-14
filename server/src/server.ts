import express from "express";
import path from "path";
import "dotenv/config";
import "./database/connection";

import routes from "./routes";

const app = express();

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});

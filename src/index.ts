import express from "express";

import { setupDB } from "./db/database";
import { personRouter } from "./routes/person";

const app = express();

app.use(express.json());

setupDB();

app.use(personRouter);

app.listen(3000, () => {
  console.log("Running -p 3000");
});

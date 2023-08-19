import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const server = app.listen(process.env.PORT || 8080, () => {
  console.log(process.env.PUBLISH_KEY);
  console.log(
    `server is working on http://localhost:${process.env.PORT || 8080}`
  );
});

// json-server --watch db.json --port 7000
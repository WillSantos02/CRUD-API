import express from "express";
import { config } from "dotenv";
import { MongoClient } from "./database/mongo";
import getUserRouter from "./routes/user/get-user-route";
import createUserRouter from "./routes/user/create-user-route"
import updateUserRouter from "./routes/user/update-user-route"
import deleteUserRouter from "./routes/user/delete-user-route"

const main = async () => {
  config();

  const app = express();

  app.use(express.json());

  await MongoClient.connect();

  app.use(getUserRouter);

  app.use(createUserRouter);

  app.use(updateUserRouter);

  app.use(deleteUserRouter);

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`listening on port ${port}!`));
};

main();

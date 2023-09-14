import express from "express";
import { MongoGetUsersRepository } from "../../repositories/get-users/mongo-get-users";
import { GetUsersController } from "../../controllers/get-users/get-users";

const router = express.Router();

router.get("/users", async (req, res) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();

  const getUsersController = new GetUsersController(mongoGetUsersRepository);

  const { body, statusCode } = await getUsersController.handle();

  res.status(statusCode).send(body);
});

export default router;

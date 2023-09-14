import express from "express";
import { MongoCreateUserRepository } from "../../repositories/create-user/mongo-create-user";
import { CreateUserController } from "../../controllers/create-user/create-user";

const router = express.Router();

router.post("/users", async (req, res) => {
  const mongoCreateUserRepository = new MongoCreateUserRepository();

  const createUserController = new CreateUserController(
    mongoCreateUserRepository
  );

  const { body, statusCode } = await createUserController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

export default router;
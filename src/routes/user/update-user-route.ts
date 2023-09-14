import express from "express";
import { MongoUpdateUserRepository } from "../../repositories/update-user/mongo-update-user";
import { UpdateUserController } from "../../controllers/update-user/update-user";

const router = express.Router();

router.patch("/users/:id", async (req, res) => {
  const mongoUpdateUserRepository = new MongoUpdateUserRepository();

  const updateUserController = new UpdateUserController(
    mongoUpdateUserRepository
  );

  const { body, statusCode } = await updateUserController.handle({
    body: req.body,
    params: req.params,
  });

  res.status(statusCode).send(body);
});

export default router;
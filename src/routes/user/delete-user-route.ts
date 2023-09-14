import express from "express";
import { MongoDeleteUserRepository } from "../../repositories/delete-user/mongo-delete-user";
import { DeleteUserController } from "../../controllers/delete-user/delete-user";

const router = express.Router();

router.delete("/users/:id", async (req, res) => {
  const mongoDeleteUserRepository = new MongoDeleteUserRepository();

  const deleteUserController = new DeleteUserController(
    mongoDeleteUserRepository
  );

  const { body, statusCode } = await deleteUserController.handle({
    params: req.params,
  });

  res.status(statusCode).send(body);
});

export default router;
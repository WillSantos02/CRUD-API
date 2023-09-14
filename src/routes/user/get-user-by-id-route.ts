import express from "express";
import { MongoGetUserByIdRepository } from "../../repositories/get-user-by-id/mongo-get-use-by-id";
import { GetUserByIdController } from "../../controllers/get-user-by-id/get-user-by-id";

const router = express.Router();

router.get("/users/:id", async (req, res) => {
  const mongoGetUserByIdRespository = new MongoGetUserByIdRepository();

  const getUserByIdController = new GetUserByIdController(
    mongoGetUserByIdRespository
  );

  const { body, statusCode } = await getUserByIdController.handle({
    params: req.params,
  });

  res.status(statusCode).send(body);
});

export default router;

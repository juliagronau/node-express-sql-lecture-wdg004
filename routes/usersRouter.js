import { Router } from "express";
import {
  getAllUsers,
  getSingleUser,
  createNewUser,
  deleteUser,
  updateUser,
} from "../controllers/usersController.js";

const usersRouter = Router();

//An der Route /api/users wollen wir get & post akzeptieren
usersRouter.route("/").get(getAllUsers).post(createNewUser);

//An der Route /api/users/:id wollen wir get, put & delete akzeptieren
usersRouter
  .route("/:id")
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser);

export default usersRouter;

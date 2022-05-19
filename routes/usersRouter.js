import { Router } from "express";
import {
  getAllUsers,
  getSingleUser,
  createNewUser,
  deleteUser,
  updateUser,
} from "../controllers/usersController.js";
import checkIfAuthorized from "../middlewares/authMiddleware.js";

const usersRouter = Router();

//Router-level middleware, die checkt ob Sender befugt ist, user einzusehen
//inkludiert im usersRouter Modul
// usersRouter.use((req, res, next) => {
//   console.log(req.query.auth);
//   if (req.query.auth === "ichdarfdas") {
//     next();
//   } else {
//     res.status(403).send("Du darfst das nicht");
//   }
// });

//exkludiert in eigenem modul (auth.js)
//usersRouter.use(checkIfAuthorized);

//An der Route /api/users wollen wir get & post akzeptieren
//hier mit Bsp für custom middleware an einer bestimmten route&endpoint (get + getAllUsers)
usersRouter.route("/").get(checkIfAuthorized, getAllUsers).post(createNewUser);

//An der Route /api/users/:id wollen wir get, put & delete akzeptieren
usersRouter
  .route("/:id")
  .get(getSingleUser)
  .delete(deleteUser) 
  .put(updateUser);

export default usersRouter;

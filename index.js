import "dotenv/config";
import express from "express";
import usersRouter from "./routes/usersRouter.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

//Application-level middlewares
//werden ausgeführt bei jeder request, die die App erhält
app.use(cors()); //third-party middlware
app.use(express.json()); //built-in middleware (in express)

//Application-level middleware
//wird nur ausgeführt, wenn der Pfad matcht
app.use("/api/users", usersRouter);

app.get("/", (req, res) =>
  res.send("<h1>Finally some real DB data!!!</h1>")
);

app.listen(port, () =>
  console.log(`Server listening on port ${port}`)
);

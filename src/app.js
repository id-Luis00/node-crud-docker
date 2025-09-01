import express from "express";
import morgan from "morgan";
import usersRouter from "./routes/users.routes.js";
import { notFoundHandler, errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/users", usersRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export { app, port };

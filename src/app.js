import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/auth-router.js";
import errorMiddleware from "./middlewares/error-middleware.js";
import { formRoute } from "./routes/contact-route.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.use(express.json({ limit: "15kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use("/api/auth", router);
app.use("/api/form", formRoute);
app.use(errorMiddleware);

export { app };

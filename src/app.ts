import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { issueJwt } from "./middlewares/issueJwt";
import { checkJwt } from "./middlewares/checkJwt";
import { passport } from "./passport";
import "./providers";
import {
  indexRouter,
  userRouter,
  accountRouter,
  careerRouter,
  categoryRouter,
  cityRouter,
  districtRouter,
  postRouter,
  skillRouter,
  skillCategoryRouter
} from "./routes";
import { ResponseHandler } from "./types/responseHandler";
import { ErrorHandler } from "./utils/errorHandler";
import swaggerFile from "./providers/swagger/swagger-output.json";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    credentials: true
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(issueJwt);

app.use("/api", indexRouter);
app.use("/api/account", accountRouter);
app.use("/api/career", careerRouter);
app.use("/api/category", categoryRouter);
app.use("/api/city", cityRouter);
app.use("/api/district", districtRouter);
app.use("/api/post", postRouter);
app.use("/api/skill", skillRouter);
app.use("/api/skillCategory", skillCategoryRouter);
app.use("/api/user", checkJwt, userRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile, { explorer: true }));

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  throw ErrorHandler.NotFound();
});

// error handler
app.use(function (err: ResponseHandler, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  const isDevelopment = req.app.get("env") === "development";
  res.locals.message = isDevelopment ? err.message : "Internal Server Error";
  res.locals.error = isDevelopment ? err : {};

  // render the error pag
  const { status, message } = err;
  res.status(status || 500).json({ status, message });
});

export default app;

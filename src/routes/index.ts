export * from "./account";
export * from "./career";
export * from "./category";
export * from "./city";
export * from "./district";
export * from "./post";
export * from "./skill";
export * from "./skillCategory";
export * from "./user";

import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";

const indexRouter = Router();
/* GET home page. */
indexRouter.get(
  "/",
  asyncHandler(async (req, res, next) => {
    res.status(200).json({
      status: 200,
      message: "typescript + express + elice8"
    });
  })
);

export { indexRouter };

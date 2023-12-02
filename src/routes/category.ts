import { Router } from "express";
import { CategoryService } from "../services/categoryService";
import { asyncHandler } from "../utils/asyncHandler";
import { ErrorHandler } from "../utils/errorHandler";
import { mappingCategory } from "../utils/mappingString";

const categoryRouter = Router();

categoryRouter.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const categories = await CategoryService.getAllCategory();
    res.status(200).json({ status: 200, message: "성공", data: categories });
  })
);

categoryRouter.get(
  "/:categoryName",
  asyncHandler(async (req, res, next) => {
    const categoryName: string = mappingCategory(req.params?.categoryName);
    const category = await CategoryService.getCategory(categoryName);
    if (!category) throw ErrorHandler.BadRequest();

    res.status(200).json({ status: 200, message: "성공", data: category });
  })
);

export { categoryRouter };

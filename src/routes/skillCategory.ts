import { Router } from "express";
import { SkillService } from "../services/skillService";
import { asyncHandler } from "../utils/asyncHandler";
import { ErrorHandler } from "../utils/errorHandler";
import { mappingSkillCategory } from "../utils/mappingString";

const skillCategoryRouter = Router();

skillCategoryRouter.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const skillCategories = await SkillService.getAllSkillCategory();
    res.status(200).json({ status: 200, message: "성공", data: skillCategories });
  })
);

skillCategoryRouter.get(
  "/:skillCategoryName",
  asyncHandler(async (req, res, next) => {
    const skillCategoryName: string = mappingSkillCategory(req.params?.skillCategoryName);
    const skillCategory = await SkillService.getSkillCategoryByName(skillCategoryName);
    if (!skillCategory) throw ErrorHandler.BadRequest();

    res.status(200).json({ status: 200, message: "성공", data: skillCategory });
  })
);

export { skillCategoryRouter };

import { Router } from "express";
import { ObjectId } from "mongoose";
import { mappingSkillCategory } from "../utils/mappingString";
import { asyncHandler } from "../utils/asyncHandler";
import { ErrorHandler } from "../utils/errorHandler";
import { SkillService } from "../services/skillService";
import { issueJwt } from "../middlewares/issueJwt";

const skillRouter = Router();

skillRouter.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const skills = await SkillService.getAllSkill();
    res.status(200).json({ status: 200, message: "성공", data: skills });
  })
);

// 카테고리별 스킬 조회
skillRouter.get(
  "/:skillCategoryName",
  issueJwt,
  asyncHandler(async (req, res, next) => {
    const skillCategoryName: string = mappingSkillCategory(req.params?.skillCategoryName);
    const skillCategory = await SkillService.getSkillCategoryByName(skillCategoryName);
    if (!skillCategory) throw ErrorHandler.BadRequest();

    const userId = (req.user as { id: ObjectId })?.id;
    const categorySkills = await SkillService.getSkillByCategory(skillCategory, userId);
    if (!categorySkills) throw ErrorHandler.BadRequest();

    res.status(200).json({ status: 200, message: "성공", data: categorySkills });
  })
);

//스킬 이름으로 스킬 조회
skillRouter.get(
  "/:skillName",
  issueJwt,
  asyncHandler(async (req, res, next) => {
    const skillCategoryName: string = mappingSkillCategory(req.params?.skillCategoryName);
    const skillCategory = await SkillService.getSkillCategoryByName(skillCategoryName);
    if (!skillCategory) throw ErrorHandler.BadRequest();

    const userId = (req.user as { id: ObjectId })?.id;
    const categorySkills = await SkillService.getSkillByCategory(skillCategory, userId);
    if (!categorySkills) throw ErrorHandler.BadRequest();

    res.status(200).json({ status: 200, message: "성공", data: categorySkills });
  })
);

export { skillRouter };

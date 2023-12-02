import { ObjectId, model } from "mongoose";
import { skillCategorySchema } from "../schemas";

export const SkillCategoryModel = model("SkillCategory", skillCategorySchema);

export class SkillCategory {
  static async findAllSkillCategory() {
    const fields = ["_id", "name"];
    return await SkillCategoryModel.find({}).select(fields.join(" "));
  }

  static async findBySkillCategoryId(skillCategoryId: ObjectId) {
    const fields = ["_id", "name"];
    return await SkillCategoryModel.findById(skillCategoryId).select(fields.join(" ")).exec();
  }

  static async findBySkillCategoryName(skillCategoryName: string) {
    const fields = ["_id", "name"];
    return await SkillCategoryModel.findOne({ name: skillCategoryName }).select(fields.join(" "));
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId, model } from "mongoose";
import { skillSchema } from "../schemas";

export const SkillModel = model("Skill", skillSchema);

export class Skill {
  /**
   * 비회원 : 본인 커스텀 스킬 제외 전체 스킬 목록 반환
   * 회원 : 전체 스킬 목록 + 본인 커스텀 스킬 목록 반환
   */
  static async findAllSkill(userId?: ObjectId | null) {
    const fields = ["_id", "name", "skillCategory_id"];
    if (!userId) return await SkillModel.find({ isCustom: false }).select(fields.join(" "));

    fields.push("user_id");
    return await SkillModel.find({
      $or: [{ isCustom: false }, { $and: [{ isCustom: true }, { user_id: userId }] }]
    }).select(fields.join(" "));
  }

  static async findBySkillName(skillName: string) {
    return await SkillModel.findOne({ name: skillName });
  }

  static async findBySkillId(skillId: ObjectId | string) {
    return await SkillModel.findOne({ _id: skillId }).select("_id name isCustom");
  }

  static async findAllBySkillCategory(skillCategoryId: any, userId?: ObjectId, isCustom?: boolean) {
    const fields = ["_id", "name", "skillCategory_id"];
    if (isCustom) {
      return await SkillModel.find({
        $and: [{ isCustom }, { user_id: userId }]
      }).select(fields.join(" "));
    }
    return await SkillModel.find({ skillCategory_id: skillCategoryId }).select(fields.join(" "));
  }

  static async create(skillName: string, userId: ObjectId, skillCategoryId?: ObjectId) {
    if (!skillCategoryId) {
      const skillCategoryId = "655ceb2d01b47f6b813d4a82";
      return await SkillModel.create({
        name: skillName,
        isCustom: true,
        skillCategory_id: skillCategoryId,
        user_id: userId
      });
    }
    return await SkillModel.create({
      name: skillName,
      isCustom: true,
      skillCategory_id: skillCategoryId,
      user_id: userId
    });
  }

  static async deleteBySkillName(skillName: string, userId: ObjectId) {
    // route나 service에서 custom skill인지 확인된다면 조건 추가
    return await SkillModel.deleteOne({
      $and: [{ user_id: userId }, { name: skillName }]
    });
  }
  static async deleteBySkillId(skillId: ObjectId, userId: ObjectId) {
    // route나 service에서 custom skill인지 확인된다면 조건 추가
    return await SkillModel.deleteOne({
      $and: [{ user_id: userId }, { _id: skillId }]
    });
  }
}

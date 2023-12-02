/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from "mongoose";
import { Skill, SkillCategory } from "../models";
import { SkillCategoryName } from "../types/seedTypes";

export class SkillService {
  static async getAllSkill() {
    return await Skill.findAllSkill();
  }

  static async getSkillByCategory(skillCategory: any, userId?: ObjectId | null) {
    // 회원의 커스텀 스킬이 잘 조회되는지 확인 필요
    const { _id, name } = skillCategory;
    const isCustomSkillCategory = name === SkillCategoryName.Custom;

    if (!userId) {
      return isCustomSkillCategory ? null : await Skill.findAllBySkillCategory(_id);
    }
    return isCustomSkillCategory
      ? await Skill.findAllBySkillCategory(null, userId, true)
      : await Skill.findAllBySkillCategory(_id);
  }

  // 아이디로 스킬 조회 (기술 태그로 게시글 조회할 때 사용)
  // 추가 필요한 로직이 추가될 수 있음.
  static async getSkillById(skillName: string) {
    return await Skill.findBySkillName(skillName);
  }

  static async getAllSkillCategory() {
    return await SkillCategory.findAllSkillCategory();
  }

  static async getSkillCategoryById(skillCategoryId: ObjectId) {
    return await SkillCategory.findBySkillCategoryId(skillCategoryId);
  }

  static async getSkillCategoryByName(name: string) {
    return await SkillCategory.findBySkillCategoryName(name);
  }
}

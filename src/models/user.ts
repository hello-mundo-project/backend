/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId, model } from "mongoose";
import { userSchema } from "../schemas";

export const UserModel = model("User", userSchema);

export class User {
  static async findByEmail(email: string) {
    return await UserModel.findOne({ email });
  }

  static async findByUserId(userId: ObjectId) {
    const fields = [
      "email",
      "nickname",
      "check_email",
      "annual",
      "isSocial",
      "career_id",
      "skill_id",
      "introduce",
      "deletedAt"
    ];
    return await UserModel.findById(userId).populate("career_id").populate("skill_id").select(fields.join(" "));
  }

  static async create(user: any) {
    return await UserModel.create(user);
  }

  static async updateByUserId(userId: ObjectId, updateData: any) {
    const updateUser = { $set: updateData };
    const updatedUserData = { new: true };
    return await UserModel.findByIdAndUpdate(userId, updateUser, updatedUserData);
  }

  static async deleteBySkillId(skillId: string, userId: ObjectId) {}

  // deletedAt type은 수정될 수 있음
  // 소셜, 스킬, 북마크, 게시글 삭제
  static async deleteByUserId(userId: ObjectId, deletedAt: Date) {
    const deletedDate = { $set: deletedAt };
    return await UserModel.findByIdAndUpdate(userId, deletedDate);
  }
}

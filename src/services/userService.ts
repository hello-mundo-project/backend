/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { ObjectId } from "mongoose";
import { User, Bookmark, Category, Skill } from "../models";
import { sendMail } from "../utils/sendMail";

export class UserService {
  //개인 정보 조회
  static async getUserInfo(userId: ObjectId) {
    const myProfile = await User.findByUserId(userId);

    if (!myProfile) {
      return;
    }

    return myProfile;
  }

  //개인 정보 수정
  static async setUserInfo(userInfo: any) {
    const { _id, nickname, career_id, annual, introduce, skill_id, newSkillArray } = userInfo;
    for (const skillList of skill_id) {
      const skillInfo = await Skill.findBySkillId(skillList);
      if (skillInfo?.isCustom) {
        await Skill.deleteBySkillId(skillList, _id);
      }
    }
    skill_id.length = 0;

    for (const skillList of newSkillArray) {
      const { name } = skillList;
      const newSkillId = skillList._id;
      if (newSkillId) {
        skill_id.push(skillList);
      } else {
        const newId = await Skill.create(name, _id);
        skill_id.push(newId._id);
      }
    }

    const updatedUser = await User.updateByUserId(_id, {
      nickname: nickname,
      career_id: career_id,
      annual: annual,
      introduce: introduce,
      skill_id: skill_id
    });
    return updatedUser;
  }

  //회원탈퇴
  static async deleteUser(userId: any) {
    const deletedDate: Date = new Date();

    return await User.updateByUserId(userId, { deletedAt: deletedDate });
  }

  static async getBookmark(userId: ObjectId) {
    const bookmarks = await Bookmark.findByUserId(userId);
    return !bookmarks ? null : bookmarks;
  }

  static async getBookmarkByCategoryName(userId: ObjectId, categoryName?: string) {
    const existCategory = await Category.findByCategoryName(categoryName || "");
    if (!existCategory) {
      const bookmarks = await Bookmark.findByUserId(userId);
      return !bookmarks ? null : bookmarks;
    }
  }
  static async findPassword(userInfo: any) {
    const { _id, email } = userInfo;
    const sendingMail = await sendMail(
      email,
      `비밀번호 변경 페이지 링크입니다.`,
      `${process.env.CLIENT_URL}/change-password/${_id}`
    );

    return sendingMail;
  }
}

// static async getBookmarkByCategoryName(userId: ObjectId, categoryName?: string) {
//     const existCategory = await Category.findByCategoryName(categoryName || "");
//     if (!existCategory) {
//         const bookmarks = await Bookmark.findByUserId(userId);
//         return !bookmarks ? null : bookmarks;
//     }
//     const bookmarks = await Bookmark.findByUserId(userId, existCategory._id as unknown as ObjectId);
//     return !bookmarks ? null : bookmarks;
// }

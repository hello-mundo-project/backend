/* eslint-disable @typescript-eslint/no-explicit-any */
import bcrypt from "bcrypt";
import { ObjectId } from "mongoose";
import { User, Skill } from "../models";
import { UserEmail, Login } from "../types/user";
import { validateChangePassword } from "../validators/userValidators";

export class AccountService {
  static async checkEmailDuplicate(email: UserEmail) {
    const isEmailUnique = await User.findByEmail(email);
    if (!isEmailUnique) return true;
    return false;
  }

  static async addUser(newUser: any) {
    const { password, skill_id } = newUser;
    const addSkillArray = [];
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser.password = hashedPassword;

    for (let i = skill_id.length - 1; i >= 0; i--) {
      const name = skill_id[i];
      const skillOne: any = await Skill.findBySkillName(name);
      const skillOneId = skillOne?._id;
      if (skillOneId) {
        skill_id.splice(i, 1);
        skill_id.push(skillOneId);
      } else {
        skill_id.splice(i, 1);
        addSkillArray.push(name);
      }
    }
    newUser.skill_id = skill_id;

    const createNewUser = await User.create(newUser);
    if (!createNewUser) return;
    const _id = createNewUser._id;
    for (const skillList of addSkillArray) {
      const name = skillList;
      const newId = await Skill.create(name, _id);
      skill_id.push(newId._id);
    }
    const updatedUser = await User.updateByUserId(_id, { skill_id: skill_id });
    if (!updatedUser) return;

    return createNewUser;
  }

  static async localLogin(user: Login) {
    const { email, password } = user;

    const isEmailMatch = await User.findByEmail(email);
    if (!isEmailMatch) return;

    const isPasswordMatch = bcrypt.compareSync(password, isEmailMatch.password);
    if (!isPasswordMatch) return;

    return { id: isEmailMatch._id };
  }

  static async changePassword(id: any, password: string) {
    const userInfo = await User.findByUserId(id);

    if (userInfo) {
      const _id: ObjectId = userInfo._id;
      const hashedPassword = await bcrypt.hash(password, 10);

      await User.updateByUserId(_id, { password: hashedPassword });
    }
  }
}

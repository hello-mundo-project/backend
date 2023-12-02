import { Schema } from "mongoose";
import { UserType } from "../types/user.d";

export const userSchema = new Schema<UserType>({
  email: {
    type: String,
    unique: true
  },
  nickname: {
    type: String
  },
  check_email: {
    type: String
  },
  password: {
    type: String
  },
  annual: {
    type: Number,
    default: 0
  },
  introduce: {
    type: String,
    default: "안녕하세요!"
  },
  isSocial: {
    type: Boolean,
    default: null
  },
  deletedAt: {
    type: Date,
    default: null
  },
  career_id: {
    type: Schema.Types.ObjectId,
    ref: "Career"
  },
  skill_id: {
    type: [Schema.Types.ObjectId],
    default: [],
    ref: "Skill"
  }
});

userSchema.set("timestamps", true);
userSchema.index({ email: 1 }, { unique: true });

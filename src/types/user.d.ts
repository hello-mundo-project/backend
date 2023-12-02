import { ObjectId } from "mongoose";

export type UserEmail = string;
export type UserPassword = string;

export interface Login {
  email: UserEmail;
  password: UserPassword;
}

export interface BaseUserInfo extends Login {
  nickname?: string;
  check_email?: string;
}

export interface AdditionalUserInfo {
  annual?: number;
  introduce?: string;
  career_id?: Schema.Types.ObjectId;
  skill_id?: Schema.Types.ObjectId[] | array<object>;
}

export interface UserType extends BaseUserInfo, AdditionalUserInfo {
  _id: ObjectId;
  isSocial?: boolean | null;
  deletedAt?: Date | null;
}

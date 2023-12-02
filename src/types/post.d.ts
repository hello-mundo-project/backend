import { ObjectId } from "mongoose";

export interface PostType {
  _id: ObjectId;
  user_id: Schema.Types.ObjectId;
  headcount: number;
  progress_way: string;
  city_id: Schema.Types.ObjectId | null;
  district_id: Schema.Types.ObjectId | null;
  expected_date: Date;
  duration: number;
  deadline: Date;
  recruit_status: boolean;
  deleteAt: Date | null;
  career_id: Schema.Types.ObjectId[];
  contact: string;
  title: string;
  content: string;
  category_id: Schema.Types.Objectid;
  skill_id: Schema.Types.ObjectId[];
}

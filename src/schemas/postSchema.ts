import { Schema } from "mongoose";

export const postSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String
  },
  content: {
    type: String
  },
  expected_date: {
    type: Date
  },
  duration: {
    type: Number
  },
  headcount: {
    type: Number
  },
  progress_way: {
    type: String
  },
  recruit_status: {
    type: Boolean,
    default: false
  },
  deadline: {
    type: Date
  },
  contact: {
    type: String
  },
  deleteAt: {
    type: Date,
    default: null
  },
  viewcount: {
    type: Number
  },
  city_id: {
    type: Schema.Types.ObjectId,
    ref: "City"
  },
  district_id: {
    type: Schema.Types.ObjectId,
    ref: "District"
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  skill_id: {
    type: [Schema.Types.ObjectId],
    default: null,
    ref: "Skill"
  },
  career_id: {
    type: [Schema.Types.ObjectId],
    default: null,
    ref: "Career"
  }
});

postSchema.set("timestamps", true);
postSchema.index({ createdAt: 1 });

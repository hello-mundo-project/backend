import { Schema } from "mongoose";

export const skillSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  isCustom: {
    type: Boolean,
    default: false,
    required: true
  },
  user_id: {
    type: Schema.Types.ObjectId,
    default: null,
    ref: "User"
  },
  skillCategory_id: {
    type: Schema.Types.ObjectId,
    ref: "SkillCategory"
  }
});

skillSchema.index({ skillCategory_id: 1, user_id: -1 });

import { Schema } from "mongoose";

export const skillCategorySchema = new Schema({
  name: {
    type: String
  }
});

skillCategorySchema.index({ name: 1 }, { unique: true });

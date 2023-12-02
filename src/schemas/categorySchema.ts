import { Schema } from "mongoose";

export const categorySchema = new Schema({
  name: {
    type: String
  }
});

categorySchema.index({ name: 1 }, { unique: true });

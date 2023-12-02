import { Schema } from "mongoose";

export const careerSchema = new Schema({
  name: {
    type: String
  }
});

careerSchema.index({ name: 1 }, { unique: true });

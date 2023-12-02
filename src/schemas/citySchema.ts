import { Schema } from "mongoose";

export const citySchema = new Schema({
  name: {
    type: String
  }
});

citySchema.index({ name: 1 }, { unique: true });

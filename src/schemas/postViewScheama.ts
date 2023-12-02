import { Schema } from "mongoose";

export const postViewSchema = new Schema({
  ip_address: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 1
  },
  datetime: {
    type: Date,
    default: Date.now(),
    required: true
  },
  post_id: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true
  }
});

postViewSchema.index({ ip_address: 1 }, { unique: true });

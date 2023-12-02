import { Schema } from "mongoose";

export const bookmarkSchema = new Schema({
  post_id: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

bookmarkSchema.set("timestamps", true);
bookmarkSchema.index({ createdAt: 1 });

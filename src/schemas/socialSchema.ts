import { Schema } from "mongoose";

export const socialSchema = new Schema({
  provider: {
    type: String
  },
  provider_id: {
    type: String,
    default: null
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

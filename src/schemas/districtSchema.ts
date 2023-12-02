import { Schema } from "mongoose";

export const districtSchema = new Schema({
  name: {
    type: String
  },
  city_id: {
    type: Schema.Types.ObjectId,
    ref: "City",
    required: true
  }
});

districtSchema.index({ city_id: 1 });

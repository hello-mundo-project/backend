import { ObjectId, model } from "mongoose";
import { careerSchema } from "../schemas";

export const CareerModel = model("Career", careerSchema);

export class Career {
  static async findAllCareer() {
    const fields = ["_id", "name"];
    return await CareerModel.find({}).select(fields.join(" "));
  }

  static async findByCareerName(careerName: string) {
    const fields = ["_id", "name"];
    return await CareerModel.findOne({ name: careerName }).select(fields.join(" "));
  }

  static async findByCareerId(careerId: ObjectId | string) {
    const fields = ["_id", "name"];
    return await CareerModel.findOne({ _id: careerId }).select(fields.join(" "));
  }
}

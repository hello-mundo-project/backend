import { ObjectId, model } from "mongoose";
import { citySchema } from "../schemas";

export const CityModel = model("City", citySchema);

export class City {
  static async findAllCity() {
    const fields = ["_id", "name"];
    return await CityModel.find({}).select(fields.join(" "));
  }

  static async findByCityName(cityName: string) {
    const fields = ["_id", "name"];
    return await CityModel.findOne({ name: cityName }).select(fields.join(" "));
  }

  static async findByCityId(cityId: ObjectId) {
    const fields = ["_id", "name"];
    return await CityModel.findOne({ _id: cityId }).select(fields.join(" "));
  }
}

import { ObjectId, model } from "mongoose";
import { districtSchema } from "../schemas";

export const DistrictModel = model("District", districtSchema);

export class District {
  static async findAllDistrict(cityId: ObjectId | string) {
    const fields = ["_id", "name", "city_id"];
    return await DistrictModel.find({ city_id: cityId }).select(fields.join(" "));
  }

  static async findOneDistrictByDistrictId(districtId: ObjectId | string) {
    const fields = ["_id", "name"];
    return await DistrictModel.find({ _id: districtId }).populate("city_id").select(fields.join(" "));
  }
}

import { ObjectId } from "mongoose";
import { District } from "../models";

export class DistrictService {
  static async getAllDistrict(cityId: ObjectId | string) {
    return await District.findAllDistrict(cityId);
  }
}

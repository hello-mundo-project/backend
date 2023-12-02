import { Career } from "../models";

export class CareerService {
  static async getAllCareer() {
    return await Career.findAllCareer();
  }

  static async getCareer(careerName: string) {
    return await Career.findByCareerName(careerName);
  }
}

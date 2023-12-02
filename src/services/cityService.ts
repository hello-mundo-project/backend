import { City } from "../models";

export class CityService {
  static async getAllCity() {
    return await City.findAllCity();
  }

  static async getCity(cityName: string) {
    return await City.findByCityName(cityName);
  }
}

import { Router } from "express";
import { CityService } from "../services/cityService";
import { asyncHandler } from "../utils/asyncHandler";
import { ErrorHandler } from "../utils/errorHandler";
import { mappingCity } from "../utils/mappingString";

const cityRouter = Router();

cityRouter.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const cities = await CityService.getAllCity();
    res.status(200).json({ status: 200, message: "성공", data: cities });
  })
);

cityRouter.get(
  "/:cityName",
  asyncHandler(async (req, res, next) => {
    const cityName: string = mappingCity(req.params?.cityName);
    const city = await CityService.getCity(cityName);
    if (!city) throw ErrorHandler.BadRequest();

    res.status(200).json({ status: 200, message: "성공", data: city });
  })
);

export { cityRouter };

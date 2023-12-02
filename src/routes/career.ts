import { Router } from "express";
import { CareerService } from "../services/careerService";
import { asyncHandler } from "../utils/asyncHandler";
import { ErrorHandler } from "../utils/errorHandler";
import { mappingCareer } from "../utils/mappingString";

const careerRouter = Router();

careerRouter.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const careers = await CareerService.getAllCareer();
    res.status(200).json({ status: 200, message: "성공", data: careers });
  })
);

careerRouter.get(
  "/:careerName",
  asyncHandler(async (req, res, next) => {
    const careerName: string = mappingCareer(req.params?.careerName);
    const career = await CareerService.getCareer(careerName);
    if (!career) throw ErrorHandler.BadRequest();

    res.status(200).json({ status: 200, message: "성공", data: career });
  })
);

export { careerRouter };

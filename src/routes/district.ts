import { Router } from "express";
import { ObjectId } from "mongoose";
import { DistrictService } from "../services/districtService";
import { asyncHandler } from "../utils/asyncHandler";
import { ErrorHandler } from "../utils/errorHandler";

const districtRouter = Router();
districtRouter.get(
  "/:cityId",
  asyncHandler(async (req, res, next) => {
    const cityId: ObjectId | string = req.params?.cityId;
    const districts = await DistrictService.getAllDistrict(cityId);
    if (!districts) throw ErrorHandler.BadRequest();

    res.status(200).json({ status: 200, message: "성공", data: districts });
  })
);

export { districtRouter };

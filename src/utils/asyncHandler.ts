import { RequestHandler } from "express";
import { AsyncRequestHandler } from "../types/asyncRequestHandler";

export const asyncHandler = (requestHandler: AsyncRequestHandler): RequestHandler => {
  return async (req, res, next) => {
    try {
      await requestHandler(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

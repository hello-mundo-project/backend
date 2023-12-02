import { Request, Response, NextFunction } from "express";
import { ObjectId } from "mongoose";
import { verifyJWT } from "../utils/jwt";
import { ErrorHandler } from "../utils/errorHandler";
import { JWT_ERROR_NAME } from "../types/jwt.d";

export async function checkJwt(req: Request, res: Response, next: NextFunction) {
  try {
    const accessToken = req.cookies?._ast;
    if (!accessToken) {
      throw ErrorHandler.Unauthorized();
    }

    if (!(req.user as { id: ObjectId })?.id) {
      const decodedAccessToken = await verifyJWT(accessToken);
      const tokenErrorName: JWT_ERROR_NAME = decodedAccessToken?.name;
      if (tokenErrorName == ("SyntaxError" || "JsonWebTokenError")) {
        throw ErrorHandler.Unauthorized();
      }
      req.user = { id: decodedAccessToken.id };
    }

    next();
  } catch (error) {
    next(error);
  }
}

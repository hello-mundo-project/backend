/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";
import { signJWT, verifyJWT } from "../utils/jwt";
import { ErrorHandler } from "../utils/errorHandler";
import { JWT_ERROR_NAME } from "../types/jwt.d";

const ONE_HOUR_MS = 60 * 60 * 1000;
const THREE_DAYS_MS = 60 * 60 * 24 * 1000 * 3;

export async function issueJwt(req: Request, res: Response, next: NextFunction) {
  try {
    // 토큰 존재 여부 확인
    const token = req.cookies?._ast;
    if (!token) return next();

    // 존재할 경우 id 값 확보를 위한 디코딩
    const decodedToken = await verifyJWT(token);
    const tokenErrorName: JWT_ERROR_NAME = decodedToken?.name;

    // 완전히 만료, 만료 시간이 1시간 미만
    if (tokenErrorName == "TokenExpiredError" || !isOneHourRemainToken(decodedToken)) {
      const payload = await decodedBase64Payload(token);
      const accessToken = await signJWT({ id: payload.id }, "access");

      res.cookie("_ast", accessToken, {
        httpOnly: true,
        maxAge: THREE_DAYS_MS,
        sameSite: "strict"
      });
      req.user = { id: payload.id };
    }

    next();
  } catch (error) {
    next(error);
  }
}

async function decodedBase64Payload(token: string): Promise<any> {
  try {
    const payload = token.split(".")[1];
    const decodedPayload = Buffer.from(payload, "base64").toString("utf-8");
    return JSON.parse(decodedPayload);
  } catch (error) {
    throw ErrorHandler.Unauthorized();
  }
}

function isOneHourRemainToken(decodedToken: any): boolean {
  const remainExpirationTime = decodedToken?.exp * 1000 - Date.now();
  return remainExpirationTime <= ONE_HOUR_MS;
}

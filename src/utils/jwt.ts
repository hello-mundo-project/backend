/* eslint-disable @typescript-eslint/no-explicit-any */
import { TokenType } from "../types/jwt.d";
import jwt, { SignOptions, VerifyErrors } from "jsonwebtoken";

const options = (type: TokenType) => {
  const option: SignOptions = { algorithm: "HS256" };
  option.expiresIn = type === "access" ? "6h" : "3d";
  return option;
};

export async function signJWT(payload: { id: string }, type: TokenType) {
  const secret = process.env.JWT_SECRET!;
  return jwt.sign(payload, secret, options(type));
}

export async function verifyJWT(token: string): Promise<any | VerifyErrors> {
  const secret = process.env.JWT_SECRET!;
  return jwt.verify(token, secret, (error, decoded) => {
    if (error) return error;
    return decoded;
  });
}

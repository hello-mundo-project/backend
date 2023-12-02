/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from "express";
import { ObjectId } from "mongoose";

declare global {
  namespace Express {
    interface User {
      id: ObjectId | string;
    }

    interface Request {
      user?: User | undefined;
    }
  }
}

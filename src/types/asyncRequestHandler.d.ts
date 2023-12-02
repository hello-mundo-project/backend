/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";

export type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;

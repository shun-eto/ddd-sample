import { NextFunction, Request, Response } from "express";

export function authMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  req.userId = "user-id";

  next();
}

declare global {
  export namespace Express {
    export interface Request {
      userId: string;
    }
  }
}

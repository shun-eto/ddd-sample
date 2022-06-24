import { NextFunction, Request, Response } from "express";
import { HttpException } from "~src/assets/exception/http-exception";

export function authMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new HttpException("認証不可", "UNAUTHORIZED");
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    throw new HttpException("認証不可", "UNAUTHORIZED");
  }

  /** ここでTokenのverifyを行なったりして、userIdとかを抜き出す */
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

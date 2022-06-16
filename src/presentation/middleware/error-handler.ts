import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../assets/exception/http-exception";

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) {
  if (error instanceof HttpException) {
    return res
      .status(error.statusCode)
      .json({ message: error.message, context: error.context })
      .end();
  }

  //  その他の例外
  else {
    return res.status(500).json({ message: "System Error" }).end();
  }
}

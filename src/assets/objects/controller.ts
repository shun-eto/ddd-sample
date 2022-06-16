import { NextFunction, Request, Response } from "express";
import { JSONSchema7 } from "json-schema";
import { log } from "src/utils/log";

type Method = "get" | "post" | "patch" | "delete" | "put";
interface Schema {
  body?: JSONSchema7;
  query?: JSONSchema7;
  params?: JSONSchema7;
}

export abstract class Controller<Req, Res> {
  readonly method: Method;
  readonly path: string;
  readonly middlewares: ((
    req: Request,
    res: Response,
    next: NextFunction
  ) => void)[];
  readonly schema: Schema;

  constructor(controller: {
    method: Method;
    path: string;
    middlewares: ((req: Request, res: Response, next: NextFunction) => void)[];
    schema: Schema;
  }) {
    this.method = controller.method;
    this.path = controller.path;
    this.middlewares = controller.middlewares;
    this.schema = controller.schema;

    log.url(this.method, this.path);
  }

  abstract handle(req: Req, res: Res, _next: NextFunction): Promise<Res>;
}

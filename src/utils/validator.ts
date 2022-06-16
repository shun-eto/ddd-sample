import Ajv from "ajv";
import { NextFunction, Request, Response } from "express";
import { JSONSchema7 } from "json-schema";
import { HttpException } from "../assets/exception/http-exception";

export interface Schema {
  body?: JSONSchema7;
  query?: JSONSchema7;
  params?: JSONSchema7;
}

export function validator(schema?: Schema) {
  const ajv = new Ajv();

  const bodyValidate = schema?.body && ajv.compile(schema.body);
  const queryValidate = schema?.query && ajv.compile(schema.query);
  const paramsValidate = schema?.params && ajv.compile(schema.params);

  return (req: Request, res: Response, next: NextFunction) => {
    if (bodyValidate) {
      const valid = bodyValidate(req.body);
      if (!valid) {
        throw new HttpException(
          "'body'におけるバリデーションエラーを検知しました。",
          "VALIDATION_ERROR"
        );
      }
    }

    if (queryValidate) {
      const valid = queryValidate(req.query);
      if (!valid) {
        throw new HttpException(
          "'query'におけるバリデーションエラーを検知しました。",
          "VALIDATION_ERROR"
        );
      }
    }

    if (paramsValidate) {
      const valid = paramsValidate(req.params);
      if (!valid) {
        throw new HttpException(
          "'params'におけるバリデーションエラーを検知しました。",
          "VALIDATION_ERROR"
        );
      }
    }

    next();
  };
}

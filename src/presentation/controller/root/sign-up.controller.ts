import { NextFunction, Request, Response } from "express";
import {
  SignUpCommand,
  SignUpService
} from "~src/application/services/sign-up.service";
import { Controller } from "~src/assets/objects/controller";

type SignUpRequest = Request<
  {},
  {},
  {
    lastName: string;
    firstName: string;
    role: string;
  }
>;

type SignUpResponse = Response<{
  ok: boolean;
}>;

export class SignUpController extends Controller<
  SignUpRequest,
  SignUpResponse
> {
  constructor(private readonly signUpService: SignUpService) {
    super({
      method: "post",
      middlewares: [],
      path: "/sign-up",
      schema: {
        body: {
          type: "object",
          properties: {
            lastName: { type: "string" },
            firstName: { type: "string" },
            role: { type: "string" }
          },
          additionalProperties: false,
          required: ["lastName", "firstName", "role"]
        }
      }
    });
  }

  async handle(
    req: SignUpRequest,
    res: SignUpResponse,
    _next: NextFunction
  ): Promise<SignUpResponse> {
    const command = new SignUpCommand({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: req.body.role
    });
    const result = await this.signUpService.execute(command);

    return res.json({ ok: result.ok });
  }
}

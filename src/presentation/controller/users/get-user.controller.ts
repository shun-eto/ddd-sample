import { NextFunction, Request, Response } from "express";
import {
  GetUserCommand,
  GetUserService
} from "~src/application/services/get-user.service";
import { Controller } from "~src/assets/objects/controller";
import { UserDto } from "~src/domain/entities/dto/user.dto";
import { authMiddleware } from "~src/presentation/middleware/auth.middleware";

type GetUserRequest = Request<
  {
    userId: string;
  },
  {},
  {},
  {}
>;

type GetUserResponse = Response<{
  ok: boolean;
  user: UserDto.PublicData;
}>;

export class GetUserController extends Controller<
  GetUserRequest,
  GetUserResponse
> {
  constructor(private readonly getUserService: GetUserService) {
    super({
      method: "get",
      middlewares: [authMiddleware],
      path: "/users/:userId",
      schema: {
        params: {
          type: "object",
          properties: {
            userId: { type: "string" }
          },
          additionalProperties: false,
          required: ["userId"]
        }
      }
    });
  }

  async handle(
    req: GetUserRequest,
    res: GetUserResponse,
    _next: NextFunction
  ): Promise<GetUserResponse> {
    const command = new GetUserCommand({
      userId: req.params.userId
    });
    const result = await this.getUserService.execute(command);

    return res.json({
      ok: result.ok,
      user: result.user
    });
  }
}

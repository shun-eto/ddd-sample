import { HttpException } from "~src/assets/exception/http-exception";
import {
  Service,
  ServiceCommand,
  ServiceResult
} from "~src/assets/objects/service";
import { UserDto } from "~src/domain/entities/dto/user.dto";
import { UserId } from "~src/domain/entities/values/user/id.value";
import { UserRepositoryImplements } from "../repositories/user.repository";

export class GetUserCommand extends ServiceCommand {
  readonly userId: string;

  constructor(command: GetUserCommand) {
    super(command);
    this.userId = command.userId;
  }
}

export class GetUserResult extends ServiceResult {
  readonly user: UserDto.PublicData;

  constructor(result: GetUserResult) {
    super(result);
    this.user = result.user;
  }
}

export class GetUserService extends Service<GetUserCommand, GetUserResult> {
  constructor(private readonly userRepository: UserRepositoryImplements) {
    super();
  }

  async execute(command: GetUserCommand): Promise<GetUserResult> {
    const foundUser = await this.userRepository.findOneById(
      new UserId(command.userId)
    );
    if (!foundUser) {
      throw new HttpException("ユーザーが見つかりませんでした。", "NOT_FOUND");
    }

    const result = new GetUserResult({
      ok: true,
      user: foundUser.toPublicData()
    });
    return result;
  }
}

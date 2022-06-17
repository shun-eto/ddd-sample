import {
  Service,
  ServiceCommand,
  ServiceResult
} from "~src/assets/objects/service";
import { User } from "~src/domain/entities/user.entity";
import { UserRepositoryImplements } from "../repositories/user.repository";
import * as uuid from "uuid";
import { UserService } from "~src/domain/service/user.service";
import { HttpException } from "~src/assets/exception/http-exception";

export class SignUpCommand extends ServiceCommand {
  readonly firstName: string;
  readonly lastName: string;
  readonly role: string;

  constructor(command: SignUpCommand) {
    super(command);
    this.firstName = command.firstName;
    this.lastName = command.lastName;
    this.role = command.role;
  }
}

export class SignUpResult extends ServiceResult {
  constructor(result: SignUpResult) {
    super(result);
  }
}

export class SignUpService extends Service<SignUpCommand, SignUpResult> {
  constructor(
    private readonly userRepository: UserRepositoryImplements,
    private readonly userService: UserService
  ) {
    super();
  }

  /** @todo activateCode は メール等で送信する必要がある */
  async execute(command: SignUpCommand): Promise<SignUpResult> {
    const activateCode = uuid.v4();

    const user = new User({
      id: uuid.v4(),
      firstName: command.firstName,
      lastName: command.lastName,
      role: command.role,
      activated: false,
      activateCode,
      createdAt: new Date(),
      updatedAt: null
    });

    if (await this.userService.exist(user)) {
      throw new HttpException("既に同じユーザーが存在します。", "CONFLICT");
    }

    const savedResult = await this.userRepository.save(user);

    const result = new SignUpResult({
      ok: savedResult.ok
    });
    return result;
  }
}

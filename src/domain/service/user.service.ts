import { UserRepositoryImplements } from "~src/application/repositories/user.repository";
import { User } from "../entities/user.entity";

export class UserService {
  constructor(private readonly userRepository: UserRepositoryImplements) {}

  async exist(user: User): Promise<boolean> {
    const foundUser = await this.userRepository.findOneById(user.id);
    return Boolean(foundUser);
  }
}

import { Db } from "mongodb";
import { UserRepositoryImplements } from "~src/application/repositories/user.repository";
import { UserRepository } from "~src/infrastructure/repositories/user.repository";

export class RepositoriesModule {
  readonly userRepository: UserRepositoryImplements;

  constructor(db: Db) {
    this.userRepository = new UserRepository(db);
  }
}

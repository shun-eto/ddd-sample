import { response } from "express";
import { SignUpService } from "~src/application/services/sign-up.service";
import { UserService } from "~src/domain/service/user.service";
import { RepositoriesModule } from "./repositories.module";

export class ServicesModule {
  //  domain service
  readonly userService: UserService;
  //  application service
  readonly signUpService: SignUpService;

  constructor(private readonly repositoriesModule: RepositoriesModule) {
    //  domain service
    this.userService = new UserService(repositoriesModule.userRepository);
    //  application service
    this.signUpService = new SignUpService(
      repositoriesModule.userRepository,
      this.userService
    );
  }
}

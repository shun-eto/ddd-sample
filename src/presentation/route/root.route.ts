import { Route } from "~src/assets/objects/route";
import { Express } from "express";
import { ServicesModule } from "~src/modules/services.module";
import { SignUpController } from "../controller/root/sign-up.controller";

export class RootRoute extends Route {
  constructor(app: Express, servicesModule: ServicesModule) {
    super({
      app,
      controllers: [new SignUpController(servicesModule.signUpService)]
    });
  }
}

import { Route } from "~src/assets/objects/route";
import { Express } from "express";
import { ServicesModule } from "~src/modules/services.module";

export class UserRoute extends Route {
  constructor(app: Express, servicesModule: ServicesModule) {
    super({
      app,
      controllers: []
    });
  }
}

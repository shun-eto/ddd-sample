import { Controller } from "./controller";
import { Express, NextFunction, Request, Response } from "express";
import { validator } from "~src/utils/validator";

export abstract class Route {
  private readonly app: Express;

  constructor(route: {
    app: Express;
    controllers: Controller<unknown, unknown>[];
  }) {
    this.app = route.app;
    route.controllers.forEach(controller => this.router(controller));
  }

  private router(controller: Controller<unknown, unknown>) {
    this.app[controller.method](
      controller.path,
      validator(controller.schema),
      controller.middlewares.map(middleware => middleware),
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          await controller.handle(req, res, next);
        } catch (error) {
          next(error);
        }
      }
    );
  }
}

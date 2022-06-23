import express, { Express } from "express";
import { errorHandler } from "./presentation/middleware/error-handler.middleware";
import cors from "cors";
import { corsOptions } from "./utils/cors";
import { RepositoriesModule } from "./modules/repositories.module";
import { ServicesModule } from "./modules/services.module";
import { RootRoute } from "./presentation/route/root.route";
import { UserRoute } from "./presentation/route/user.route";
import { Db } from "mongodb";

export default (db: Db): Express => {
  const app = express();

  //  basic middleware
  app.use(cors(corsOptions));
  app.get("/", (_, res) => res.json({ ok: true }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));
  app.use(express.json({ limit: "50mb" }));

  const repositoriesModule = new RepositoriesModule(db);
  const servicesModule = new ServicesModule(repositoriesModule);

  new RootRoute(app, servicesModule);
  new UserRoute(app, servicesModule);

  //  errorHandler
  app.use(errorHandler);

  return app;
};

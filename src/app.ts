import express, { Express } from "express";
import { errorHandler } from "./presentation/middleware/error-handler";
import cors from "cors";
import { corsOptions } from "./presentation/middleware/cors";

export default (): Express => {
  const app = express();

  //  basic middleware
  app.use(cors(corsOptions));
  app.get("/", (_, res) => res.json({ ok: true }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));
  app.use(express.json({ limit: "50mb" }));

  //  errorHandler
  app.use(errorHandler);

  return app;
};

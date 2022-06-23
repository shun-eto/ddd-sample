import app from "./app";
import http from "http";
import { env } from "./utils/env";
import { log } from "./utils/log";
import { MongoDB } from "./infrastructure/db/mongo.db";

async function main() {
  const mongoDb = new MongoDB();
  await mongoDb.connect();

  const server = http.createServer(app(mongoDb.db));
  server.listen(env.PORT, () => {
    log.success(`>>> Connected Server : PORT -> ${env.PORT}`);
  });
}

main();

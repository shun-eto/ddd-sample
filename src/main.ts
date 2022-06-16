import app from "./app";
import http from "http";
import { env } from "./utils/env";
import { log } from "./utils/log";

async function main() {
  const server = http.createServer(await app());
  server.listen(env.PORT, () => {
    log.success(`>>> Connected Server : PORT -> ${env.PORT}`);
  });
}

main();

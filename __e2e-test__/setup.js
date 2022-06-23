const { MongoMemoryServer } = require("mongodb-memory-server-core");

module.exports = async () => {
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  global.MONGO_MEMORY_SERVER = mongoServer;

  process.env = {
    PORT: "PORT",
    MONGO_URI: "MONGO_URI",
    CRYPT_SALT: "CRYPT_SALT",
    SECRET_KEY: "SECRET_KEY",
    JWT_SECRET_KEY: "JWT_SECRET_KEY",
    CRYPT_SECRET_KEY: "CRYPT_SECRET_KEY",
    MONGO_TEST_URI: mongoUri
  };
  console.log(">> setup");
};

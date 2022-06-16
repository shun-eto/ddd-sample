import { HttpException } from "~src/assets/exception/http-exception";

class EnvModule {
  readonly MONGO_TEST_URI?: string;

  readonly PORT: string;
  readonly MONGO_URI: string;
  readonly CRYPT_SALT: string;
  readonly SECRET_KEY: string;
  readonly JWT_SECRET_KEY: string;
  readonly CRYPT_SECRET_KEY: string;

  constructor() {
    this.MONGO_TEST_URI = process.env.MONGO_TEST_URI;

    if (!process.env.CRYPT_SALT)
      throw new HttpException("'CRYPT_SALT'が不適切です", "ENV_ERROR");
    this.CRYPT_SALT = process.env.CRYPT_SALT;

    if (!process.env.SECRET_KEY)
      throw new HttpException("'SECRET_KEY'が不適切です", "ENV_ERROR");
    this.SECRET_KEY = process.env.SECRET_KEY;

    if (!process.env.JWT_SECRET_KEY)
      throw new HttpException("'JWT_SECRET_KEY'が不適切です", "ENV_ERROR");
    this.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

    if (!process.env.PORT)
      throw new HttpException("'PORT'が不適切です", "ENV_ERROR");
    this.PORT = process.env.PORT;

    if (!process.env.MONGO_URI)
      throw new HttpException("'MONGO_URI'が不適切です", "ENV_ERROR");
    this.MONGO_URI = process.env.MONGO_URI;

    if (!process.env.CRYPT_SECRET_KEY)
      throw new HttpException("'CRYPT_SECRET_KEY'が不適切です", "ENV_ERROR");
    this.CRYPT_SECRET_KEY = process.env.CRYPT_SECRET_KEY;
  }
}

const env = new EnvModule();

export { env };

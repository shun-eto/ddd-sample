import { Db, MongoClient } from "mongodb";
import { env } from "~src/utils/env";

export class MongoDB {
  private readonly _uri: string;
  private readonly _dbName = "ddd_sample";
  private client!: MongoClient;
  private _db!: Db;

  constructor() {
    this._uri = env.MONGO_TEST_URI || env.MONGO_URI;
  }

  get db() {
    return this._db;
  }

  /** DBとの接続 */
  async connect() {
    this.client = await MongoClient.connect(this._uri);
    const db = this.client.db(this._dbName);
    this._db = db;
  }

  /** DBとの切断 */
  async close() {
    await this.client.close();
  }
}

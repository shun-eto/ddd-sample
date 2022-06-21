import { Collection, MongoClient } from "mongodb";
import { env } from "~src/utils/env";

export interface RepositoryImplements {
  connect(): Promise<void>;
  close(): Promise<void>;
  clear(): Promise<void>;
}

export class Repository<Model> {
  private readonly _uri: string;
  private readonly _collectionName: string;
  private readonly _dbName = "ddd_sample";
  private client!: MongoClient;
  protected collection!: Collection<Model>;

  /**
   * @param collectionName スネークケースとすること
   */
  constructor(collectionName: string) {
    this._uri = env.MONGO_TEST_URI || env.MONGO_URI;
    this._collectionName = collectionName;
  }

  /** DBとの接続 */
  async connect() {
    this.client = await MongoClient.connect(this._uri);
    const db = this.client.db(this._dbName);
    this.collection = db.collection<Model>(this._collectionName);
  }

  /** DBとの切断 */
  async close() {
    await this.client.close();
  }

  /** Collectionの中をclearする */
  async clear() {
    await this.collection.deleteMany({});
  }
}

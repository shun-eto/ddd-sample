import { Collection, Db } from "mongodb";

export interface RepositoryImplements {
  clear(): Promise<void>;
}

export class Repository<Model> {
  protected collection!: Collection<Model>;

  constructor(db: Db, collectionName: string) {
    this.collection = db.collection<Model>(collectionName);
  }

  /** Collectionの中をclearする */
  async clear() {
    await this.collection.deleteMany({});
  }
}

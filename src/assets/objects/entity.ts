import { Id } from "./id";

export abstract class Entity<Model> {
  private readonly _id: Id;

  constructor(id: Id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  abstract toModel(): Model;
}

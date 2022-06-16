import { Id } from "./id";

export abstract class Entity<Model> {
  private readonly _id: Id;

  constructor(id: Id) {
    this._id = id;
  }

  get id(): string {
    return this._id.value;
  }

  abstract toModel(): Model;
}

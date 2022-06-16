import { Model } from "~src/assets/objects/model";

export class UserModel extends Model {
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly created_at: Date;
  readonly update_at: Date | null;

  constructor(data: {
    id: string;
    name: { firstName: string; lastName: string };
    createdAt: Date;
    updatedAt: Date | null;
  }) {
    super();
    this.id = data.id;
    this.first_name = data.name.firstName;
    this.last_name = data.name.lastName;
    this.created_at = data.createdAt;
    this.update_at = data.updatedAt;
  }
}

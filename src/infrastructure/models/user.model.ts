import { Model } from "~src/assets/objects/model";

export class UserModel extends Model {
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly role: string;
  readonly activated: boolean;
  readonly activate_code: string;
  readonly created_at: Date;
  readonly updated_at: Date | null;

  constructor(data: {
    id: string;
    name: { firstName: string; lastName: string };
    role: string;
    activated: boolean;
    activateCode: string;
    createdAt: Date;
    updatedAt: Date | null;
  }) {
    super();
    this.id = data.id;
    this.first_name = data.name.firstName;
    this.last_name = data.name.lastName;
    this.role = data.role;
    this.activated = data.activated;
    this.activate_code = data.activateCode;
    this.created_at = data.createdAt;
    this.updated_at = data.updatedAt;
  }
}

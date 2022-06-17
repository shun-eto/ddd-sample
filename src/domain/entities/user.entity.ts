import { Entity } from "~src/assets/objects/entity";
import { UserModel } from "~src/infrastructure/models/user.model";
import { UserDto } from "./dto/user.dto";
import { CreatedAt } from "./values/created-at.value";
import { UpdatedAt } from "./values/updated-at.value";
import { UserActivateCode } from "./values/user/activate-code.value";
import { UserActivated } from "./values/user/activated.value";
import { UserId } from "./values/user/id.value";
import { UserName } from "./values/user/name.value";
import { UserRole } from "./values/user/role.value";

export class User extends Entity<UserModel> {
  private readonly _name: UserName;
  private readonly _role: UserRole;
  private _activated: UserActivated;
  private readonly _activateCode: UserActivateCode;
  private readonly _createdAt: CreatedAt;
  private _updatedAt: UpdatedAt;

  constructor(data: {
    id: string;
    firstName: string;
    lastName: string;
    role: string;
    activated: boolean;
    activateCode: string;
    createdAt: Date;
    updatedAt: Date | null;
  }) {
    super(new UserId(data.id));
    this._name = new UserName(data.lastName, data.firstName);
    this._role = new UserRole(data.role);
    this._activated = new UserActivated(data.activated);
    this._activateCode = new UserActivateCode(data.activateCode);
    this._createdAt = new CreatedAt(data.createdAt);
    this._updatedAt = new UpdatedAt(data.updatedAt);
  }

  toModel(): UserModel {
    return {
      id: this.id.value,
      first_name: this._name.value.firstName,
      last_name: this._name.value.lastName,
      role: this._role.value,
      activated: this._activated.value,
      activate_code: this._activateCode.value,
      created_at: this._createdAt.value,
      updated_at: this._updatedAt.value
    };
  }

  get canFindUser() {
    if (!this._activated.value) return false;
    if (!this._role.canFindUser) return false;

    return true;
  }

  toPublicData(): UserDto.PublicData {
    return {
      id: this.id.value,
      displayName: this._name.displayName("ja")
    };
  }

  activate(code: string): boolean {
    const activateCode = new UserActivateCode(code);
    if (!this._activateCode.equal(activateCode)) return false;

    this._activated = new UserActivated(true);
    this._updatedAt = new UpdatedAt(new Date());
    return true;
  }
}

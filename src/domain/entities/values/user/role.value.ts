import { HttpException } from "~src/assets/exception/http-exception";

type Role = "manager" | "iam";

export class UserRole {
  private readonly _value: Role;

  constructor(value: string) {
    if (!this.validate(value)) {
      throw new HttpException(
        "不適切なロールを検出しました。",
        "BAD_VALUE_OBJECT"
      );
    }

    this._value = value;
  }

  get value() {
    return this._value;
  }

  private validate(value: string): value is Role {
    switch (value) {
      case "manager":
      case "iam":
        return true;

      default:
        return false;
    }
  }

  get canFindUser(): boolean {
    switch (this._value) {
      case "manager":
        return true;

      case "iam":
      default:
        return false;
    }
  }
}

export class UserActivateCode {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  equal(code: UserActivateCode) {
    return this._value === code.value;
  }
}

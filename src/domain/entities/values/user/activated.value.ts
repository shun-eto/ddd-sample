export class UserActivated {
  private readonly _value: boolean;

  constructor(value: boolean) {
    this._value = value;
  }

  get value() {
    return this._value;
  }
}

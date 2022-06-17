export class UpdatedAt {
  private readonly _value: Date | null;

  constructor(value: Date | null) {
    this._value = value;
  }

  get value() {
    return this._value;
  }
}

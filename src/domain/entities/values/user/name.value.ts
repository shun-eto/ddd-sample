export class UserName {
  private readonly _lastName: string;
  private readonly _firstName: string;

  constructor(lastName: string, firstName: string) {
    this._lastName = lastName;
    this._firstName = firstName;
  }

  get value() {
    return {
      lastName: this._lastName,
      firstName: this._firstName
    };
  }

  displayName(lang?: "ja" | "en"): string {
    if (lang === "en") {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return `${this._lastName} ${this._firstName}`;
    }
  }
}

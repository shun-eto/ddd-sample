import { User } from "~src/domain/entities/user.entity";

export class UserGenerator {
  constructor() {}

  generateActiveUser(id: string): User {
    const user = new User({
      id,
      firstName: "test-first-name",
      lastName: "test-last-name",
      role: "manager",
      activated: true,
      activateCode: "test-activate-code",
      createdAt: new Date(),
      updatedAt: null
    });

    return user;
  }
}

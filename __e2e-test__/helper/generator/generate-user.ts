import { User } from "../../../src/domain/entities/user.entity";

export function generateUser(
  userId: string,
  option?: {
    activate: boolean;
  }
): User {
  const user = new User({
    id: userId || "test-id",
    firstName: "test-first-name",
    lastName: "test-last-name",
    role: "manager",
    activated: option?.activate || false,
    activateCode: "test-activate-code",
    createdAt: new Date(),
    updatedAt: null
  });

  return user;
}

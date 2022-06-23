import { Db } from "mongodb";
import { UserRepository } from "../../../src/infrastructure/repositories/user.repository";
import { generateUser } from "../generator/generate-user";

export async function seedActivateUser(db: Db, userId?: string) {
  const id = userId || "test-active-user";
  const userRepository = new UserRepository(db);
  const testUser = generateUser(id, { activate: true });

  await userRepository.save(testUser);
}

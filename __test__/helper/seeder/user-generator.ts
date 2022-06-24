import { UserRepositoryImplements } from "~src/application/repositories/user.repository";
import { User } from "~src/domain/entities/user.entity";

export class UserSeeder {
  constructor(private readonly userRepository: UserRepositoryImplements) {}

  async seedActiveUser(id: string): Promise<{ ok: boolean }> {
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

    const result = await this.userRepository.save(user);

    return { ok: result.ok };
  }
}

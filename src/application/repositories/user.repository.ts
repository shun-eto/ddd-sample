import { RepositoryImplements } from "~src/assets/objects/repository";
import { User } from "~src/domain/entities/user.entity";
import { UserId } from "~src/domain/entities/values/user/id.value";

export interface UserRepositoryImplements extends RepositoryImplements {
  save(user: User): Promise<{ ok: boolean }>;
  findOneById(userId: UserId): Promise<User | null>;
}

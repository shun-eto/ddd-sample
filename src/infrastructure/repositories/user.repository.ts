import { Db, WithId } from "mongodb";
import { UserRepositoryImplements } from "~src/application/repositories/user.repository";
import { Repository } from "~src/assets/objects/repository";
import { User } from "~src/domain/entities/user.entity";
import { UserId } from "~src/domain/entities/values/user/id.value";
import { UserModel } from "../models/user.model";

export class UserRepository
  extends Repository<UserModel>
  implements UserRepositoryImplements
{
  constructor(db: Db) {
    super(db, "users");
  }

  async save(user: User): Promise<{ ok: boolean }> {
    const model = user.toModel();
    const foundUser = await this.findOneById(user.id);
    if (foundUser) {
      await this.collection.updateOne({ id: user.id }, { $set: model });
    } else {
      await this.collection.insertOne(model);
    }

    return { ok: true };
  }

  async findOneById(userId: UserId): Promise<User | null> {
    const result = await this.collection.findOne({ id: userId.value });
    if (!result) return null;

    const user = this.generateUser(result);
    return user;
  }

  generateUser(model: WithId<UserModel> | UserModel): User {
    const user = new User({
      id: model.id,
      lastName: model.last_name,
      firstName: model.first_name,
      createdAt: model.created_at,
      updatedAt: model.updated_at,
      activateCode: model.activate_code,
      activated: model.activated,
      role: model.role
    });

    return user;
  }
}

import { UserRepositoryImplements } from "~src/application/repositories/user.repository";
import { UserId } from "~src/domain/entities/values/user/id.value";
import { MongoDB } from "~src/infrastructure/db/mongo.db";
import { UserRepository } from "~src/infrastructure/repositories/user.repository";
import { UserGenerator } from "~__test__/helper/generator/user-generator";

describe("unit : user repository", () => {
  let mongoDb: MongoDB;
  let userRepository: UserRepositoryImplements;
  let userGenerator: UserGenerator;

  beforeAll(async () => {
    mongoDb = new MongoDB();

    await mongoDb.connect();
    userRepository = new UserRepository(mongoDb.db);
    userGenerator = new UserGenerator();
  });

  afterAll(async () => {
    await mongoDb.close();
  });

  it("to be defined", () => {
    expect(mongoDb).toBeDefined();
    expect(userRepository).toBeDefined();
    expect(userGenerator).toBeDefined();
  });

  describe("methods", () => {
    it("save and findOneById", async () => {
      const userId = "test-user-id";
      const activeUser = userGenerator.generateActiveUser(userId);
      const saveResult = await userRepository.save(activeUser);
      expect(saveResult.ok).toStrictEqual(true);

      const foundResult = await userRepository.findOneById(new UserId(userId));
      expect(foundResult?.id.value).toStrictEqual(userId);
    });
  });
});

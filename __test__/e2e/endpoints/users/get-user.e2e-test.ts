import request from "supertest";
import app from "~src/app";
import { UserRepositoryImplements } from "~src/application/repositories/user.repository";
import { MongoDB } from "~src/infrastructure/db/mongo.db";
import { UserRepository } from "~src/infrastructure/repositories/user.repository";
import { UserSeeder } from "~__test__/helper/seeder/user-generator";
import { AuthService } from "~__test__/helper/service/auth.service";

describe("get user e2e", () => {
  let mongoDb: MongoDB;
  let userRepository: UserRepositoryImplements;
  let authService: AuthService;
  let userSeeder: UserSeeder;

  beforeAll(async () => {
    mongoDb = new MongoDB();
    await mongoDb.connect();

    userRepository = new UserRepository(mongoDb.db);
    authService = new AuthService(userRepository);
    userSeeder = new UserSeeder(userRepository);
  });

  afterAll(async () => {
    await mongoDb.close();
  });

  it("to be defined", () => {
    expect(mongoDb).toBeDefined();
    expect(userRepository).toBeDefined();
    expect(authService).toBeDefined();
    expect(UserSeeder).toBeDefined();
  });

  describe("request", () => {
    beforeEach(() => {
      userRepository.clear();
    });

    it("success", async () => {
      const userId = "active-user";
      await userSeeder.seedActiveUser(userId);
      const token = await authService.sign(userId);

      const response = await request(app(mongoDb.db))
        .get(`/users/${userId}`)
        .set("Authorization", token)
        .expect(200);

      expect(response.body.ok).toStrictEqual(true);
    });

    it("failed : 401 error", async () => {
      const userId = "active-user";
      await userSeeder.seedActiveUser(userId);
      await request(app(mongoDb.db)).get(`/users/${userId}`).expect(401);
    });
  });
});

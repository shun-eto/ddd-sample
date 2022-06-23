import request from "supertest";
import app from "../../../src/app";
import { MongoDB } from "../../../src/infrastructure/db/mongo.db";
import { seedActivateUser } from "../../helper/seeder/seed-activate-user";

describe("get user e2e", () => {
  let mongoDb: MongoDB;

  const userId = "active-user";

  beforeAll(async () => {
    mongoDb = new MongoDB();
    await mongoDb.connect();

    await seedActivateUser(mongoDb.db, userId);
  });

  afterAll(async () => {
    await mongoDb.close();
  });

  it("to be defined", () => {
    expect(mongoDb).toBeDefined();
  });

  describe("request", () => {
    it("success", async () => {
      const response = await request(app(mongoDb.db))
        .get(`/users/${userId}`)
        .expect(200);

      expect(response.body.ok).toStrictEqual(true);
    });
  });
});

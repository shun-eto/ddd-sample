import request from "supertest";
import app from "../../../src/app";
import { MongoDB } from "../../../src/infrastructure/db/mongo.db";

describe("sign up e2e", () => {
  let mongoDb: MongoDB;

  beforeAll(async () => {
    mongoDb = new MongoDB();
    await mongoDb.connect();
  });

  afterAll(async () => {
    await mongoDb.close();
  });

  it("to be defined", () => {
    expect(mongoDb).toBeDefined();
  });

  describe("request", () => {
    it("success", async () => {
      const body = {
        lastName: "lastName",
        firstName: "firstName",
        role: "manager"
      };
      const response = await request(app(mongoDb.db))
        .post("/sign-up")
        .send(body)
        .expect(200);

      expect(response.body.ok).toStrictEqual(true);
    });

    it("failed : validation error", async () => {
      await request(app(mongoDb.db)).post("/sign-up").send({}).expect(400);
    });
  });
});

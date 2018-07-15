"use strict";

const request = require("supertest");
const { server } = require("../../server");

describe("Test askForConversion route", () => {
  test("It should emit converted number and respond with a 200", async done => {
    const globalManager = server.get("globalManager");
    const input = 5;
    const expected = "V";

    globalManager.on("numberConverted", convertedNumber => {
      expect(convertedNumber).toBe(expected);
    });

    await request(server)
      .post("/askForConversion")
      .send({ number: input })
      .expect(200);

    done();
  });
});

"use strict";

const stream = require("stream");
const request = require("supertest");
const { server } = require("../../server");

describe("Test subscribe route", () => {
  test("It should subscribe to server side events", async done => {
    const writableStream = new stream.Writable();

    // writable stream need a _write method
    writableStream._write = () => {};

    request(server)
      .get("/subscribe")
      .pipe(writableStream);

    writableStream.on("pipe", req => {
      expect(req.statusCode).toBe(200);
      expect(req.headers).toBeDefined();
      expect(req.headers["content-type"]).toBe("text/event-stream");
      expect(req.headers["connection"]).toBe("keep-alive");
      expect(req.headers["cache-control"]).toBe("no-cache");
      done();
    });
  });
});

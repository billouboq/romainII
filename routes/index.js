"use strict";

const showWebsite = require("./showWebsite");
const subscribe = require("./subscribe");
const askForConversion = require("./askForConversion");

module.exports = server => {
  server.get("/subscribe", subscribe);
  server.get("/", showWebsite);
  server.post("/askForConversion", askForConversion);
};

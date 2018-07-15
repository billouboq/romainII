"use strict";

const express = require("express");

const initRoutes = require("./routes");
const initMiddlewares = require("./middlewares");
const EventManager = require("./services/EventManager");

const server = express();

server.set("globalManager", new EventManager());

initMiddlewares(server);
initRoutes(server);

module.exports = {
  server,
};

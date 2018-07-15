"use strict";

const EventManager = require("../services/EventManager");

module.exports = () => {
  const globalManager = new EventManager();

  return (req, res, next) => {
    if (!req.globalManager) {
      req.globalManager = globalManager;
    }

    next();
  };
};

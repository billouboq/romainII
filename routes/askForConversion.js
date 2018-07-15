"use strict";

const convertNumberToRomainOne = require("../services/convertNumberToRomainOne");

module.exports = (req, res) => {
  const romainNumber = convertNumberToRomainOne(req.body.number);

  // emit that we have converted a number
  // then subscribe route will deal with the rest
  req.app.get("globalManager").emit("numberConverted", romainNumber);

  res.end();
};

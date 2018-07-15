"use strict";

module.exports = (req, res) => {
  req.socket.setTimeout(Number.MAX_VALUE);

  req.globalManager.on("numberConverted", romainNumber => {
    res.write("data: " + romainNumber);
    res.write("\n\n");
  });

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  res.write("\n");
};

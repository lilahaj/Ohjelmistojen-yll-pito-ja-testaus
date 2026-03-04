const express = require("express");

const logger = require("./logger");
const Counter = require("./counter");
const buildRoutes = require("./routes");

function buildApp() {
  const app = express();

  const counter = new Counter();
  app.use(buildRoutes({ counter, logger }));

  return app;
}

function start({ port = process.env.PORT || 3000 } = {}) {
  logger.info("[MAIN] Starting");

  const app = buildApp();
  const server = app.listen(port, () => {
    logger.info(`[MAIN] Listening on ${port}`);
  });

  const shutdown = () => {
    logger.info("[MAIN] Stopping");
    server.close(() => process.exit(0));
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);

  return { app, server };
}

if (require.main === module) {
  start();
}

module.exports = { buildApp, start };

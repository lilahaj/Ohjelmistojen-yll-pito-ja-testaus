const express = require("express");

function buildRoutes({ counter, logger }) {
  const router = express.Router();

  // Simple request logger for the required syntax.
  router.use((req, _res, next) => {
    logger.info(`[ENDPOINT] ${req.method} '${req.path}'`);
    next();
  });

  router.get("/counter-increase", (_req, res) => {
    const value = counter.increase();
    logger.info(`[COUNTER] increase ${value}`);
    res.json({ count: value });
  });

  router.get("/counter-read", (_req, res) => {
    const value = counter.read();
    logger.info(`[COUNTER] read ${value}`);
    res.json({ count: value });
  });

  router.get("/counter-reset", (_req, res) => {
    const value = counter.reset();
    logger.info(`[COUNTER] zeroed ${value}`);
    res.json({ count: value });
  });

  return router;
}

module.exports = buildRoutes;

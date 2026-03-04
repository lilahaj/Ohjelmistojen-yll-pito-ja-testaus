const assert = require("assert");
const fs = require("fs");
const path = require("path");

const { buildLogger } = require("../src/logger");

describe("logger (Task 1)", function () {
  this.timeout(8000);

  const logsDir = path.join(__dirname, ".tmp-logs");
  const errorLogPath = path.join(logsDir, "error.log");

  let logger;

  beforeEach(function () {
    if (fs.existsSync(logsDir))
      fs.rmSync(logsDir, { recursive: true, force: true });
    fs.mkdirSync(logsDir, { recursive: true });
    logger = buildLogger({ directory: logsDir, console: false });
  });

  afterEach(function () {
    if (logger) {
      for (const t of logger.transports) {
        if (typeof t.close === "function") t.close();
      }
    }
  });

  it("writes error level logs to logs/error.log", function (done) {
    logger.log({ level: "error", message: "test-error" });

    // Winston file transport writes asynchronously. On Windows this can be slow,
    // so poll for a short while to keep the test stable.
    const started = Date.now();
    const timeoutMs = 6000;

    const check = () => {
      if (fs.existsSync(errorLogPath)) {
        const content = fs.readFileSync(errorLogPath, "utf8");
        if (content.includes("test-error")) return done();
      }

      if (Date.now() - started > timeoutMs) {
        return done(
          new assert.AssertionError({
            message: "error.log should exist and contain message",
          }),
        );
      }

      setTimeout(check, 50);
    };

    check();
  });
});

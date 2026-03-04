const path = require("path");
const fs = require("fs");
const { createLogger, transports, format } = require("winston");

// Ensure logs directory exists so file transports won't fail.
const logsDir = path.join(__dirname, "..", "logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

function buildLogger({ directory = logsDir, console = true } = {}) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  const activeTransports = [];
  if (console) activeTransports.push(new transports.Console());

  activeTransports.push(
    new transports.File({
      filename: path.join(directory, "error.log"),
      level: "error",
    }),
  );
  activeTransports.push(
    new transports.File({ filename: path.join(directory, "combined.log") }),
  );

  return createLogger({
    level: "info",
    format: format.combine(format.timestamp(), format.json()),
    transports: activeTransports,
  });
}

const logger = buildLogger();

module.exports = logger;
module.exports.buildLogger = buildLogger;

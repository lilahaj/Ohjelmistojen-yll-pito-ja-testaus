try {
  const delegated = require("./Unit_Test/main.js");
  module.exports = delegated;

  if (require.main === module && typeof delegated.main === "function") {
    delegated.main();
  }
} catch (err) {
  console.error("Failed to load Unit_Test/main.js:", err.message);
  throw err;
}

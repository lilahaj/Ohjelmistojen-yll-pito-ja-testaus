const mylib = require("./mylib");

function main() {
  console.log("Demo of mylib:");
  console.log("2 + 3 =", mylib.add(2, 3));
  console.log("10 - 4 =", mylib.sub(10, 4));
  console.log("6 * 7 =", mylib.mul(6, 7));
  console.log("8 / 2 =", mylib.div(8, 2));

  try {
    console.log("Attempting division by zero:");
    console.log("8 / 0 =", mylib.div(8, 0));
  } catch (err) {
    console.error("Caught error in main:", err.message);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };

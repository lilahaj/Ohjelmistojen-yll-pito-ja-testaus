const { expect } = require("chai");
const mylib = require("./mylib");

describe("mylib arithmetic operations", function () {
  before(function () {
    console.log("Setting up test suite");
  });

  after(function () {
    console.log("Tearing down test suite");
  });

  describe("add", function () {
    it("adds two numbers", function () {
      expect(mylib.add(2, 3)).to.equal(5);
    });
  });

  describe("sub", function () {
    it("subtracts second from first", function () {
      expect(mylib.sub(5, 2)).to.equal(3);
    });
  });

  describe("mul", function () {
    it("multiplies two numbers", function () {
      expect(mylib.mul(4, 3)).to.equal(12);
    });
  });

  describe("div", function () {
    it("divides two numbers", function () {
      expect(mylib.div(8, 2)).to.equal(4);
    });

    it("throws on division by zero", function () {
      expect(() => mylib.div(5, 0)).to.throw(Error, "ZeroDivision");
    });
  });
});
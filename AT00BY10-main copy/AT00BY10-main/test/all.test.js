import { expect } from "chai";

import add from "../src/add.js";
import at from "../src/at.js";
import camelCase from "../src/camelCase.js";
import capitalize from "../src/capitalize.js";
import castArray from "../src/castArray.js";
import ceil from "../src/ceil.js";
import clamp from "../src/clamp.js";
import divide from "../src/divide.js";
import drop from "../src/drop.js";
import filter from "../src/filter.js";
import get from "../src/get.js";
import isEmpty from "../src/isEmpty.js";
import reduce from "../src/reduce.js";
import toString from "../src/toString.js";
import words from "../src/words.js";

describe("Simple coverage tests", () => {
  it("add should add two numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });

  it("at should return values at given paths", () => {
    const object = { a: [{ b: { c: 3 } }, 4] };
    expect(at(object, ["a[0].b.c", "a[1]"])).to.deep.equal([3, 4]);
  });

  it("camelCase should convert to camel case", () => {
    expect(camelCase("Foo Bar")).to.be.a("string");
  });

  it("capitalize should capitalize the first letter", () => {
    expect(capitalize("FRED")).to.equal("Fred");
  });

  it("castArray should make an array", () => {
    expect(castArray(1)).to.deep.equal([1]);
  });

  it("ceil should round up", () => {
    expect(ceil(4.006)).to.equal(5);
  });

  it("clamp should restrict a number", () => {
    expect(clamp(-10, -5, 5)).to.be.a("number");
  });

  it("divide should divide two numbers", () => {
    expect(divide(6, 4)).to.be.a("number");
  });

  it("drop should drop elements", () => {
    expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
  });

  it("filter should filter elements", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];
    const res = filter(users, ({ active }) => active);
    expect(res.length).to.equal(1);
    expect(res[0].user).to.equal("barney");
  });

  it("get should retrieve value", () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(get(object, "a[0].b.c")).to.equal(3);
  });

  it("isEmpty should check if empty", () => {
    expect(isEmpty(null)).to.be.true;
    expect(isEmpty(true)).to.be.true;
    expect(isEmpty([1, 2, 3])).to.be.false;
  });

  it("reduce should accumulate values", () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.equal(3);
  });

  it("toString should convert to string", () => {
    expect(toString(null)).to.be.a("string");
    expect(toString(1)).to.be.a("string");
  });

  it("words should split to words", () => {
    expect(words("fred, barney, & pebbles")).to.deep.equal([
      "fred",
      "barney",
      "pebbles",
    ]);
  });
});

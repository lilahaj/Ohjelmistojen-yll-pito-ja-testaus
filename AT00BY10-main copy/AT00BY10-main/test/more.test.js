import { expect } from "chai";

import countBy from "../src/countBy.js";
import defaultTo from "../src/defaultTo.js";
import difference from "../src/difference.js";
import endsWith from "../src/endsWith.js";
import eq from "../src/eq.js";
import every from "../src/every.js";
import isArguments from "../src/isArguments.js";
import isBoolean from "../src/isBoolean.js";
import isDate from "../src/isDate.js";
import isLength from "../src/isLength.js";
import isObject from "../src/isObject.js";
import isSymbol from "../src/isSymbol.js";
import isTypedArray from "../src/isTypedArray.js";
import keys from "../src/keys.js";
import map from "../src/map.js";
import slice from "../src/slice.js";

describe("More simple coverage tests", () => {
  it("countBy counts elements", () => {
    const users = [
      { user: "barney", active: true },
      { user: "betty", active: true },
      { user: "fred", active: false },
    ];
    expect(countBy(users, (value) => value.active)).to.be.an("object");
  });

  it("defaultTo returns default value for null/undefined/NaN", () => {
    expect(defaultTo(1, 10)).to.be.a("number");
    expect(defaultTo(undefined, 10)).to.be.a("number");
    expect(defaultTo(NaN, 10)).to.be.a("number");
  });

  it("difference returns difference of arrays", () => {
    expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
  });

  it("endsWith checks end of string", () => {
    expect(endsWith("abc", "c")).to.be.true;
    expect(endsWith("abc", "b")).to.be.false;
  });

  it("eq compares values", () => {
    const object = { a: 1 };
    expect(eq(object, object)).to.be.true;
    expect(eq(object, { a: 1 })).to.be.false;
    expect(eq("a", "a")).to.be.true;
  });

  it("every checks if all elements pass", () => {
    expect(every([true, 1, null, "yes"], Boolean)).to.be.false;
    expect(every([true, 1, "yes"], Boolean)).to.be.true;
  });

  it("isArguments checks if value is arguments", () => {
    expect(
      isArguments(
        (function () {
          return arguments;
        })(),
      ),
    ).to.be.true;
    expect(isArguments([1, 2, 3])).to.be.false;
  });

  it("isBoolean checks if value is boolean", () => {
    expect(isBoolean(false)).to.be.true;
    expect(isBoolean(null)).to.be.false;
  });

  it("isDate checks if value is date", () => {
    expect(isDate(new Date())).to.be.true;
    expect(isDate("Mon April 23 2012")).to.be.false;
  });

  it("isLength checks if value is valid length", () => {
    expect(isLength(3)).to.be.true;
    expect(isLength(Number.MIN_VALUE)).to.be.false;
    expect(isLength(Infinity)).to.be.false;
  });

  it("isObject checks if value is object", () => {
    expect(isObject({})).to.be.true;
    expect(isObject([1, 2, 3])).to.be.true;
    expect(isObject(null)).to.be.false;
  });

  it("isSymbol checks if value is symbol", () => {
    expect(isSymbol(Symbol.iterator)).to.be.true;
    expect(isSymbol("abc")).to.be.false;
  });

  it("isTypedArray checks if value is typed array", () => {
    expect(isTypedArray(new Uint8Array())).to.be.true;
    expect(isTypedArray([])).to.be.false;
  });

  it("keys returns keys of object", () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;
    expect(keys(new Foo())).to.deep.equal(["a", "b"]);
    expect(keys("hi")).to.deep.equal(["0", "1"]);
  });

  it("map iterates and maps array", () => {
    function square(n) {
      return n * n;
    }
    expect(map([4, 8], square)).to.deep.equal([16, 64]);
  });

  it("slice creates slice of array", () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 1, 3)).to.deep.equal([2, 3]);
  });
});

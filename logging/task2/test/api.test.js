const assert = require("assert");
const request = require("supertest");

const { buildApp } = require("../src/main");

describe("tally counter API (Task 2)", function () {
  it("starts at 0 and increases/reset works", async function () {
    const app = buildApp();

    const read1 = await request(app).get("/counter-read").expect(200);
    assert.deepStrictEqual(read1.body, { count: 0 });

    const inc1 = await request(app).get("/counter-increase").expect(200);
    assert.deepStrictEqual(inc1.body, { count: 1 });

    const inc2 = await request(app).get("/counter-increase").expect(200);
    assert.deepStrictEqual(inc2.body, { count: 2 });

    const read2 = await request(app).get("/counter-read").expect(200);
    assert.deepStrictEqual(read2.body, { count: 2 });

    const reset = await request(app).get("/counter-reset").expect(200);
    assert.deepStrictEqual(reset.body, { count: 0 });

    const read3 = await request(app).get("/counter-read").expect(200);
    assert.deepStrictEqual(read3.body, { count: 0 });
  });
});

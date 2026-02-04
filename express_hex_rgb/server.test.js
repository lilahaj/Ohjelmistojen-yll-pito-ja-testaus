const request = require("supertest");
const app = require("./server");

describe("GET /hex-to-rgb", () => {
  test("Toimii 6/5", async () => {
    const response = await request(app).get("/hex-to-rgb?hex=ffffff");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ r: 255, g: 255, b: 255 });
  });
});

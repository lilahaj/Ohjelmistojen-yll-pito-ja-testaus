const { hexToRgb } = require("./converter");

describe("Hex to RGB Converter", () => {
  test("muuntaa valkoisen (ffffff) rgb-muotoon", () => {
    expect(hexToRgb("ffffff")).toEqual({ r: 255, g: 255, b: 255 });
  });

  test("muuntaa mustan (000000) rgb-muotoon", () => {
    expect(hexToRgb("000000")).toEqual({ r: 0, g: 0, b: 0 });
  });
});

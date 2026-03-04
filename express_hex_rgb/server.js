const express = require("express");
const { hexToRgb, rgbToHex } = require("./converter");

const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/hex-to-rgb", (req, res) => {
  const rgb = hexToRgb(req.query.hex);
  if (!rgb) return res.status(400).json({ error: "Virhe" });
  res.json(rgb);
});

app.get("/rgb-to-hex", (req, res) => {
  const { r, g, b } = req.query;
  const hex = rgbToHex(r, g, b);
  if (!hex) return res.status(400).json({ error: "Virhe" });
  res.json({ hex });
});

if (require.main === module) {
  app.listen(3000, () =>
    console.log("Palvelin on käynnissä: http://localhost:3000"),
  );
}

module.exports = app;

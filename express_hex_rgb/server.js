const express = require("express");
const { hexToRgb } = require("./converter");

const app = express();

app.get("/hex-to-rgb", (req, res) => {
  const rgb = hexToRgb(req.query.hex);
  if (!rgb) return res.status(400).json({ error: "Virhe" });
  res.json(rgb);
});

if (require.main === module) {
  app.listen(3000, () =>
    console.log("Palvelin on käynnissä: http://localhost:3000"),
  );
}

module.exports = app;

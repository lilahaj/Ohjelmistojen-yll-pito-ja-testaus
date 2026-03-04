# Hex to RGB & RGB to Hex Converter

REST API ja käyttöliittymä, joka muuntaa värit Hex-muodosta RGB-muotoon ja päinvastoin.

## REST API Rajapinnat

Sovellus tarjoaa seuraavat HTTP GET -rajapinnat:

### 1. HEX -> RGB

Muuntaa kuusimerkkisen HEX-värikoodin RGB-arvoiksi.

- **URL:** `/hex-to-rgb`
- **Parametrit:** `hex` (esim. `ffffff`)
- **Vastaus:** `{ "r": 255, "g": 255, "b": 255 }`

### 2. RGB -> HEX

Muuntaa punaisen, vihreän ja sinisen väriarvon (0-255) HEX-koodiksi.

- **URL:** `/rgb-to-hex`
- **Parametrit:** `r`, `g`, `b`
- **Vastaus:** `{ "hex": "FFFFFF" }`

## Sovelluslogiikan Metodit

Ydinlogiikka löytyy `converter.js` tiedostosta:

- **`hexToRgb(hex)`**:
  - Ottaa syötteenä merkkijonon (esim. "FF0000").
  - Pilkkoo merkkijonon kolmeen osaan ja muuntaa ne desimaaliluvuiksi.
  - Palauttaa objektin `{ r, g, b }` tai `null`, jos syöte on virheellinen.

- **`rgbToHex(r, g, b)`**:
  - Ottaa syötteenä kolme numeroa (Red, Green, Blue).
  - Tarkistaa, että arvot ovat välillä 0-255.
  - Muuntaa luvut heksadesimaaleiksi ja yhdistää ne merkkijonoksi.
  - Palauttaa HEX-merkkijonon (esim. "FF0000") tai `null`.

## 1. Asennus

Ennen aloitusta, asenna tarvittavat paketit:

```bash
npm install
```

## 2. Testaus

Aja testit:

```bash
npm test
```

## 3. Käynnistys

Käynnistä palvelin:

```bash
npm start
```

## 4. Käyttö

Kun palvelin on käynnissä, voit testata sitä selaimella:
`http://localhost:3000/hex-to-rgb?hex=ffffff`

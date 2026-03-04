# Tehtävä 1 – Lokikirjasto (Winston)

Tämä on Node.js-sovellus, joka demonstroi lokitusta **Winston**-kirjastolla.

## Vaatimukset

- Node.js **>= 18**
- Winston **3.11.0**


## Käyttö

Asenna riippuvuudet ja aja:

```bash
npm install
npm start
```

Näet lokitulostetta konsolissa, ja tiedostoja luodaan `logs/`-hakemistoon:

- `logs/error.log` (vain `error`-tason lokit)
- `logs/combined.log` (kaikki lokit)

## Test

```
npm test
```

Testit varmistavat, että virhelokin kirjoittaminen luo tiedoston `logs/error.log`.

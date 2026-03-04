# Tehtävä 2 – Tally counter REST API (Express + Winston)

Muistissa toimiva tally counter -REST API, joka on tehty **Express**-kirjastolla ja lokitus on toteutettu **Winston**-kirjastolla.

## Vaatimukset

- Node.js **>= 18**
- Express **4.18.2**
- Winston **3.11.0**


## Päätepisteet

- `GET /counter-increase` → kasvattaa laskuria yhdellä
- `GET /counter-read` → palauttaa nykyisen laskurin arvon
- `GET /counter-reset` → nollaa laskurin arvoon 0

Vastaukset ovat JSON-muotoisia:

```json
{ "count": 0 }
```

## Lokitus

Lokit kirjoitetaan:

- Console
- `logs/error.log`
- `logs/combined.log`

`logs/` on lisätty gitin ignorointiin.

## Ajo

```
npm install
npm start
```

Käytä sen jälkeen `rest.http`-tiedostoa (VS Code REST Client) tai kutsu päätepisteitä käsin.

## Testaus

```
npm test
```

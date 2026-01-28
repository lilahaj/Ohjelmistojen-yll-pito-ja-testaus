# MyLib Project

Yksinkertainen JavaScript-kirjasto laskutoimituksille ja niitä varten tehdyt yksikkötestit (Mocha + Chai).

## Ohjelman toiminta

Projektin ytimenä on kirjasto `mylib.js`, joka tarjoaa peruslaskutoimitukset:

- `add(a, b)`: Yhteenlasku
- `sub(a, b)`: Vähennyslasku
- `mul(a, b)`: Kertolasku
- `div(a, b)`: Jakolasku (heittää virheen `ZeroDivision`, jos jakaja on 0)

Mukana on myös `main.js`-esimerkkiohjelma, joka demonstroi kirjaston käyttöä tulostamalla laskutoimitusten tuloksia komentoriville.


## Asennus

Asenna tarvittavat riippuvuudet komennolla:

```bash
npm install
```

## Käyttö

Aja esimerkkiohjelma:

```bash
npm start
# tai
node main.js
```

## Testaus

Aja testit:

```bash
npm test
```

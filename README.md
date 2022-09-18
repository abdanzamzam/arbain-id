# Hardits Arba'in

Hadits Arbai'in Data Sheet

## How to Install

```bash
npm install arbain-id
# or
yarn add arbain-id
```

## How to Use

```javascript
// in common JS
const HaditsArbain = require("arbain-id");

// in typescript
import HaditsArbain from "arbain-id";

const arbain = new HaditsArbain();

// Get List All of Hadits
arbain.getAllHadits()
    .then((data) => {
        // data handling here
        console.log(data);
    })
    .catch((error) => {
        // error handling here
        console.log(error);
    });


// Get One Hadits by Number
arbain.getOneHadits(
        1   // required, number hadits
    )
    .then((data) => {
        // data handling here
        console.log(data);
    });
    .catch((error) => {
        // error handing here
        console.log(error);
    })

```

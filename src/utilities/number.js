const asNumber = (x) => Number.parseInt (x, 10)
const dialDown = (range) => (x) => (x + range - 1) % range
const dialUp = (range) => (x) => (x + 1) % range
const dice = (min) => (max) => Math.floor (Math.random () * (max - min + 1) + min)

/* eslint-disable eqeqeq */
const reifiedNumber = (x) => x == +x ? +x : x
/* eslint-enable eqeqeq */

const sanitizedNumber = (x) => Math.max (0, asNumber (x))

export { asNumber, dialDown, dialUp, dice, reifiedNumber, sanitizedNumber }

const asNumber = (x: string): number => {
  return Number.parseInt (x, 10)
}

const dialDown = (range: number) => (x: number): number => {
  return (x + range - 1) % range
}

const dialUp = (range: number) => (x: number): number => {
  return (x + 1) % range
}

// dice :: Number -> Number -> IO Number
const dice = (min: number) => (max: number): number => {
  return Math.floor (Math.random () * (max - min + 1) + min)
}

/* eslint-disable eqeqeq */

const reifiedNumber = (x: any): any => {
  return x == +x ? +x : x
}

/* eslint-enable eqeqeq */

// sanitizedNumber :: Any -> Int
const sanitizedNumber = (x: any): number => {
  return Math.max (0, asNumber (x))
}

export { asNumber, dialDown, dialUp, dice, reifiedNumber, sanitizedNumber }

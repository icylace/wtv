const asNumber = (x: string): number =>
  Number.parseInt(x, 10)

const dialDown = (range: number) => (x: number): number =>
  (x + range - 1) % range

const dialUp = (range: number) => (x: number): number =>
  (x + 1) % range

// dice :: Number -> Number -> IO Number
const dice = (min: number) => (max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min)

// sanitizedNumber :: Any -> Int
const sanitizedNumber = (n: any): number => Math.max(0, asNumber(n))

export { asNumber, dialDown, dialUp, dice, sanitizedNumber }

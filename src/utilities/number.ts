export { dialDown, dialUp, dice, reifiedNumber, sanitizedNumber, toInt }

// -----------------------------------------------------------------------------

// dialDown :: Int -> Int -> Int
const dialDown = (range: number) => (x: number): number =>
  (x + range - 1) % range

// dialUp :: Int -> Int -> Int
const dialUp = (range: number) => (x: number): number =>
  (x + 1) % range

// dice :: Int -> Int -> Int
const dice = (min: number) => (max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min)

/* eslint-disable eqeqeq */
// const reifiedNumber_old = (x) => x == +x ? +x : x
// console.log(11)
// console.log(reifiedNumber_old(11))
// console.log("12")
// console.log(reifiedNumber_old("12"))
// console.log(reifiedNumber_old("gfjhgf"))
// console.log(reifiedNumber_old("13gh"))
// console.log(reifiedNumber_old("g13h"))
// console.log(reifiedNumber_old("gh13"))

// console.log("/////////////////")
// console.log("/////////////////")

// reifiedNumber :: Int | String -> Int | String
const reifiedNumber = (x: number | string): number | string =>
  typeof x === "string"
    ? x === Number.parseInt(x, 10).toString(10)
      ? Number.parseInt(x, 10)
      : x
    : x
// console.log(11)
// console.log(reifiedNumber(11))
// console.log("12")
// console.log(reifiedNumber("12"))
// console.log(reifiedNumber("gfjhgf"))
// console.log(reifiedNumber("13gh"))
// console.log(reifiedNumber("g13h"))
// console.log(reifiedNumber("gh13"))

/* eslint-enable eqeqeq */

// sanitizedNumber :: String -> Int
const sanitizedNumber = (x: string): number =>
  Math.max(0, toInt(x))

// toInt :: String -> Int
const toInt = (x: string): number =>
  Number.parseInt(x, 10)

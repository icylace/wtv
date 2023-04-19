export const dialDown = (range: number) => (x: number): number =>
  (x + range - 1) % range

export const dialUp = (range: number) => (x: number): number =>
  (x + 1) % range

export const dice = (min: number) => (max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min)

/* eslint-disable eqeqeq */
// export const reifiedNumber_old = (x) => x == +x ? +x : x
/* eslint-enable eqeqeq */

export const reifiedNumber = (x: number | string): number | string =>
  typeof x === "string"
    ? x === Number.parseInt(x, 10).toString(10)
      ? Number.parseInt(x, 10)
      : x
    : x

export const sanitizedNumber = (x: string): number =>
  Math.max(0, toInt(x))

export const toInt = (x: string): number =>
  Number.parseInt(x, 10)

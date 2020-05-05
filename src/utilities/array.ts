// import { zip } from "/web_modules/ramda.js"

const append = <T>(x: T) => (xs: T[]): T[] => {
  return [...xs, x]
}

const any = <T>(f: (a: T) => boolean) => (xs: T[]): boolean => {
  return xs.some (f)
}

// https://stackoverflow.com/a/43455982
const concat = <T>(xss: T[][]): T[] => {
  // @ts-ignore
  return [].concat (...xss)
}

const exclude = (i: number) => <T>(xs: T[]): T[] => {
  return [...xs.slice (0, i), ...xs.slice (i + 1)]
}

const filter = <T>(f: (a: T) => boolean) => (xs: T[]): T[] => {
  return xs.filter (f)
}

const findIndex = <T>(f: (a: T) => boolean) => (xs: T[]): number => {
  return xs.findIndex (f)
}

const flatten = <T>(xs: T[][]): T[] => {
  return xs.flat ()
}

const head = <T>(xs: T[]): T => {
  return xs[0]
}

const init = <T>(xs: T[]): T[] => {
  return xs.slice (0, -1)
}

const intercalate = (x: string) => <T>(xs: T[]): string => {
  return xs.join (x)
}

const isArray = <T>(x: T): boolean => {
  return Array.isArray (x)
}

// last :: [a] -> Maybe a
const last = <T>(xs: T[]): T => {
  return xs.slice (-1)[0]
}

// map :: (a -> b) -> [a] -> [b]
const map = <T, U>(f: (a: T) => U) => (xs: T[]): U[] => {
  return xs.map (f)
}

// mapWithIndex :: (a -> Int -> b) -> [a] -> [b]
const mapWithIndex = <T, U>(f: (a: T) => (b: number) => U) => (xs: T[]): U[] => {
  return xs.map ((x: T, i: number): U => f (x) (i))
}

const prepend = <T>(x: T) => (xs: T[]): T[] => {
  return [x, ...xs]
}

const range = (m: number) => (n: number): number[] => {
  return [...Array (n - m)].map ((_, i) => m + i)
}

const reject = <T>(f: (a: T) => boolean) => (xs: T[]): T[] => {
  return xs.filter ((x: T): boolean => !f (x))
}

const repeat = <T>(x: T) => (n: number): T[] => {
  return Array (n).fill (x)
}

const numberSequence = (n: number): number[] => {
  return [...Array (n).keys ()]
}

const tail = <T>(xs: T[]): T[] => {
  return xs.slice (1)
}

const uniques = <T>(xs: T[]): T[] => {
  return [...new Set (xs)]
}

// -----------------------------------------------------------------------------

// //
// // Zips all items from two lists using `undefined` for any missing items.
// //
// // Based on:
// // https://github.com/ramda/ramda/wiki/Cookbook#ziplongest-zip-lists-to-the-longest-lists-length
// //
// const zipLongest = xs => ys => {
//   if (xs.length < ys.length) {
//     return zip(concat([xs, repeat(undefined)(ys.length - xs.length)]))(ys)
//   } else if (ys.length < xs.length) {
//     return zip(xs)(concat([ys, repeat(undefined)(xs.length - ys.length)]))
//   }
//   return zip(xs)(ys)
// }

// -----------------------------------------------------------------------------

export {
  append,
  any,
  concat,
  exclude,
  filter,
  findIndex,
  flatten,
  head,
  init,
  intercalate,
  isArray,
  last,
  map,
  mapWithIndex,
  prepend,
  range,
  reject,
  repeat,
  numberSequence,
  tail,
  uniques,
  // zipLongest,
}

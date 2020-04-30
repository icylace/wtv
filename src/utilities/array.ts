// import { zip } from "/web_modules/ramda.js"

const append = (x: any) => (xs: any[]): any[] => {
  return [...xs, x]
}

const any = (f: (a: any) => boolean) => (xs: any[]): boolean => {
  return xs.some (f)
}

// https://stackoverflow.com/a/43455982
const concat = (xss: any[][]): any[] => {
  // @ts-ignore
  return [].concat (...xss)
}

const exclude = (i: number) => (xs: any[]): any[] => {
  return [...xs.slice (0, i), ...xs.slice (i + 1)]
}

const filter = (f: (a: any) => boolean) => (xs: any[]): any[] => {
  return xs.filter (f)
}

const findIndex = (f: (a: any) => boolean) => (xs: any[]): number => {
  return xs.findIndex (f)
}

// flatten :: [[a]] -> [a]
const flatten = (xs: { flat: () => any[] }): any[] => {
  return xs.flat ()
}

const head = (xs: any[]): any => {
  return xs[0]
}

const init = (xs: any[]): any[] => {
  return xs.slice (0, -1)
}

const intercalate = (x: any) => (xs: any[]): string => {
  return xs.join (x)
}

const isArray = (x: any): boolean => {
  return Array.isArray (x)
}

// last :: [a] -> Maybe a
const last = (xs: any[]): any => {
  return xs.slice (-1)[0]
}

// map :: (a -> b) -> [a] -> [b]
const map = (f: (a: any) => any) => (xs: any[]): any[] => {
  return xs.map (f)
}

// mapWithIndex :: (a -> Int -> b) -> [a] -> [b]
const mapWithIndex = (f: Function) => (xs: any[]): any[] => {
  return xs.map ((x: any, i: number) => f (x) (i))
}

const prepend = (x: any) => (xs: any[]): any[] => {
  return [x, ...xs]
}

const range = (m: number) => (n: number): number[] => {
  return [...Array (n - m)].map ((_, i) => m + i)
}

const reject = (f: (a: any) => boolean) => (xs: any[]): any[] => {
  return xs.filter ((x: any) => !f (x))
}

const repeat = (x: any) => (n: number): any[] => {
  return Array (n).fill (x)
}

const numberSequence = (n: number): number[] => {
  return [...Array (n).keys ()]
}

const tail = (xs: any[]): any[] => {
  return xs.slice (1)
}

const uniques = (xs: any[]): any[] => {
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

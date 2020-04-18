// import { zip } from "/web_modules/ramda.js"

const append = (x: any) => (xs: any[]): any[] => [...xs, x]
const any = (f: (a: any) => boolean) => (xs: any[]): boolean => xs.some(f)

// https://stackoverflow.com/a/43455982
const concat = (xss: any[][]): any[] => [].concat(...xss)

const exclude = (i: number) => (xs: any[]): any[] => [...xs.slice(0, i), ...xs.slice(i + 1)]
const filter = (f: (a: any) => boolean) => (xs: any[]): any[] => xs.filter(f)
const findIndex = (f: (a: any) => boolean) => (xs: any[]): number => xs.findIndex(f)

// flatten :: [[a]] -> [a]
const flatten = (xs: { flat: () => any[] }): any[] => xs.flat()

const head = (xs: any[]): any => xs[0]
const init = (xs: any[]): any[] => xs.slice(0, -1)
const intercalate = (x: any) => (xs: any[]): string => xs.join(x)
const isArray: (a: any) => boolean = Array.isArray

// last :: [a] -> Maybe a
const last = (xs: any[]): any => xs.slice(-1)[0]

// map :: (a -> b) -> [a] -> [b]
const map = (f: (a: any) => any) => (xs: any[]) => xs.map((x: any) => f(x))

// mapWithIndex :: (a -> Int -> b) -> [a] -> [b]
const mapWithIndex = (f: Function) => (xs: any[]): any[] => xs.map((x: any, i: number): any => f(x)(i))

const prepend = (x: any) => (xs: any[]): any[] => [x, ...xs]
const reject = (f: (a: any) => boolean) => (xs: any[]): any[] => xs.filter((x: any) => !f(x))
const repeat = (x: any) => (n: number): any[] => Array(n).fill(x)
const numberSequence = (n: number): number[] => [...Array(n).keys()]
const tail = (xs: any[]): any[] => xs.slice(1)
const uniques = (xs: any[]): any[] => [...new Set(xs)]

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
  // asArray,
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
  reject,
  repeat,
  numberSequence,
  tail,
  uniques,
  // zipLongest,
}

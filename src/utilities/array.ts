export {
  allocate,
  append,
  any,
  assign,
  concat,
  encase,
  exclude,
  filter,
  findIndex,
  // flatten,
  head,
  init,
  intercalate,
  isArray,
  last,
  map,
  prepend,
  range,
  reject,
  repeat,
  numberSequence,
  tail,
  uniques,
  using,
  // zipLongest,
}

// -----------------------------------------------------------------------------

// allocate :: Int -> [Void]
const allocate = (x: number): undefined[] =>
  Array.from({ length: x })

// append :: a -> [a] -> [a]
const append = <a>(x: a) => (xs: a[]): a[] =>
  [...xs, x]

// any :: (a -> Bool) -> [a] -> boolean
const any = <a>(f: (_: a) => boolean) => (xs: a[]): boolean =>
  xs.some(f)

// assign :: a -> Int -> [a] -> [a]
const assign = <a>(value: a) => (i: number) => (xs: a[]): a[] =>
  [...xs.slice(0, i), value, ...xs.slice(i + 1)]

// concat :: [[a]] -> [a]
const concat = <a>(xss: a[][]): a[] =>
  ([] as a[]).concat(...xss)
// TODO:
// // const concat = (xs) => xs.flat()
// // flatten :: [[a]] -> [a]
// function flatten<A>(xs: A[][]): A[]
// // const flatten = (xs) => xs.flat()

// encase :: a | a[] -> a[]
const encase = <a>(x: a | a[]): a[] =>
  Array.isArray(x) ? x : [x]

// exclude :: Int -> [a] -> [a]
const exclude = (i: number) => <a>(xs: a[]): a[] =>
  [...xs.slice(0, i), ...xs.slice(i + 1)]

// filter :: (a -> Bool) -> [a] -> [a]
const filter = <a>(f: (_: a) => boolean) => (xs: a[]): a[] =>
  xs.filter(f)

// findIndex :: (a -> Bool) -> [a] -> Int
const findIndex = <a>(f: (_: a) => boolean) => (xs: a[]): number =>
  xs.findIndex(f)

// head :: [a] -> Maybe a
const head = <a>(xs: a[]): a | null =>
  xs[0]

// init :: [a] -> [a]
const init = <a>(xs: a[]): a[] =>
  xs.slice(0, -1)

// intercalate :: String -> [a] -> String
const intercalate = (x: string) => <a>(xs: a[]): string =>
  xs.join(x)

// isArray :: a -> Bool
const isArray = Array.isArray

// last :: [a] -> Maybe a
const last = <a>(xs: a[]): a | null =>
  xs[xs.length - 1]
// const last_ = <a>(xs: a[]): a | null =>
//   xs.slice(-1)[0]

// map :: (a -> b) -> [a] -> [b]
const map = <a, b>(f: (_: a) => b) => (xs: a[]): b[] =>
  xs.map(f)

// prepend :: a -> [a] -> [a]
const prepend = <a>(x: a) => (xs: a[]): a[] =>
  [x, ...xs]

// range :: Int -> Int -> [Int]
const range = (m: number) => (n: number): number[] =>
  [...Array(n - m)].map((_, i) => m + i)

// reject :: (a -> Bool) -> [a] -> [a]
const reject = <a>(f: (_: a) => boolean) => (xs: a[]): a[] =>
  xs.filter((x) => !f(x))

// repeat :: a -> Int -> [a]
const repeat = <a>(x: a) => (n: number): a[] =>
  Array(n).fill(x)

// numberSequence :: Int -> Int[]
const numberSequence = (n: number): number[] =>
  [...Array(n).keys()]

// tail :: [a] -> [a]
const tail = <a>(xs: a[]): a[] =>
  xs.slice(1)

// uniques :: [a] -> [a]
const uniques = <a>(xs: a[]): a[] =>
  [...new Set(xs)]

// using :: [(a -> b) | b] -> a -> [b]
const using = <a, b>(fs: (((_: a) => b) | b)[]) => (x: a): b[] =>
  fs.map((f) => typeof f === "function" ? (f as ((_: a) => b))(x) : f)

// -----------------------------------------------------------------------------

// import { zip } from "ramda"

// //
// // Zips all items from two lists using `undefined` for any missing items.
// //
// // Based on:
// // https://github.com/ramda/ramda/wiki/Cookbook#ziplongest-zip-lists-to-the-longest-lists-length
// //
// const zipLongest = (xs) => (ys) => {
//   if (xs.length < ys.length) {
//     return zip(concat([xs, repeat(undefined)(ys.length - xs.length)]))(ys)
//   }
//   if (ys.length < xs.length) {
//     return zip(xs)(concat([ys, repeat(undefined)(xs.length - ys.length)]))
//   }
//   return zip(xs)(ys)
// }

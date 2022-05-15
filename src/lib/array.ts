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
  head,
  init,
  intercalate,
  last,
  map,
  prepend,
  range,
  reject,
  repeat,
  numberSequence,
  tail,
  uniques,
  zip,
  zipLongest,
}

// -----------------------------------------------------------------------------

type Predicate<a> = (_: a) => boolean

const allocate = (x: number): undefined[] =>
  Array.from({ length: x })

const append = <a>(x: a) => (xs: readonly a[]): a[] =>
  [...xs, x]

const any = <a>(f: Predicate<a>) => (xs: readonly a[]): boolean =>
  xs.some(f)

const assign = <a>(value: a) => (i: number) => (xs: readonly a[]): a[] =>
  [...xs.slice(0, i), value, ...xs.slice(i + 1)]

const concat = <a>(xss: readonly a[][]): a[] =>
  ([] as a[]).concat(...xss)

const encase = <a>(x: a | readonly a[]): a[] =>
  Array.isArray(x) ? x : [x]

const exclude = (i: number) => <a>(xs: readonly a[]): a[] =>
  [...xs.slice(0, i), ...xs.slice(i + 1)]

const filter = <a>(f: Predicate<a>) => (xs: readonly a[]): a[] =>
  xs.filter(f)

const findIndex = <a>(f: Predicate<a>) => (xs: readonly a[]): number =>
  xs.findIndex(f)

const head = <a>(xs: readonly a[]): a | undefined =>
  xs[0]

const init = <a>(xs: readonly a[]): a[] =>
  xs.slice(0, -1)

const intercalate = (x: string) => <a>(xs: readonly a[]): string =>
  xs.join(x)

const last = <a>(xs: readonly a[]): a | undefined =>
  xs[xs.length - 1]

const map = <a, b>(f: (_: a) => b) => (xs: readonly a[]): b[] =>
  xs.map(f)

const numberSequence = (n: number): number[] =>
  [...Array(n).keys()]

const prepend = <a>(x: a) => (xs: readonly a[]): a[] =>
  [x, ...xs]

const range = (m: number) => (n: number): number[] =>
  [...Array(n - m)].map((_, i) => m + i)

const reject = <a>(f: Predicate<a>) => (xs: readonly a[]): a[] =>
  xs.filter((x) => !f(x))

const repeat = <a>(x: a) => (n: number): a[] =>
  Array(n).fill(x)

const tail = <a>(xs: readonly a[]): a[] =>
  xs.slice(1)

const uniques = <a>(xs: readonly a[]): a[] =>
  [...new Set(xs)]

// https://github.com/ramda/ramda/blob/v0.28.0/source/zip.js
// https://github.com/remeda/remeda/blob/master/src/zip.ts
const zip = <a>(xs: readonly a[]) => <b>(ys: readonly b[]): [a, b][] => {
  const length = xs.length > ys.length ? ys.length : xs.length
  const result: [a, b][] = []
  for (let i = 0; i < length; ++i) {
    result.push([xs[i], ys[i]])
  }
  return result
}

// Zips all items from two lists using `undefined` for any missing items.
//
// Based on:
// https://github.com/ramda/ramda/wiki/Cookbook#ziplongest-zip-lists-to-the-longest-lists-length
// https://github.com/ramda/ramda/blob/v0.28.0/source/zip.js
// https://github.com/remeda/remeda/blob/master/src/zip.ts
//
type ZippedArray<a, b> = [a | undefined, b | undefined][]
const zipLongest = <a>(xs: readonly a[]) => <b>(ys: readonly b[]): ZippedArray<a, b> => {
  const length = xs.length > ys.length ? xs.length : ys.length
  const result: ZippedArray<a, b> = []
  for (let i = 0; i < length; ++i) {
    result.push([xs[i], ys[i]])
  }
  return result
}

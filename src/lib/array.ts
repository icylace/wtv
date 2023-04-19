type Predicate<a> = (_: a) => boolean

export const allocate = (x: number): undefined[] =>
  Array.from({ length: x })

export const append = <a>(x: a) => (xs: readonly a[]): a[] =>
  [...xs, x]

export const any = <a>(f: Predicate<a>) => (xs: readonly a[]): boolean =>
  xs.some(f)

export const assign = <a>(value: a) => (i: number) => (xs: readonly a[]): a[] =>
  [...xs.slice(0, i), value, ...xs.slice(i + 1)]

export const concat = <a>(xss: readonly a[][]): a[] =>
  ([] as a[]).concat(...xss)

export const encase = <a>(x: a | readonly a[]): a[] =>
  Array.isArray(x) ? x : [x] as a[]

export const exclude = (i: number) => <a>(xs: readonly a[]): a[] =>
  [...xs.slice(0, i), ...xs.slice(i + 1)]

export const filter = <a>(f: Predicate<a>) => (xs: readonly a[]): a[] =>
  xs.filter(f)

export const findIndex = <a>(f: Predicate<a>) => (xs: readonly a[]): number =>
  xs.findIndex(f)

export const head = <a>(xs: readonly a[]): a | undefined =>
  xs[0]

export const init = <a>(xs: readonly a[]): a[] =>
  xs.slice(0, -1)

export const intercalate = (x: string) => <a>(xs: readonly a[]): string =>
  xs.join(x)

export const last = <a>(xs: readonly a[]): a | undefined =>
  xs[xs.length - 1]

export const map = <a, b>(f: (_: a) => b) => (xs: readonly a[]): b[] =>
  xs.map(f)

export const numberSequence = (n: number): number[] =>
  [...Array(n).keys()]

export const prepend = <a>(x: a) => (xs: readonly a[]): a[] =>
  [x, ...xs]

export const range = (m: number) => (n: number): number[] =>
  [...Array(n - m)].map((_, i) => m + i)

export const reject = <a>(f: Predicate<a>) => (xs: readonly a[]): a[] =>
  xs.filter((x) => !f(x))

export const repeat = <a>(x: a) => (n: number): a[] =>
  Array(n).fill(x)

export const tail = <a>(xs: readonly a[]): a[] =>
  xs.slice(1)

// Transposes the rows and columns of a 2D list. When passed a list of `n` lists
// of length `x`, returns a list of `x` lists of length `n`.
//
// https://github.com/ramda/ramda/blob/v0.28.0/source/transpose.js
export const transpose = <a>(xs: a[][]): a[][] => {
  const result: a[][] = []
  for (let i = 0; i < xs.length; ++i) {
    const ys = xs[i]
    for (let j = 0; j < ys.length; ++j) {
      if (typeof result[j] === "undefined") {
        result[j] = []
      }
      result[j].push(ys[j])
    }
  }
  return result
}

export const uniques = <a>(xs: readonly a[]): a[] =>
  [...new Set(xs)]

// https://github.com/ramda/ramda/blob/v0.28.0/source/zip.js
// https://github.com/remeda/remeda/blob/master/src/zip.ts
export const zip = <a>(xs: readonly a[]) => <b>(ys: readonly b[]): [a, b][] => {
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
export const zipLongest = <a>(xs: readonly a[]) => <b>(ys: readonly b[]): ZippedArray<a, b> => {
  const length = xs.length > ys.length ? xs.length : ys.length
  const result: ZippedArray<a, b> = []
  for (let i = 0; i < length; ++i) {
    result.push([xs[i], ys[i]])
  }
  return result
}

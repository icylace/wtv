// import { zip } from "/web_modules/ramda.js"

const allocate = (x) => Array.from ({ length: x })
const append = (x) => (xs) => [...xs, x]
const any = (f) => (xs) => xs.some (f)

const concat = (xss) => [].concat (...xss)
// TODO:
// const concat = xs => xs.flat ()
// const flatten = xs => xs.flat ()

const exclude = (i) => (xs) => [...xs.slice (0, i), ...xs.slice (i + 1)]
const filter = (f) => (xs) => xs.filter (f)
const findIndex = (f) => (xs) => xs.findIndex (f)
const head = (xs) => xs[0]
const init = (xs) => xs.slice (0, -1)
const intercalate = (x) => (xs) => xs.join (x)
const isArray = Array.isArray
const last = (xs) => xs[xs.length - 1]
// const last_ = xs => xs.slice (-1)[0]
const map = (f) => (xs) => xs.map (f)
const prepend = (x) => (xs) => [x, ...xs]
const range = (m) => (n) => [...Array (n - m)].map ((_, i) => m + i)
const reject = (f) => (xs) => xs.filter ((x) => !f (x))
const repeat = (x) => (n) => Array (n).fill (x)
const numberSequence = (n) => [...Array (n).keys ()]
const tail = (xs) => xs.slice (1)
const uniques = (xs) => [...new Set (xs)]

// -----------------------------------------------------------------------------

// //
// // Zips all items from two lists using `undefined` for any missing items.
// //
// // Based on:
// // https://github.com/ramda/ramda/wiki/Cookbook#ziplongest-zip-lists-to-the-longest-lists-length
// //
// const zipLongest = xs => ys => {
//   if (xs.length < ys.length) {
//     return zip (concat ([xs, repeat (undefined) (ys.length - xs.length)])) (ys)
//   }
//   if (ys.length < xs.length) {
//     return zip (xs) (concat ([ys, repeat (undefined) (xs.length - ys.length)]))
//   }
//   return zip (xs) (ys)
// }

// -----------------------------------------------------------------------------

export {
  allocate,
  append,
  any,
  concat,
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
  // zipLongest,
}

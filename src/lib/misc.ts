// import { VNode, h, text } from "hyperapp"
// import { get } from "./shadesHelper"

// export { _, dump, isNil, isSomething, readout }
export { _, dump, isNil, isSomething }

// -----------------------------------------------------------------------------

// Idea borrowed from ivi: https://github.com/localvoid/ivi
const _ = undefined

// isNil :: a -> Bool
const isNil = (x: unknown): boolean =>
  x == null

// isSomething :: a -> Bool
const isSomething = (x: unknown): boolean =>
  x != null

const readoutReplacer = (_key: unknown, value: unknown): unknown =>
  typeof value === "function" ? "function" : value

// dump :: a -> String
const dump = (x: unknown): string =>
  JSON.stringify(x, readoutReplacer, 2)

// // readout :: [String] -> {a} -> b
// const readout = <S>(path: string[]) => (xr: Record<string, unknown>): VNode<S> => {
//   const json = JSON.stringify(get(path)(xr), readoutReplacer, 2)
//   return h("pre", {}, text(`${path.join(".")}: ${json}`))
// }

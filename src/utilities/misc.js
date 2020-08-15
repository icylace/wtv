import { h, text } from "hyperapp"
import { get } from "./shadesHelper"

const isNil = (x) => x == null
const isSomething = (x) => x != null

const readoutReplacer = (_key, value) => typeof value === "function" ? "function" : value
const dump = (x) => JSON.stringify (x, readoutReplacer, 2)
const readout = (path) => (xr) => {
  const json = JSON.stringify (get (path) (xr), readoutReplacer, 2)
  return h ("pre", {}, text (`${path.join (".")}: ${json}`))
}

export { dump, isNil, isSomething, readout }

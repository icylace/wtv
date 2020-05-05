import { h } from "hyperapp"
import { get } from "./shadesHelper"

const isNil = <T>(x: T): boolean => {
  return x == null
}

const isSomething = <T>(x: T): boolean => {
  return x != null
}

// -----------------------------------------------------------------------------

const readoutReplacer = <T, U>(_key: T, value: U): U | string => {
  return typeof value === "function" ? "function" : value
}

const dump = (x: any): string => {
  return JSON.stringify (x, readoutReplacer, 2)
}

const readout = (path: string[]) => (obj: object): any => {
  const json = JSON.stringify (get (path) (obj), readoutReplacer, 2)
  return h ("pre", {}, [`${path.join (".")}: ${json}`])
}

// -----------------------------------------------------------------------------

export { dump, isNil, isSomething, readout }

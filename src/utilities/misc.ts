import { h } from "/web_modules/hyperapp.js"
import { get } from "./lens"

const isNil = (x: any): boolean => {
  return x == null
}

const isSomething = (x: any): boolean => {
  return x != null
}

// -----------------------------------------------------------------------------

const readoutReplacer = (_key: any, value: any): any => {
  return typeof value === "function" ? "function" : value
}

const dump = (x: any): string => {
  return JSON.stringify(x, readoutReplacer, 2)
}

const readout = (path: string[]) => (obj: object): any => {
  const json = JSON.stringify(get(path)(obj), readoutReplacer, 2)
  return h("pre", {}, [`${path.join(".")}: ${json}`])
}

// -----------------------------------------------------------------------------

export { dump, isNil, isSomething, readout }

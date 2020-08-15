import { all, mod } from "shades"

const enlist = (key) => (value) => (xr) => ({ ...xr, [key]: value })

const delist = (key) => (xr) => {
  const { [key]: _, ...etc } = xr
  return etc
}

const hasOwn = (prop) => (obj) => Object.prototype.hasOwnProperty.call (obj, prop)
const imprint = (transformationMap) => (xr) => mod (all ()) ((...etc) => etc[0] (xr)) (transformationMap)
const merge = (xr) => (yr) => ({ ...xr, ...yr })

export { enlist, delist, hasOwn, imprint, merge }

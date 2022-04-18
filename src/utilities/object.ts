// import { all, mod } from "shades"

// export { enlist, delist, hasOwn, imprint, merge }
export { enlist, delist, hasOwn, merge }

// -----------------------------------------------------------------------------

// enlist :: String -> {a} -> {a} -> {a}
const enlist =
  (key: string) =>
    (value: Record<string, unknown>) =>
      (xr: Record<string, unknown>): Record<string, unknown> =>
        ({ ...xr, [key]: value })

// delist :: String -> {a} -> {a}
const delist =
  (key: string) =>
    (xr: Record<string, unknown>): Record<string, unknown> => {
      const { [key]: _, ...etc } = xr
      return etc
    }

// hasOwn :: String -> {a} -> Bool
const hasOwn =
  (prop: string) =>
    (obj: Record<string, unknown>): boolean =>
      Object.prototype.hasOwnProperty.call(obj, prop)

// // imprint :: {a} -> {a} -> {a}
// const imprint = (transformationMap: Record<string, unknown>) => (xr: Record<string, unknown>): Record<string, unknown> =>
//   mod(all())((...etc) => etc[0](xr))(transformationMap)

// merge :: {a} -> {a} -> {a}
const merge =
  (xr: Record<string, unknown>) =>
    (yr: Record<string, unknown>): Record<string, unknown> =>
      ({ ...xr, ...yr })

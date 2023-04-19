// import { all, mod } from "shades"

export const enlist =
  (key: string) =>
    (value: Record<string, unknown>) =>
      (xr: Record<string, unknown>): Record<string, unknown> =>
        ({ ...xr, [key]: value })

export const delist =
  (key: string) =>
    (xr: Record<string, unknown>): Record<string, unknown> => {
      const { [key]: _, ...etc } = xr
      return etc
    }

export const hasOwn =
  (prop: string) =>
    (obj: Record<string, unknown>): boolean =>
      Object.prototype.hasOwnProperty.call(obj, prop)

// // imprint :: {a} -> {a} -> {a}
// export const imprint = (transformationMap: Record<string, unknown>) => (xr: Record<string, unknown>): Record<string, unknown> =>
//   mod(all())((...etc) => etc[0](xr))(transformationMap)

export const merge =
  (xr: Record<string, unknown>) =>
    (yr: Record<string, unknown>): Record<string, unknown> =>
      ({ ...xr, ...yr })

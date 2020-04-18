const enlist = (key: string) => (value: any) => (xr: { [k: string]: any }): { [k: string]: any } =>
  ({ ...xr, [key]: value })

const delist = (key: string) => (xr: { [k: string]: any }): { [k: string]: any } => {
  const { [key]: _, ...etc } = xr
  return etc
}

const hasOwn = (prop: string) => (obj: { [k: string]: any }): boolean =>
  Object.prototype.hasOwnProperty.call(obj, prop)

const merge = (xr: object) => (yr: object): object => ({ ...xr, ...yr })

export { enlist, delist, hasOwn, merge }

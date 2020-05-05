const enlist = (key: string) => (value: { [k: string]: any }) => (xr: { [k: string]: any }): { [k: string]: any } => {
  return { ...xr, [key]: value }
}

const delist = (key: string) => (xr: { [k: string]: any }): { [k: string]: any } => {
  const { [key]: _, ...etc } = xr
  return etc
}

const hasOwn = (prop: string) => (obj: object): boolean => {
  return Object.prototype.hasOwnProperty.call (obj, prop)
}

const merge = (xr: any) => (yr: any): any => {
  return { ...xr, ...yr }
}

export { enlist, delist, hasOwn, merge }

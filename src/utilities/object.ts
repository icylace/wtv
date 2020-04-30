const enlist = (key: string) => (value: any) => (xr: any): any => {
  return { ...xr, [key]: value }
}

const delist = (key: string) => (xr: any): any => {
  const { [key]: _, ...etc } = xr
  return etc
}

const hasOwn = (prop: string) => (obj: any): boolean => {
  return Object.prototype.hasOwnProperty.call (obj, prop)
}

const merge = (xr: any) => (yr: any): any => {
  return { ...xr, ...yr }
}

export { enlist, delist, hasOwn, merge }

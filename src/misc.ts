const isNil = (x: any): boolean => x == null
const isSomething = (x: any): boolean => x != null

const readoutReplacer = (_key: any, value: any) => typeof value === "function" ? "function" : value
const readout = (x: any): string => JSON.stringify(x, readoutReplacer, 2)

// TODO:
// const readout = (path: string[]) => (obj: object): any => {
//   const replacer = (_key: any, value: any): any =>
//     typeof value === "function" ? "function" : value
//   const json = JSON.stringify(
//     // @ts-ignore
//     get(...path)(obj)
//     , replacer, 2)
//   return n_("pre")([`${path.join(".")}: ${json}`])
// }

export { isNil, isSomething, readout }

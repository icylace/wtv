import { h } from "hyperapp"

// https://github.com/jorgebucaran/hyperapp/blob/f30e70e77513948d2a1286ea6509b4e0c1de8999/lib/dom/src/index.js
const fx = (a: Function) => (b: any): any[] => {
  return [a, b]
}

// glam :: { String: Bool } -> String
const glam = (xr: any): string => {
  return Object.entries(xr)
    .reduce((acc: any, [cssClass, active]: any) => (active ? [...acc, cssClass] : acc), [])
    .join(" ")
}

// Based on:
// https://github.com/Swizz/hyperapp-html
const vnode = new Proxy(
  {},
  {
    get: (_obj: any, name: string) => (attributes: any, children: any): any =>
      typeof attributes === "object" && !Array.isArray(attributes)
        ? h(name, attributes, children)
        : h(name, {}, attributes),
  },
)

export { fx, glam, vnode }

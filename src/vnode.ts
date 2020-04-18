import { h } from "hyperapp"

// box :: String -> [VNode] -> VNode
const box = (x: any) => (xs: any): any => h("div", { class: x }, xs)

// glam :: { String: Bool } -> String
const glam = (xr: any): string =>
  Object.entries(xr)
    .reduce((acc: any, [cssClass, active]: any) => (active ? [...acc, cssClass] : acc), [])
    .join(" ")

// n :: String -> {a} -> [VNode] -> VNode
const n = (tag: any) => (attrs: any) => (contents: any): any => h(tag, attrs, contents)

// Based on:
// https://github.com/Swizz/hyperapp-html
const vnode = new Proxy(
  {},
  {
    get: (_obj, name) => (attributes: any, children: any): any =>
      typeof attributes === "object" && !Array.isArray(attributes)
        ? h(name, attributes, children)
        : h(name, {}, attributes),
  },
)

export { box, glam, n, vnode }

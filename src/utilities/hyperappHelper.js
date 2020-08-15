import { h } from "hyperapp"

// Based on:
// https://github.com/Swizz/hyperapp-html
const vnode = new Proxy ({}, {
  get: (_obj, name) => (attributes, children) =>
    typeof attributes === "object" && !Array.isArray (attributes)
      ? h (name, attributes, children)
      : h (name, {}, attributes),
})

export { vnode }

export { parseMarkup, queryString, split }

// -----------------------------------------------------------------------------

const parseMarkup = (markup: string): Document =>
  new window.DOMParser().parseFromString(markup, "text/html")

const queryString = (xr: Record<string, boolean | number | string>): string =>
  Object
    .keys(xr)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(xr[key])}`)
    .join("&")

const split = (x: string | RegExp) => (y: string): string[] =>
  y.split(x)

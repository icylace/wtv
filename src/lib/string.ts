export const parseMarkup = (markup: string): Document =>
  new window.DOMParser().parseFromString(markup, "text/html")

export const queryString = (xr: Record<string, boolean | number | string>): string =>
  Object
    .keys(xr)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(xr[key])}`)
    .join("&")

export const split = (x: string | RegExp) => (y: string): string[] =>
  y.split(x)

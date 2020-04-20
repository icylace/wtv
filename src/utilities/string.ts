// parseMarkup :: String -> DOM
const parseMarkup = (markup: string): Document => {
  return new window.DOMParser().parseFromString(markup, "text/html")
}

// queryString :: {a} -> String
const queryString = (xr: { [x: string]: string | number | boolean }): string => {
  return Object.keys(xr)
    .map((key: string) => `${encodeURIComponent(key)}=${encodeURIComponent(xr[key])}`)
    .join("&")
}

const split = (x: string | RegExp) => (y: string): string[] => {
  return y.split(x)
}

export { parseMarkup, queryString, split }

// parseMarkup :: String -> DOM
const parseMarkup = (markup: string) =>
  new window.DOMParser().parseFromString(markup, "text/html")

// queryString :: {a} -> String
const queryString = (xr: { [x: string]: string | number | boolean }) =>
  Object.keys(xr)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(xr[key])}`)
    .join("&")

// split :: (String | RegExp) -> String -> [String]
const split = (x: any) => (y: string) => y.split(x)

export { parseMarkup, queryString, split }

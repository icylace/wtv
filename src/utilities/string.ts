export { parseMarkup, queryString, split }

// -----------------------------------------------------------------------------

// parseMarkup :: String -> Document
const parseMarkup = (markup: string): Document =>
  new window.DOMParser().parseFromString(markup, "text/html")

// queryString :: { String: String | Number | Bool } -> String
const queryString = (xr: { [_: string]: string | number | boolean }): string =>
  Object
    .keys(xr)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(xr[key])}`)
    .join("&")

// split :: String | Regex -> String -> [String]
const split = (x: string | RegExp) => (y: string): string[] =>
  y.split(x)

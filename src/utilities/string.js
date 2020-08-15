const parseMarkup = (markup) => new window.DOMParser ().parseFromString (markup, "text/html")

const queryString = (xr) =>
  Object
    .keys (xr)
    .map ((key) => `${encodeURIComponent (key)}=${encodeURIComponent (xr[key])}`)
    .join ("&")

const split = (x) => (y) => y.split (x)

export { parseMarkup, queryString, split }

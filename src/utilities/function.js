const compose = (...fs) => (x) => fs.reduceRight ((acc, f) => f (acc), x)
const flip = (f) => (a) => (b) => f (b) (a)
const ifDo = (f) => (x) => x != null ? f (x) : null
const ifElse = (cond) => (f) => (g) => (x) => cond (x) ? f (x) : g (x)
const ifThen = (cond) => (f) => (x) => cond (x) ? f (x) : null
const noop = () => {}
const pipe = (...fs) => (x) => fs.reduce ((acc, f) => f (acc), x)
const tap = (f) => (x) => ((f (x), x))

// https://hyperapp.slack.com/archives/C41ECC0V6/p1596469423373000
const where = (f) => f ()

export { compose, flip, ifDo, ifElse, ifThen, noop, pipe, tap, where }

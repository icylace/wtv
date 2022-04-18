// export { compose, flip, ifDo, ifElse, ifThen, noop, pipe, tap, where }
export { compose, flip, ifElse, ifThen, noop, pipe, tap, where }

// -----------------------------------------------------------------------------

// compose :: (a -> b) -> a -> b
const compose = (...fs: Function[]) => (x: unknown): unknown =>
  fs.reduceRight((acc, f) => f(acc), x)

// flip :: (b -> a -> c) -> a -> b -> c
const flip = <a, b, c>(f: (_: b) => (_: a) => c) => (a: a) => (b: b): c =>
  f(b)(a)

// // ifDo :: (a -> Bool) -> (a -> b) -> a -> (b | null)
// const ifDo = <a, b>(f: (_: a) => b) => (x: a): b | null =>
//   x != null ? f(x) : null

// ifElse :: (a -> Bool) -> (a -> b) -> (a -> b) -> a -> b
const ifElse = <a, b>
  (cond: (_: a) => boolean) =>
    (f: (_: a) => b) =>
      (g: (_: a) => b) =>
        (x: a): b =>
          cond(x) ? f(x) : g(x)

// ifThen :: (a -> Bool) -> (a -> b) -> a -> Maybe b
const ifThen = <a, b>
  (cond: (_: a) => boolean) =>
    (f: (_: a) => b) =>
      (x: a): b | null =>
        cond(x) ? f(x) : null

// noop :: a -> Void
const noop = () => {}

// pipe :: [(a -> b)] -> a -> b
const pipe = (...fs: Function[]) => (x: any): any =>
  fs.reduce((acc, f) => f(acc), x)

// tap :: (a -> Void) -> a -> a
const tap = <a>(f: (_: a) => void) => (x: a): a =>
  (f(x), x)       // eslint-disable-line

// https://hyperapp.slack.com/archives/C41ECC0V6/p1596469423373000
const where = (f: Function): any =>
  f()

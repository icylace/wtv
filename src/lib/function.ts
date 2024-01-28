// compose :: (a -> b) -> a -> b
export const compose = (...fs: readonly Function[]) => (x: unknown): unknown =>
  fs.reduceRight((acc, f) => f(acc), x)

// flip :: (b -> a -> c) -> a -> b -> c
export const flip = <a, b, c>(f: (_: b) => (_: a) => c) => (a: a) => (b: b): c =>
  f(b)(a)

// // ifDo :: (a -> Bool) -> (a -> b) -> a -> (b | null)
// export const ifDo = <a, b>(f: (_: a) => b) => (x: a): b | null =>
//   x != null ? f(x) : null

// ifElse :: (a -> Bool) -> (a -> b) -> (a -> b) -> a -> b
export const ifElse = <a, b>
  (cond: (_: a) => boolean) =>
    (f: (_: a) => b) =>
      (g: (_: a) => b) =>
        (x: a): b =>
          cond(x) ? f(x) : g(x)

// ifThen :: (a -> Bool) -> (a -> b) -> a -> Maybe b
export const ifThen = <a, b>
  (cond: (_: a) => boolean) =>
    (f: (_: a) => b) =>
      (x: a): b | null =>
        cond(x) ? f(x) : null

// noop :: a -> Void
export const noop = () => {}

// pipe :: [(a -> b)] -> a -> b
export const pipe = (...fs: readonly Function[]) => (x: any): any =>
  fs.reduce((acc, f) => f(acc), x)

// tap :: (a -> Void) -> a -> a
export const tap = <a>(f: (_: a) => void) => (x: a): a => {
  f(x)
  return x
}

// using :: [(a -> b) | b] -> a -> [b]
export const using = <a, b>(fs: readonly (((_: a) => b) | b)[]) => (x: a): b[] =>
  fs.map((f) => typeof f === "function" ? (f as ((_: a) => b))(x) : f)

// https://hyperapp.slack.com/archives/C41ECC0V6/p1596469423373000
export const where = (f: Function): any =>
  f()

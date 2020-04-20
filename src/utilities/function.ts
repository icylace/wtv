// Combinators

// Kestrel
// always :: a -> b -> a
const always = (x: any) => (_: any): any => {
  return x
}

// Bluebird
// compose :: (a -> b) -> (c -> a) -> c -> b
const compose = (f: (a: any) => any) => (g: (c: any) => any) => (x: any): any => {
  return f(g(x))
}

// Blackbird
// compose2 :: (a -> b) -> (c -> d -> a) -> c -> d -> b
const compose2 = (f: (a: any) => any) => (g: (c: any) => (d: any) => any) => (x: any) => (y: any): any => {
  return f(g(x)(y))
}

// Idiot
// identity :: a -> a
const identity = (x: any): any => {
  return x
}

// -----------------------------------------------------------------------------

// ifElse :: (a -> Bool) -> (a -> b) -> (a -> b) -> a -> b
const ifElse = (predicate: (a: any) => boolean) => (f: (a: any) => any) => (g: (a: any) => any) => (x: any): any => {
  return predicate(x) ? f(x) : g(x)
}

// ifExists :: (Nullable a, Nullable b) => (a -> b) -> a -> b
const ifExists = (f: (a: any) => any) => (x: any): any => {
  return x != null ? f(x) : null
}

// ifThen :: (a, Nullable b) => (a -> Bool) -> (a -> b) -> a -> b | null
const ifThen = (f: (a: any) => boolean) => (g: (a: any) => any) => (x: any): any => {
  return f(x) ? g(x) : null
}

// noop :: ...a -> Void
const noop = (..._: any[]): void => {
  return undefined
}

// pipe :: [* -> *] -> * -> *
const pipe = (fs: Function[]) => (x: any): any => {
  return fs.reduce((acc: any, f: Function) => f(acc), x)
}

// tap :: (a -> Void) -> a -> a
const tap = (f: (a: any) => any) => (x: any): any => {
  f(x)
  return x
}

// toggle :: Bool -> (a -> b) -> (c -> d) -> (b | d)
const toggle = (cond: boolean) => (f: () => any) => (g: () => any): any => {
  return cond ? f() : g()
}

// uncurry2 :: (a -> b -> c) -> (a, b) -> c
const uncurry2 = (f: (a: any) => (b: any) => any) => (x: any, y: any): any => {
  return f(x)(y)
}

// -----------------------------------------------------------------------------

export { always, compose, compose2, ifElse, ifExists, ifThen, identity, noop, pipe, tap, toggle, uncurry2 }

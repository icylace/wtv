// Combinators

// Kestrel
// always :: a -> b -> a
const always = <T, U>(x: T) => (_: U): T => {
  return x
}

// Bluebird
// compose :: (a -> b) -> (c -> a) -> c -> b
const compose = <T, U, V>(f: (a: T) => U) => (g: (c: V) => T) => (x: V): U => {
  return f (g (x))
}

// Blackbird
// compose2 :: (a -> b) -> (c -> d -> a) -> c -> d -> b
const compose2 = <T, U, V, X>(f: (a: T) => U) => (g: (c: V) => (d: X) => T) => (x: V) => (y: X): U => {
  return f (g (x) (y))
}

// Idiot
// identity :: a -> a
const identity = <T>(x: T): T => {
  return x
}

// -----------------------------------------------------------------------------

// ifElse :: (a -> Bool) -> (a -> b) -> (a -> b) -> a -> b
const ifElse = <T, U>(predicate: (a: T) => boolean) => (f: (a: T) => U) => (g: (a: T) => U) => (x: T): U => {
  return predicate (x) ? f (x) : g (x)
}

// ifExists :: (Nullable a, Nullable b) => (a -> b) -> a -> b
const ifExists = <T, U>(f: (a: T) => U) => (x: T): U | null => {
  return x != null ? f (x) : null
}

// ifThen :: (a, Nullable b) => (a -> Bool) -> (a -> b) -> a -> b | null
const ifThen = <T, U>(f: (a: T) => boolean) => (g: (a: T) => U) => (x: T): U | null => {
  return f (x) ? g (x) : null
}

// noop :: a -> Void
const noop = <T>(_: T): void => {
  return undefined
}

// pipe :: [* -> *] -> * -> *
const pipe = (fs: Function[]) => (x: any): any => {
  return fs.reduce ((acc: any, f: Function) => f (acc), x)
}

// tap :: (a -> Void) -> a -> a
const tap = <T, U>(f: (a: T) => U) => (x: T): T => {
  f (x)
  return x
}

// toggle :: Bool -> (a -> b) -> (c -> d) -> (b | d)
const toggle = (cond: boolean) => (f: () => any) => (g: () => any): any => {
  return cond ? f () : g ()
}

// uncurry2 :: (a -> b -> c) -> (a, b) -> c
const uncurry2 = <T, U, V>(f: (a: T) => (b: U) => V) => (x: T, y: U): V => {
  return f (x) (y)
}

// -----------------------------------------------------------------------------

export { always, compose, compose2, ifElse, ifExists, ifThen, identity, noop, pipe, tap, toggle, uncurry2 }

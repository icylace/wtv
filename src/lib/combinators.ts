type F1<b, c> = (_: b) => c
type F2<a, b, c> = (_: a) => (_: b) => c

// Kestrel
// always :: a -> b -> a
export const always = <a>(x: a) => (_: unknown): a =>
  x

// Blackbird
// compose2 :: (c -> d) -> (a -> b -> c) -> a -> b -> d
export const compose2 = <a, b, c, d>(f: F1<c, d>) => (g: F2<a, b, c>) => (x: a) => (y: b): d =>
  f(g(x)(y))

// Bluebird
// dot :: (b -> c) -> (a -> b) -> a -> c
export const dot = <a, b, c>(f: F1<b, c>) => (g: F1<a, b>) => (x: a): c =>
  f(g(x))

// Idiot
// identity :: a -> a
export const identity = <a>(x: a): a =>
  x

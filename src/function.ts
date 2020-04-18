const always = (x: any) => (_: any): any => x
const identity = (x: any): any => x

// ifExists :: (Nullable a, Nullable b) => (a -> b) -> a -> b
const ifExists = (f: (arg0: any) => any) => (x: any) => x != null ? f(x) : null

// ifThen :: (a, Nullable b) => (a -> Bool) -> (a -> b) -> a -> b
const ifThen = (f: (arg0: any) => any) => (g: (arg0: any) => any) => (x: any) => f(x) ? g(x) : null

const noop = (_: any): void => { }

// tap :: (a -> Void) -> a -> a
const tap = (f: (arg0: any) => any) => (x: any): any => ((f(x), x))

// toggle :: Bool -> (a -> b) -> (c -> d) -> (b | d)
const toggle = (cond: any) => (f: () => any) => (g: () => any) => (cond ? f() : g())

// uncurry2 :: (a -> b -> c) -> (a, b) -> c
const uncurry2 = (f: (arg0: any) => { (arg0: any): any; new(): any }) => (x: any, y: any) => f(x)(y)

export { always, ifExists, ifThen, identity, noop, tap, toggle, uncurry2 }

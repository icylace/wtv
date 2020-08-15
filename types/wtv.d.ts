declare module "wtv" {

  // ---------------------------------------------------------------------------
  //  Array
  // ---------------------------------------------------------------------------

  // allocate :: Int -> [Undefined]
  function allocate(x: number): undefined[]

  // append :: a -> [a] -> [a]
  function append<A>(x: A): (xs: A[]) => A[]

  // any :: (a -> Bool) -> [a] -> boolean
  function any<A>(f: (_: A) => boolean): (xs: A[]) => boolean

  // concat :: [[a]] -> [a]
  function concat<A>(xss: A[][]): A[]

  // exclude :: Int -> [a] -> [a]
  function exclude(i: number): <A>(xs: A[]) => A[]

  // filter :: (a -> Bool) -> [a] -> [a]
  function filter<A>(f: (_: A) => boolean): (xs: A[]) => A[]

  // findIndex :: (a -> Bool) -> [a] -> Int
  function findIndex<A>(f: (_: A) => boolean): (xs: A[]) => number

  // flatten :: [[a]] -> [a]
  function flatten<A>(xs: A[][]): A[]

  // head :: [a] -> Maybe a
  function head<A>(xs: A[]): A | null

  // init :: [a] -> [a]
  function init<A>(xs: A[]): A[]

  // intercalate :: String -> [a] -> String
  function intercalate(x: string): <A>(xs: A[]) => string

  // isArray :: a -> Bool
  function isArray<A>(x: A): boolean

  // last :: [a] -> Maybe a
  function last<A>(xs: A[]): A | null

  // map :: (a -> b) -> [a] -> [b]
  function map<A, B>(f: (_: A) => B): (xs: A[]) => B[]

  // prepend :: a -> [a] -> [a]
  function prepend<A>(x: A): (xs: A[]) => A[]

  // range :: Int -> Int -> [Int]
  function range(m: number): (n: number) => number[]

  // reject :: (a -> Bool) -> [a] -> [a]
  function reject<A>(f: (_: A) => boolean): (xs: A[]) => A[]

  // repeat :: a -> Int -> [a]
  function repeat<A>(x: A): (n: number) => A[]

  // numberSequence :: Int -> Int[]
  function numberSequence(n: number): number[]

  // tail :: [a] -> [a]
  function tail<A>(xs: A[]): A[]

  // uniques :: [a] -> [a]
  function uniques<A>(xs: A[]): A[]

  // ---------------------------------------------------------------------------
  //  Boolean
  // ---------------------------------------------------------------------------

  // asBool :: a -> Bool
  function asBool<A>(x: A): boolean

  // ---------------------------------------------------------------------------
  //  Combinators
  // ---------------------------------------------------------------------------

  // always :: a -> b -> a
  function always<A, B>(x: A): (_: B) => A

  // compose2 :: (c -> d) -> (a -> b -> c) -> a -> d
  function compose2<A, B, C, X>(f: (_: A) => B): (g: (_: C) => (_: X) => A) => (x: C) => (y: X) => B

  // dot :: (b -> c) -> (a -> b) -> a -> c
  function dot<A, B, C>(f: (_: B) => C): (g: (_: A) => B) => (x: A) => C

  // identity :: a -> a
  function identity<A>(x: A): A

  // ---------------------------------------------------------------------------
  //  Function
  // ---------------------------------------------------------------------------

  // compose :: (a -> b) -> a -> b
  function compose(...fs: Function[]): (x: any) => any

  // flip :: (b -> a) -> a -> b -> a
  function flip<A, B>(f: (_: B) => A): (_: A) => (_: B) => B

  // ifDo :: (a -> Bool) -> (a -> b) -> a -> (b | null)
  function ifDo<A, B>(f: (_: A) => boolean): (g: (_: A) => B) => (x: A) => B | null

  // ifElse :: (a -> Bool) -> (a -> b) -> (a -> b) -> a -> b
  function ifElse<A, B>(cond: (_: A) => boolean): (f: (_: A) => B) => (g: (_: A) => B) => (x: A) => B

  // ifThen :: (a -> Bool) -> (a -> b) -> a -> Maybe b
  function ifThen<A, B>(cond: (_: A) => boolean): (f: (_: A) => B) => (x: A) => B | null

  // noop :: a -> Void
  function noop<A>(_: A): void

  // pipe :: (a -> b) -> a -> b
  function pipe(...fs: Function[]): (x: any) => any

  // tap :: (a -> Void) -> a -> a
  function tap<A>(f: (_: A) => void): (x: A) => A

  // ---------------------------------------------------------------------------
  //  Hyperapp helper
  // ---------------------------------------------------------------------------

  // vnode :: String -> (a, b) -> {c}
  function vnode(name: string): <T, U>(attributes: T, children: U) => object

  // ---------------------------------------------------------------------------
  //  Misc
  // ---------------------------------------------------------------------------

  // isNil :: a -> Bool
  function isNil<T>(x: T): boolean

  // isSomething :: a -> Bool
  function isSomething<T>(x: T): boolean

  // dump :: a -> String
  function dump<T>(x: T): string

  // readout :: [String] -> {a} -> b
  function readout(path: string[]): <T>(xr: object) => T

  // ---------------------------------------------------------------------------
  //  Number
  // ---------------------------------------------------------------------------

  // asNumber :: String -> Number
  function asNumber(x: string): number

  // dialDown :: Int -> Int -> Int
  function dialDown(range: number): (x: number) => number

  // dialUp :: Int -> Int -> Int
  function dialUp(range: number): (x: number) => number

  // dice :: Int -> Int -> Int
  function dice(min: number): (max: number) => number

  // reifiedNumber :: a -> Number | a
  function reifiedNumber<A>(x: A): number | A

  // sanitizedNumber :: a -> Number
  function sanitizedNumber<T>(x: T): number

  // ---------------------------------------------------------------------------
  //  Object
  // ---------------------------------------------------------------------------

  // enlist :: String -> {a} -> {a} -> {a}
  function enlist(key: string): (value: Record<string, any>) => (xr: Record<string, any>) => Record<string, any>

  // delist :: String -> {a} -> {a}
  function delist(key: string): (xr: object) => object

  // hasOwn :: String -> {a} -> Bool
  function hasOwn(prop: string): (obj: object) => boolean

  // imprint :: {a} -> {a} -> {a}
  function imprint(transformationMap: object): (xr: object) => object

  // merge :: {a} -> {a} -> {a}
  function merge(xr: object): (yr: object) => object

  // ---------------------------------------------------------------------------
  //  Strings
  // ---------------------------------------------------------------------------

  // parseMarkup :: String -> Document
  function parseMarkup(markup: string): Document

  // queryString :: { String: String | Number | Bool } -> String
  function queryString(xr: { [_: string]: string | number | boolean }): string

  // split :: String | Regex -> String -> [String]
  function split(x: string | RegExp): (y: string) => string[]

  // ---------------------------------------------------------------------------

}

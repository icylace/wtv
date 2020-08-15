// Kestrel
const always = (x) => (_) => x

// Blackbird
const compose2 = (f) => (g) => (x) => (y) => f (g (x) (y))

// Bluebird
const dot = (f) => (g) => (x) => f (g (x))

// Idiot
const identity = (x) => x

export { always, compose2, dot, identity }

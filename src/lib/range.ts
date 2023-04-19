export const clamp = (min: number, max: number, x: number): number => {
  if (x < min) return min
  if (x > max) return max
  return x
}

export const inside = (min: number, max: number, x: number): number | null => {
  return min <= x && x <= max ? x : null
}

export const normalize = (min: number, max: number, x: number): number => {
  if (min == max) return 1.0
  return (x - min) / (max - min)
}

export const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const wrap = (min: number, max: number, x: number): number => {
  const range = max - min + 1
  return x >= min
    ? min + (x - min) % range
    : max - (max - x) % range
}

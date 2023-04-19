// Credit:
// Optimized Easing Functions by Michael "Code Poet" Pohoreski, aka Michaelangel007
// https://github.com/Michaelangel007/easing
// License: Free as in speech and beer; Attribution is always appreciated!
//
// Modified by Ron Martinez

const cos = Math.cos
const e = Math.E
const log10 = Math.log10
const pi = Math.PI
const pow = Math.pow
const sin = Math.sin
const sqrt = Math.sqrt

// -----------------------------------------------------------------------------
//  Power Easings
// -----------------------------------------------------------------------------

export function none        (_: number): number { return 1                             }    // x^0 Placeholder for no active animation
export function linear      (p: number): number { return p                             }    // x^1 Note: In = Out = InOut
export function inQuadratic (p: number): number { return p * p                         }    // x^2 = pow(p, 2)
export function inCubic     (p: number): number { return p * p * p                     }    // x^3 = pow(p, 3)
export function inQuartic   (p: number): number { return p * p * p * p                 }    // x^4 = pow(p, 4)
export function inQuintic   (p: number): number { return p * p * p * p * p             }    // x^5 = pow(p, 5)
export function inSextic    (p: number): number { return p * p * p * p * p * p         }    // x^6 = pow(p, 6)
export function inSeptic    (p: number): number { return p * p * p * p * p * p * p     }    // x^7 = pow(p, 7)
export function inOctic     (p: number): number { return p * p * p * p * p * p * p * p }    // p^8 = pow(p, 8)

export function inOutQuadratic (p: number): number { const t = 2 * p; if (t < 1) { return p * t                         } const m = p - 1; return 1 - 2   * m * m                         }
export function inOutCubic     (p: number): number { const t = 2 * p; if (t < 1) { return p * t * t                     } const m = p - 1; return 1 + 4   * m * m * m                     }
export function inOutQuartic   (p: number): number { const t = 2 * p; if (t < 1) { return p * t * t * t                 } const m = p - 1; return 1 - 8   * m * m * m * m                 }
export function inOutQuintic   (p: number): number { const t = 2 * p; if (t < 1) { return p * t * t * t * t             } const m = p - 1; return 1 + 16  * m * m * m * m * m             }
export function inOutSextic    (p: number): number { const t = 2 * p; if (t < 1) { return p * t * t * t * t * t         } const m = p - 1; return 1 - 32  * m * m * m * m * m * m         }
export function inOutSeptic    (p: number): number { const t = 2 * p; if (t < 1) { return p * t * t * t * t * t * t     } const m = p - 1; return 1 + 64  * m * m * m * m * m * m * m     }
export function inOutOctic     (p: number): number { const t = 2 * p; if (t < 1) { return p * t * t * t * t * t * t * t } const m = p - 1; return 1 - 128 * m * m * m * m * m * m * m * m }

export function outQuadratic (p: number): number { const m = p - 1; return 1 - m * m                         }
export function outCubic     (p: number): number { const m = p - 1; return 1 + m * m * m                     }
export function outQuartic   (p: number): number { const m = p - 1; return 1 - m * m * m * m                 }
export function outQuintic   (p: number): number { const m = p - 1; return 1 + m * m * m * m * m             }
export function outSextic    (p: number): number { const m = p - 1; return 1 - m * m * m * m * m * m         }
export function outSeptic    (p: number): number { const m = p - 1; return 1 + m * m * m * m * m * m * m     }
export function outOctic     (p: number): number { const m = p - 1; return 1 - m * m * m * m * m * m * m * m }

// -----------------------------------------------------------------------------
//  Standard Easings
// -----------------------------------------------------------------------------

export function inBack(p: number): number {
  const k = 1.70158
  return p * p * ((k + 1) * p - k)
}
// NOTE: Can go negative! i.e. x = 0.008
export function inOutBack(p: number): number {
  const k = 1.70158 * 1.525
  const t = 2 * p
  if (t < 1) return t * p * ((k + 1) * t - k)
  const m = p - 1
  return 1 + 2 * m * m * (2 * (k + 1) * m + k)
}
export function outBack(p: number): number {
  const k = 1.70158
  const m = p - 1
  return 1 + m * m * ((k + 1) * m + k)
}

export function inBounce(p: number): number {
  return 1 - outBounce(1 - p)
}
export function inOutBounce(p: number): number {
  const t = 2 * p
  if (t < 1) return 0.5 - 0.5 * outBounce(1 - t)
  else       return 0.5 + 0.5 * outBounce(t - 1)
}
export function outBounce(p: number): number {
  const r  = 1 / 2.75     // reciprocal
  const k1 =         r    // 36.36%
  const k2 = 2     * r    // 72.72%
  const k3 = 1.5   * r    // 54.54%
  const k4 = 2.5   * r    // 90.90%
  const k5 = 2.25  * r    // 81.81%
  const k6 = 2.625 * r    // 95.45%
  const k0 = 7.5625
  if (p < k1) {                   return k0 * p * p            }
  if (p < k2) { const t = p - k3; return k0 * t * t + 0.75     }    // 48/64
  if (p < k4) { const t = p - k5; return k0 * t * t + 0.9375   }    // 60/64
  else        { const t = p - k6; return k0 * t * t + 0.984375 }    // 63/64
}

export function inCircle(p: number): number {
  return 1 - sqrt(1 - p * p)
}
export function inOutCircle(p: number): number {
  const t = 2 * p
  if (t < 1) return 0.5 * (1 - sqrt(1 - t * t))
  const m = p - 1
  return 0.5 * (sqrt(1 - 4 * m * m) + 1)
}
export function outCircle(p: number): number {
  const m = p - 1
  return sqrt(1 - m * m)
}

export function inElastic(p: number): number {
  if (p == 0) return 0
  if (p == 1) return 1
  const m = p - 1
  return -pow(2, 10 * m) * sin(pi / 6 * (40 * m - 3))
}
export function inOutElastic(p: number): number {
  if (p == 0) return 0
  if (p == 1) return 1
  const s = 2 * p - 1                 // remap: [0, 0.5] -> [-1, 0]
  const k = pi / 18 * (80 * s - 9)    // and    [0.5, 1] -> [0, +1]
  if (s < 0) return    -0.5 * pow(2,  10 * s) * sin(k)
  else       return 1 + 0.5 * pow(2, -10 * s) * sin(k)
}
export function outElastic(p: number): number {
  if (p == 0) return 0
  if (p == 1) return 1
  else        return 1 + pow(2, -10 * p) * sin(pi / 6 * (-40 * p - 3))
}

// NOTE: 'Exponent2' needs clamping for 0 and 1 respectively
export function inExponent2(p: number): number {
  if (p <= 0) return 0
  else        return pow(2, 10 * (p - 1))
}
export function inOutExponent2(p: number): number {
  if (p <= 0)   return 0
  if (p >= 1)   return 1
  if (p <  0.5) return     pow(2,  10 * (2 * p - 1) - 1)
  else          return 1 - pow(2, -10 * (2 * p - 1) - 1)
}
export function outExponent2(p: number): number {
  if (p >= 1) return 1
  else        return 1 - pow(2, -10 * p)
}

export function inSine    (p: number): number { return        1 - cos(0.5 * pi * p)  }
export function inOutSine (p: number): number { return 0.5 * (1 - cos(      pi * p)) }
export function outSine   (p: number): number { return            sin(0.5 * pi * p)  }

// -----------------------------------------------------------------------------
//  Non-Standard Easings
// -----------------------------------------------------------------------------

export function inExponentE(p: number): number {
  if (p <= 0) return 0
  else        return pow(e, -10 * (1 - p))    // Scale 0..1 -> p^-10 .. p^0
}
export function inOutExponentE(p: number): number {
  const t = 2 * p
  if (t < 1) return 0.5 - 0.5 * outExponentE(1 - t)
  else       return 0.5 + 0.5 * outExponentE(t - 1)
}
export function outExponentE(p: number): number {
  return 1 - inExponentE(1 - p)
}

export function inLog10(p: number): number {
  return 1 - outLog10(1 - p)
}
export function inOutLog10(p: number): number {
  const t = 2 * p
  if (t < 1) return 0.5 - 0.5 * outLog10(1 - t)
  else       return 0.5 + 0.5 * outLog10(t - 1)
}
export function outLog10(p: number): number {
  return log10(9 * p + 1)    // Scale 0..1 -> Log10(1) .. Log10(10)
}

export function inSquareRoot(p: number): number {
  return 1 - outSquareRoot(1 - p)
}
export function inOutSquareRoot(p: number): number {
  const t = 2 * p
  if (t < 1) return 0.5 - 0.5 * outSquareRoot(1 - t)
  else       return 0.5 + 0.5 * outSquareRoot(t - 1)
}
export function outSquareRoot(p: number): number {
  return sqrt(p)
}

export function smoothstep(t: number, x0: number, x1: number): number {
  const p = (t - x0) / (x1 - x0)
  if (p <= 0) return 0
  if (p >= 1) return 1
  else        return (3 - 2 * p) * p * p
}

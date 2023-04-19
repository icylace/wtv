import { describe, expect, test } from "vitest"

import { reifiedNumber } from "../lib/number.ts"

// -----------------------------------------------------------------------------

describe("`reifiedNumber()`", () => {
  test("00", () => expect(reifiedNumber(11)).toBe(11))
  test("01", () => expect(reifiedNumber("12")).toBe(12))
  test("02", () => expect(reifiedNumber("gfjhgf")).toBe("gfjhgf"))
  test("03", () => expect(reifiedNumber("13gh")).toBe("13gh"))
  test("04", () => expect(reifiedNumber("g13h")).toBe("g13h"))
  test("05", () => expect(reifiedNumber("gh13")).toBe("gh13"))
})

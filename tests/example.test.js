const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(calculateFinalAmount(100)).toBe(100);
});

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("SAVE10 coupon", () => {
  expect(calculateFinalAmount(500, "SAVE10")).toBe(450);
});

test("FLAT50 boundary case", () => {
  expect(calculateFinalAmount(50, "FLAT50")).toBe(0);
});

test("case-insensitive coupon", () => {
  expect(calculateFinalAmount(500, "save10")).toBe(450);
});

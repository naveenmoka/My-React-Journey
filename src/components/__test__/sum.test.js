import { sum } from "../sum";

test("Sum function should be calculate", () => {
  const result = sum(3, 4);

  expect(result).toBe(7);
});

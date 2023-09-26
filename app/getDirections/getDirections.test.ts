describe("Given a sum function", () => {
  describe("When it receives the number 5 and 3 as parameters", () => {
    test("Then it should return the number 8", () => {
      const expectedResult = 8;
      const operator1 = 5;
      const operator2 = 3;

      const sum = (a: number, b: number): number => a + b;

      const result = sum(operator1, operator2);

      expect(result).toBe(expectedResult);
    });
  });
});

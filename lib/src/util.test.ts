import { doubleIt } from "./util";

describe("util", () => {
    describe("doubleIt()", () => {
        it("is a function", () => {
            expect(doubleIt).toBeInstanceOf(Function);
        });

        it("is doubles numbers", () => {
            const result1 = doubleIt(1);
            expect(result1).toBe(2);
            const result2 = doubleIt(0);
            expect(result2).toBe(0);
            const result3 = doubleIt(-42);
            expect(result3).toBe(-84);
            const result4 = doubleIt(64);
            expect(result4).toBe(128);
        });
        it("returns NaN for NaN", () => {
            const result = doubleIt(NaN);
            expect(result).toBe(NaN);
        });
    });
});

import { quadrupleIt, transformText } from "./util";

describe("util", () => {
    describe("transformText", () => {
        it("is a function", () => {
            expect(transformText).toBeInstanceOf(Function);
        });
        it("transforms text", () => {
            const text = "petter";
            const transformedText = transformText(text);
            expect(transformedText).toEqual("PETTER");
        });
    });

    describe("quadrupleIt", () => {
        it("is a function", () => {
            expect(quadrupleIt).toBeInstanceOf(Function);
        });
        it("quadruples numbers", () => {
            const result1 = quadrupleIt(1);
            expect(result1).toBe(4);
            const result2 = quadrupleIt(0);
            expect(result2).toBe(0);
            const result3 = quadrupleIt(-42);
            expect(result3).toBe(-168);
            const result4 = quadrupleIt(64);
            expect(result4).toBe(256);
        });
        it("returns NaN for NaN", () => {
            const result = quadrupleIt(NaN);
            expect(result).toBe(NaN);
        });
    });
});

import {sort} from './app';

describe("sort()", () => {
    test("small dimensions", () => {
        expect(sort(10,10,10,1)).toEqual("standard")
    });

    test("bulk only, 1 dimension is greater than or equal to 150", () => {
        expect(sort(150,10,10,1)).toEqual("special");
    });

    test("bulk only", () => {
        expect(sort(150,10,10,1)).toEqual("special");
    });

    test("volume exactly 1,000,000", () => {
        expect(sort(100,100,100,1)).toEqual("special");
    });

    test("1 dimension is 150 and mass is large", () => {
        expect(sort(100,1,150,20)).toEqual("rejected");
    });

    test("1 dimension is 150 and mass is large", () => {
        expect(sort(100,100,100,26)).toEqual("rejected");
    });

    test("Check if any number passed is negative", () => {
        expect(sort(12,50,10,-5)).toEqual("rejected");
    });

    test("Check if any number passed is negative", () => {
        expect(sort(12,-1,10,5)).toEqual("rejected");
    });
});
import {sum} from "./example";

describe("example", () => {
    it('should return sum of 1 and 4', () => {
        expect(sum(1, 4)).toBe(5)
    })

    it('should return 0 if one of args is not a number', () => {
        expect(sum("Apple", "Dog")).toBe(0)
    })
})
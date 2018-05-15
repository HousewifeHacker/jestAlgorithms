import { hello, adder} from "./hello.js"

describe('Adder function', () => {
    it('returns an integer', () => {
        expect(typeof adder(1,2)).toBe('number');
    });
    it('adds two positive numbers', () => {
        expect(adder(1,2)).toEqual(3);
    });
    it('adds negative numbers', () => {
        expect(adder(-1,-2)).toEqual(-3);
    });
});

test("Hello returns hello", () => {
    expect(hello()).toBe('Hello');
});


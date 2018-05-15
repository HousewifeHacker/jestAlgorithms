import { reverseInt } from './reverseInt.js'

describe('reverseInt', () => {
    it('returns a number', () => {
        expect(typeof reverseInt(123)).toBe('number');
    });
    it('reverses positive', () => {
        expect(reverseInt(123)).toBe(321);
    });
    it('removes resulting leading 0s', () => {
        expect(reverseInt(1230)).toBe(321);
    });
    it('reverses negatives', () => {
        expect(reverseInt(-321)).toBe(-123);
    });
})

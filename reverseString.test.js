import { reverseString } from './reverseString.js'

describe('reverseString', () => {
    it('can handle empty string', () => {
        expect(reverseString('')).toBe('');
    });
    it('reverses string', () => {
        expect(reverseString('qwe')).toBe('ewq');
    })
})

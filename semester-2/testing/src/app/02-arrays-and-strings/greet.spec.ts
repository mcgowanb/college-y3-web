import { greet } from './greet'
import { getCurrencies } from './getCurrencies';

describe('greet', () => {
    it('should return the name within the greeting', () => {
        expect(greet('steve')).toContain('steve');

    })
});

describe('getCurrencies', () => {
    it('should contain an element in the array', () => {
        expect(getCurrencies()).toContain('EUR');
        expect(getCurrencies()).toContain('USD');
        expect(getCurrencies()).toContain('GBP');
    })
})
import { compute } from './compute'

describe('compute', () => {
    it('should return 0 if number is negative', () => {
        let result = compute(-1);
        expect(result).toBe(0); 
    })
    //shift alt down arrot
    it('should return 1 added to the number if its positive', () => {
        let result = compute(3);
        expect(result).toBe(4); 
    })
});  
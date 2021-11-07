const tail = require('./tail');

describe('Tail', () => {

    it('Should return [2,3,4] if array is [1,2,3,4]', () => {
        expect(tail([1,2,3,4])).toEqual([2,3,4]);
    });

    it('Should return [] if length of array is 0', () => {
        expect(tail([])).toEqual([]);
    });
})

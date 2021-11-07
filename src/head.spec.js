const head = require('./head');

describe('Head', () => {

    it('Should return 1 is array is [1,2,3,4]', () => {
        expect(head([1,2,3,4])).toEqual(1);
    });

    it('Should return [] if length of array is 0', () => {
        expect(head([])).toEqual([]);
    });

})

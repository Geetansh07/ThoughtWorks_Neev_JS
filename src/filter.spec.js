const filter = require('./filter');

describe('Filter', () => {

    it('Should return [] if length of array is zero', () => {
        expect(filter([], x => true)).toEqual([]);
    });

    it('Should return all elements of an array if the condition is true', () => {
        expect(filter([1,2,3], x => true)).toEqual([1,2,3]);
    });
})
  
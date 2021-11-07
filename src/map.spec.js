const map = require('./map');

describe('Map', () => {

    it('Should return [] if length of array is zero', () => {
        expect(map([], "cube")).toEqual([]);
    });

    it('Should return cube of elements if array is [1,2,3]', () => {
        expect(map([1,2,3], "cube")).toEqual([1,8,27]);
    });

    it('Should return the same elements of an array if array is [1,2,3]', () => {
        expect(map([1,2,3], "identity")).toEqual([1,2,3]);
    });
})
  
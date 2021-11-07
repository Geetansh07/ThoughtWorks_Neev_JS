const filter = require('./filter');

describe('Filter', () => {

    it('Should return [] if length of array is zero', () => {
        expect(filter([], x => true)).toEqual([]);
    });

    it('Should return all elements of an array if the condition is true', () => {
        expect(filter([1,2,3], x => true)).toEqual([1,2,3]);
    });

    it('Should return empty array if the condition is false', () => {
        expect(filter([1,2,3], x => false)).toEqual([]);
    });

    it('Should return number only greater than one in an array', () => {
        expect(filter([1,2,3], x => x > 1)).toEqual([2, 3]);
    });

    it('Should return only upperCase letters in an array', () => {
        expect(filter(['a','B','c','D'], "filterUpperCase")).toEqual(['B', 'D']);
    });
})
  
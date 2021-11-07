const filter = require('./filter');

describe('Filter', () => {

    it('Should return [] if length of array is zero', () => {
        expect(filter([], x => true)).toEqual([]);
    });
})
  
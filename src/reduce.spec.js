const reduce = require('./reduce');

describe('Reduce', () => {

    it('Should return [] if length of array is zero', () => {
        expect(reduce([], (x,y)=>x+y)).toEqual([]);
    });
})
  
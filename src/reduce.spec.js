const reduce = require('./reduce');

describe('Reduce', () => {

    it('Should return [] if length of array is zero', () => {
        expect(reduce([], (x,y)=>x+y)).toEqual([]);
    });

    it('Should return initial value 10 if length of array is zero', () => {
        expect(reduce([], (x,y)=>x+y, 10)).toEqual(10);
    });

    it('Should return zabc from an array [a,b,c] when inital value z is specified', () => {
        expect(reduce(['a','b','c'], (x,y)=>x+y, 'z')).toEqual("zabc");
    });

})
  
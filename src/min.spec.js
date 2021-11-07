const min = require('./min');

describe('Min', () => {

    it('Should return minimum element from an array', () => {
        expect(min([1, 2, 3, 4])).toEqual(1);
    });
})
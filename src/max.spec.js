const max = require('./max');

describe('Max', () => {

    it('Should return maximum element from an array', () => {
        expect(max([1, 2, 3, 4])).toEqual(4);
    });
})
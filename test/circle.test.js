const Circle = require('../lib/circle');

describe('circle', () => {
    it('Should be an intance of forum class', () => {
        const circle = new Circle();
        expect(circle).toBeInstanceOf(Circle);
    })
})
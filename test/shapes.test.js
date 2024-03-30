const Shapes = require('./lib/shapes.js');

describe('Shapes', () =>{
    describe('instance', () => {
        it('Should be instance of Shapes', () => {
            const shapes = new Shapes();
            expect(shapes).toBeInstanceOf(Shapes);
        })
    })
})


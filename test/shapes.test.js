const Shape = require('../lib/shapes.js');
const { Circle, Square, Triangle } = require('../lib/shapes.js');


describe('Shapes', () =>{
    describe('instance', () => {
        it('Should be instance of Shapes', () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape);
        })
    })
})

describe('Circle', () => {
    describe('istance', () => {
        it('Should be instance of Circle', () => {
            const circle = new Circle();
            expect(circle).toBeInstanceOf(Circle);
        })
    })
})

describe('Circle', () => {
    describe('Circle svg', () => {
                                    it('Should be circle svg with selected color', () => {
                                        const circle = new Circle();
                                        let color = 'blue';
                                        circle.setColor("blue");
                                        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}"/>`);
                                    })
                                })
                            })

describe('Square', () => {
    describe('Square svg', () => {
        it('Should be square svg with selected color', () => {
            const square = new Square();
            let color = 'pink'
            square.setColor(color);
            expect(square.render()).toEqual(`<rect x="50" y="65" width="150" height="150" fill="${color}"/>`);
           })
    })
})

describe('Triangle', () => {
    describe('Triangle svg', () => {
        it('Should be triangle svg with selected color', () => {
            const triangle = new Triangle();
            let color = 'yellow';
            triangle.setColor(color);
            expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`);
           })
    })
})



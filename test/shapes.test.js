const { Circle, Square, Triangle, Shape } = require('../lib/shapes.js');

console.log(Shape);
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
            expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="${color}" />
            <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`);
        })
    })
})
                                    

describe('Square', () => {
    describe('Square svg', () => {
        it('Should be square svg with selected color', () => {
            const square = new Square();
            let color = ('pink')
            square.setColor(color);
            expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect x="50" y="65" width="150" height="150" fill="${color}"/>
            <text x="125" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`);
           })
    })
})

describe('Triangle', () => {
    describe('Triangle svg', () => {
        it('Should be triangle svg with selected color', () => {
            const triangle = new Triangle();
            let color = 'yellow';
            triangle.setColor(color);
            expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150, 18 244, 182 56, 182" fill="${color}" />
            <text x="150" y="130" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`
    );
           })
    })
})



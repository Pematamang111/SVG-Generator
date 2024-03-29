const inquirer = require('inquirer');

class Shapes {
    constructor (circle, triangle, square) {
    this.circle = circle;
    this.triangle = triangle;
    this.square = square;
    }
}

inquirer 
.prompt ([{
    type: 'checkbox',
    name: 'shape',
    message: 'What shape of SVG do you want to create?',
    choices : ['Circle', 'Triangle', 'Square']
},
{
    type: 'input',
    name: 'letter',
    message: 'What letters would you like to have in the SVG?',
    choices: '/[A-Za-z]/'
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'What color do you want in shape?',
    choices: ''
},
{
    type: 'input',
    name: 'letterColor',
    message: 'What color do you want for letter?',
    color: ''
}
])
 
module.exports = Shapes;

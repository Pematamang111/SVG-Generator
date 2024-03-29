const inquirer = require('inquirer');

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
    message: 'Enter up to three characters.',
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

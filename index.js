const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes')

inquirer 
.prompt ([{
    type: 'checkbox',
    name: 'shape',
    message: 'What shape of SVG do you want to create?',
    choices : ['Circle', 'Triangle', 'Square']
},
{
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters.'
},
{
    type: 'input',
    name: 'color',
    message: 'Enter a color keyword (OR a hexadecimal number) for shape.'
},
{
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword (OR a hexadecimal number) for text.'
}
])
.then((data) => {
fs.writeFile('./logo.svg', generateLogo(data), (err) => {
    err? console.log('error') : console.log('sucess');
})
})

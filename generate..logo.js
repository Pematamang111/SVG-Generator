const { Circle, Square, Triangle } = require('./lib/shapes.js');


function generateLogo(data){
let shape = undefined;
if (data.shape === Circle) {
    shape = new Circle(data.color, data.text, data.textColor);
}else if (data.shape === Square) {
    shape = new Square(data.color, data.text, data.textColor);
}else if (data.shape === Triangle) {
    shape = new Triangle(data.color, data.text, data.textColor);
}
return shape.render();
}

module.exports = generateLogo;
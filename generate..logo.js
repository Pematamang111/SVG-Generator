const { Circle, Square, Triangle } = require('./lib/shapes');


function generateLogo(data){

if (data.shape === Circle) {
    return Circle.render();
}else if (data.shape === Square) {
    return Square.render();
}else if (data.shape === Triangle) {
    return Triangle.render();
}

}

module.exports = generateLogo;
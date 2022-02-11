"use strict";
let message = 'Hello World';
console.log(message);
let saludo = 'Hola pueblo';
console.log(saludo);
var color;
(function (color) {
    color[color["Verde"] = 0] = "Verde";
    color[color["Blanco"] = 1] = "Blanco";
})(color || (color = {}));
let colorAuto = color.Blanco;
console.log(colorAuto);

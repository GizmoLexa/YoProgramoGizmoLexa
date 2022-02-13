"use strict";
class Persona {
    constructor(nombre_persona, apellido_persona) {
        this.apellido = apellido_persona;
        this.nombre = nombre_persona;
    }
    obtenerApellido() {
        return this.apellido;
    }
    static estatura() {
        return 170;
    }
}
let niña = new Persona("Monse", "Insfran");
console.log(niña.obtenerApellido(), niña.nombre);
console.log("Altura de la persona " + Persona.estatura());

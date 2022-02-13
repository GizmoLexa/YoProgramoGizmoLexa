class Persona {
    nombre:string;
    private apellido:string;
  
    constructor (nombre_persona:string, apellido_persona:string) {
      this.apellido = apellido_persona;
      this.nombre = nombre_persona;
    }
    obtenerApellido():string{
      return this.apellido;
    }
    static estatura():number{
      return 170;
    }
  }
  
  let niña = new Persona("Monse", "Insfran");
  
  console.log(niña.obtenerApellido(), niña.nombre);
  
  console.log("Altura de la persona "+Persona.estatura());
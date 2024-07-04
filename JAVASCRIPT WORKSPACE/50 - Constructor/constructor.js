function Persona(nombre,edad){
    this.nombre= nombre;
    this.edad=edad;
}

let persona1 = new Persona('Juan',25);

console.log(persona1.nombre);

console.log(persona1.edad);
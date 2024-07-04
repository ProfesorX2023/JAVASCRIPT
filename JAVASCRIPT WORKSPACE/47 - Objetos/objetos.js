//Plantilla
class Persona{
    constructor (nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}
//Clases con Mayuscula y objetos con minuscula

const persona1 = new Persona('Juan',23);
const persona2 = new Persona('Pablo',33);
const persona3 = new Persona('Cristobalina',50);

persona1.saludar();

persona2.saludar();

persona3.saludar();



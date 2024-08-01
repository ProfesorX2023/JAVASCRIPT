//Definimos un constructor de función
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

//Añadimos un método al protipo persona
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
}

//Creamos una instancia de perona
const persona1 = new Persona('Juan', 30);

//Usamos el método saludar, que está en el prototipo
persona1.saludar();
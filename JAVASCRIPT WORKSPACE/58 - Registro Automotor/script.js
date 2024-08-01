function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let automovil1 = new Automovil('Ford','Focus','Rojo','2015','Matias Pérez');
let automovil2 = new Automovil('Chevrolet','Camaro','Amarillo',2018,'Silvina Marquez');
let automovil3 = new Automovil('Toyota','Corolla','Blanco',2021,'Carlos Garcia');
let automovil4 = new Automovil('Mazda','Protege','negro',2002,'Fernando Garcia');
let automovil5 = new Automovil('Dodge','Camaro','Gris',2024,'Marcelo Torres');
let automoviles = [automovil1, automovil2, automovil3,automovil4,automovil5];

Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
}

Automovil.prototype.encender = function(){
    alert("El automovil fue encendido");
}

Automovil.prototype.verAutomovil = function(){
    return `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`
}

function mostrarAutomoviles(){
    let lista = document.getElementById('listaAutomoviles');

    for(let automovil of automoviles){
        let item = document.createElement('li');
        item.innerText = automovil.verAutomovil();
        lista.appendChild(item);
    }
}
class Auto{
    constructor(marca, modelo, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    mostrarInfo(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`);
    }

}

const auto1 = new Auto('Mazda','Protege',2003);
const auto2 = new Auto('Toyota','Yaris',2024);
const auto3 = new Auto('Honda','Civic',2010);

auto1.mostrarInfo();

auto2.mostrarInfo();

auto3.mostrarInfo();
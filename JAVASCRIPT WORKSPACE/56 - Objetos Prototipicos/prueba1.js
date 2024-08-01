function Animal(nombre){
    this.nombre = nombre;
}

Animal.prototype.hablar = function(){
    console.log(this.nombre + ' Hace ruido');
};

const perro = new Animal('Bruno');
perro.hablar();
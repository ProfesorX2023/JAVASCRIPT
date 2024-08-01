const animal = {
    hablar: function(){
        console.log(this.nombre + " hace ruido");
    }
};

const gato = Object.create(animal);
gato.nombre = 'Kaly';
gato.hablar();
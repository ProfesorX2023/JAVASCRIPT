let boton = document.getElementById('miBoton');

function mostrarMensaje(){
    alert('El boton ha sido presionado')
}

function otroMensaje(){
    alert('El Mouse está flotando');
}

boton.addEventListener('click',mostrarMensaje);

boton.addEventListener('mouseover',otroMensaje);
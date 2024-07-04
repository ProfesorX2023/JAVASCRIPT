let elementoSegundos = document.getElementById("tiempoElegido");
let elementoTextoAlarma = document.getElementById("textoAlarma");
let elementoSonidoAlarma = document.getElementById("audioAlarma");

function comenzarTiempo(){
    setTimeout(tiempoCumplido, 1000*elementoSegundos.value);

}

function tiempoCumplido(){
    elementoTextoAlarma.style.color = "green";
    elementoSonidoAlarma.play();
}

function comenzarReloj(){
    setInterval(ticTac, 1000);
}

function ticTac(){
    let tiempoActual = new Date();
    let hora = tiempoActual.getHours();
    let minutos = tiempoActual.getMinutes();
    let segundos = String(tiempoActual.getSeconds()).padStart(2, "0");

    let textoHora = hora + ":" + minutos + ":" + segundos;
    elementoTextoAlarma.textContent = textoHora;
}
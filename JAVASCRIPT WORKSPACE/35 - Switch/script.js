function consultarPrecio(){
    let elementoRespuesta = document.getElementById("textoPrecio");

    let elementoFruta = document.getElementById("numeroFruta");
    let fruta = elementoFruta.value;

    switch(fruta){
        case "1":
            elementoRespuesta.textContent = "Q 8.45";
            break;
        case "2":
            elementoRespuesta.textContent = "Q 6.32";
            break;
        case "3":
            elementoRespuesta.textContent = "Q 2.36";
            break;
        case "4":
            elementoRespuesta.textContent = "Q 1.58";
            break;
        case "5":
            elementoRespuesta.textContent = "Q 7.21";
            break;
    }


}
function multiplicar(){
    //Obtener el número
    let elementoTextoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);

    //Obtener la tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    //Vaciar tabla antes de ejecutar
    elementoTablaMultiplicar.innerText ="";

    //Producir y mostrar los resultados
    for(x=1;x<=10;x++){
        //Calcular el resultado
        let numeroResultado = numeroTabla*x;

        //Armar String con resultado
        let textoResultado = numeroTabla + " por "+ x + " es igual a " + numeroResultado;

        //Crear un elemento de la lista
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }
}

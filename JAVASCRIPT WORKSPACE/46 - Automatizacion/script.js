function crearTiendas(contenedorID, min, crearTiendas){
    //Encontrar contenedor por su Id
    let elementoContenedor = document.getElementById(contenedorID);

    //loop para crear tantas tiendas como se pidan
    for(let conteoTiendas=1; conteoTiendas<=crearTiendas; conteoTiendas++){

        //Crear el texto de label para poder llamar a la función
        let textoEtiqueta = "Tienda "+conteoTiendas;

        //crear tiendas con crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        //agregar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }

}

function crearParrafoTienda(textoLabel, valorMin){
    //crear kas etiquetas <p>
    let elementoParrafo = document.createElement("p");

    //crear la etiqueta label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel + ": ";

    //conectar con input
    elementoEtiqueta.setAttribute("for",textoLabel);

    //crear el input
    let elementoInput = document.createElement("input");

    //establecer atributos de input
    elementoInput.setAttribute("type","number");
    elementoInput.setAttribute("id",textoLabel);
    elementoInput.setAttribute("min",valorMin);
    elementoInput.setAttribute("value",0);

    //agregar label e input al parrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //devolver el parrafo completo
    return elementoParrafo;

}

function extrarNumeroDesdeElemento(elemento){
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas = [];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTiendas");

    for(let item of elementosVentas.children){
        let valorVenta = extrarNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas + 1;
    }

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    for(let item of elementosVentas.children){
        let valorVenta = extrarNumeroDesdeElemento(item.children[1]);

        item.children[1].className = "menuNeutro";

        if(valorVenta == ventaMayor){
            item.children[1].className = "menuIputMayor";
        }

        if(valorVenta == ventaMenor){
            item.children[1].className = "menuInputMenor";
        }
    }

    let mensajeSalida = "Total Ventas: " + totalVentas;

    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;


}

function sumarTotal(array){
    let total = 0;

    for(let venta of array){
        total = total + venta;
    }

    return total;
}

function calcularMayor(array){
    let maximo = array[0];

    for(let venta of array){
        if(venta > maximo){
            maximo = venta;
        }
    }

    return maximo
}

function calcularMenor(array){
    let minimo = array[0];

    for(let venta of array){
        if(venta < minimo){
            minimo = venta;
        }
    }

    return minimo;
}
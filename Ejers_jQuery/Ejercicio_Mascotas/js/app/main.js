//obeto global.
var net = net || {};

//Usar "use strict".
$(document).ready(function() {
"use strict";

//esperar a que el DOM este cargado.
    $('#carga').on('click', function() {
        //console.log('click');

        //console.log('el documento está preparado');
        var filas = $('#filas').val();
        var columnas = $('#columnas').val();
        var numAnimales = filas*columnas;
        net.feature.peticion(numAnimales,pintarContainer);
    });


// Iniciaremos las variables privadas que sean necesarias.



// Necesitaremos una funcion que cree objetos DOM de clase img y todos los atributos necesarios.
function pintarContainer(json){
    //Ocultamos lo botones iniciales
    $('#botones').addClass("hidden");
    //Mostramos contenedor
    $('#contenedor').removeClass("hidden");

    console.log(json);
    var html_nuevo;
    var $contenedor;
    for(var i=0;i<=json.length-1;i++){

        $contenedor = $("#contenedor");

        html_nuevo+= crearImagen(json[i].animal,json[i].color,json[i].nombre,json[i].timer);
    }

    $contenedor.html(html_nuevo);

    function crearImagen(animal, color, nombre, timer){

       // var imagenAnimal = "<img class='imagen' src='img/"+animal+".png' data-animal="+animal+"data-color="+color+"data-nombre="+nombre+"data-timer="+timer+"width ="+(100/columnas)+"%'/>";

        var imagenAnimal = "<img class='imagen' src='img/"+animal+".png' data-animal="+animal+"data-color="+color+"data-nombre="+nombre+"data-timer="+timer+"/>";

        return imagenAnimal;
    }

    var columnas = $('#columnas').width();
    var modWidth = $('#contenedor').width();
    $('.imagen').width(modWidth/columnas);

}



// Necesitaremos una funcion que agrege el array de img al DOM (no se realizaran cambios de DOM dentro de ningun bucle).

// Necesitaremos una o varias funcion(es) que controle(n) el paso del tiempo.

// Necesitaremos añadir los eventos necesarios en el momento adecuado.

// Necesitaremos las funciones de callback para los eventos.

// Necesitaremos una funcion encargada de llamar al modulo que se define en el fichero net.js con los parametros adecuados para realizar la llamada y capturar la respuesta AJAX.

// Necesitaremos una funcion que controle el final del juego.

// Necesitaremos una funcion que controle la lista de eliminados.

// Cualquier otra funcion que sea necesaria.


});

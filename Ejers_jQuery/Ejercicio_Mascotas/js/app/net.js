//obeto global, si existe me qdo su valor, sino creo una.
var net = net || {};

$(document).ready(function () {
//Usar "use strict"
"use strict";

//esperar a que el DOM este cargado

    console.log('el documento está preparado');


//Funcion anonima autoejecutable para realizar las peticiones AJAX, que añadiremos en el objeto global
//y expondra un metodo para poder realizar las llamadas al servidor.
net.feature = (function () {
        var peticion = function(cnt,cb) {
            (cnt !== null || cnt !== 0) ? cnt : 1 ;

            $.ajax({
                // la URL para la petición
                url: 'php/getcards.php',

                // la información a enviar
                // (también es posible utilizar una cadena de datos)
                data: {
                    numero: cnt
                },

                // especifica si será una petición POST o GET
                type: 'POST',

                // el tipo de información que se espera de respuesta
                dataType: 'json',

                // código a ejecutar si la petición es satisfactoria;
                // la respuesta es pasada como argumento a la función
                success: function (json) {
//                  console.log(json);
//                  console.log("callback:" + cb);
                    cb(json);
                },

                // código a ejecutar si la petición falla;
                // son pasados como argumentos a la función
                // el objeto jqXHR (extensión de XMLHttpRequest), un texto con el estatus
                // de la petición y un texto con la descripción del error que haya dado el servidor
                error: function (jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },

                // código a ejecutar sin importar si la petición falló o no
                complete: function (jqXHR, status) {
                    console.log('Petición realizada');
                }
            });
        };
            //si no hacemos return luego no podremos acceder a ella.
            return {
                peticion: peticion
            };
        })();
});

//El servidor espera un parametro 'numero' con el número de elementos que tendra el JSON de respuesta.

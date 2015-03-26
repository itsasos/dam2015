$(function () {
    "use strict";

    // Obtener los elementos del DOM
    var $estado = $("#status");
    var $texto = $("text");

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (Modernizr.websockets) {
        console.log("Web Socket disponible");
        var socket = new WebSocket('ws://10.70.1.111:1337');
        socket.onopen = function(){
            $texto.prop("disabled",false);

        }

    }
    else{
        console.log("Web Socket NO disponible");
        return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;



    //socket.send("Hey there, I'm using WebSockets");

    socket.onmessage = function(event) {
        var data = JSON.parse(event.data);
        if (data.action == 'joined') {
            initiliseChat();
        } else {
            //showNewMessage(data.who, data.text);
            addMessage($estado, $texto, 'red', data);
        }
    };

    // Abrir la conexion con ws://10.70.1.111:1337
    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    }
});

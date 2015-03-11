function obtenerUrl(){
    var urlText = document.URL;
    document.getElementById("recurso").value=urlText;
    
    document.getElementById("enviar").onclick = mostrarContenido;
}




function mostrarContenido(){
    var urlText = document.getElementById("recurso").value;
    var contenidos = document.getElementById("contenidos");
    var headersSet = document.getElementById("cabeceras");
    var codeState = document.getElementById("codigo");
    
	// Obtener la instancia del objeto XMLHttpRequest
    if(window.XMLHttpRequest) {
        var peticion_http = new XMLHttpRequest();
    }
    else if(window.ActiveXObject) {
        var peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
	// Preparar la funcion de respuesta
    peticion_http.onreadystatechange = muestraContenido;
    
	 // Realizar peticion HTTP
    peticion_http.open('GET', 'http://localhost/DAM15/Ejercicio%201%20AJAX/', true);
    peticion_http.send(null);
    
    var now = new Date();
    
    
    function muestraContenido() {
                    
        var estado = document.getElementById("estados");
        var estadosText = ["No inicializado", "Cargando", "Cargado", "Interactivo", "Completado"];
		//estadosText: El código de estado HTTP devuelto por el servidor en forma de cadena de texto: "OK", 
		//"Not Found", "Internal Server Error", etc.
        var estadoAct = document.createTextNode("[tiempo] "+estadosText[peticion_http.readyState]+"\n");
        estado.appendChild(estadoAct);
        
        if(peticion_http.readyState == 4) {
            if(peticion_http.status == 200) {
				//responseText: muestra por pantalla el contenido del texto solicitado
                contenidos.textContent = peticion_http.responseText;
				//getAllResponseHeaders(): Devuelve una cadena de texto con todas las cabeceras de la respuesta del servidor
                headersSet.textContent = peticion_http.getAllResponseHeaders();
				//status: El código de estado HTTP devuelto por el servidor (200 para una respuesta correcta, 
				//404 para "No encontrado", 500 para un error de servidor, etc.)
                codeState.textContent = peticion_http.status+"\nOK";
            }else{
                codeState.textContent = peticion_http.status+"\nNOT OK";
            }
        }
    }
    
}



window.onload = obtenerUrl;
window.onload = function(){
    "use strict";
    
    document.getElementById("comprobar").addEventListener("click",valida,true);

    var READY_STATE_COMPLETE=4;
    var peticion_http = null;

    function inicializa_xhr() {
      if(window.XMLHttpRequest) {
        return new XMLHttpRequest(); 
      }
      else if(window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } 
    }

    function crea_query_string() {
        var login = document.getElementById("login").value;

        return "login=" + encodeURIComponent(login) +
             "&nocache=" + Math.random();
    }

    function valida() {
      peticion_http = inicializa_xhr();
      if(peticion_http) {
        peticion_http.onreadystatechange = procesaRespuesta;
        peticion_http.open("POST", "http://localhost/DAM15/Ejercicio 5 Ajax/servidor/compruebaDisponibilidad.php", true);

        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var query_string = crea_query_string();
        peticion_http.send(query_string);
      }
    }

    function procesaRespuesta() {
      if(peticion_http.readyState == READY_STATE_COMPLETE) {
        if(peticion_http.status == 200) {
          document.getElementById("disponibilidad").innerHTML = peticion_http.responseText;
        }
      }
    }
    function procesaRespuesta() {
        if(peticion_http.readyState == READY_STATE_COMPLETE) {
            if(peticion_http.status == 200) {
                var respuesta_json = peticion_http.responseText;
                var objeto_json = JSON.parse(respuesta_json);

                var lista_alternativa = "";
                
               if(objeto_json.disponible == "si"){
                    document.getElementById("disponibilidad").innerHTML = "El nombre SI esta disponible";
               }
               else{
                   
                   for(var i = 0; i < objeto_json.alternativas.length; i++) {
                       lista_alternativa += objeto_json.alternativas[i] + "<br/>";
                   }
                   
                    document.getElementById("disponibilidad").innerHTML = "El nombre NO esta disponible"+ "<br/>"+ lista_alternativa ;
                }
            }
        }
    }
    
};
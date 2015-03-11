window.onload = function(){
    "use strict";
    
    document.getElementById("provincias").addEventListener("click",valida,true);

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
        var provincias = document.getElementById("provincias").value;

        return "provincias=" + encodeURIComponent(provincias) +
             "&nocache=" + Math.random();
    }

    function valida() {
      peticion_http = inicializa_xhr();
      if(peticion_http) {
        peticion_http.onreadystatechange = lasProvincias;
        peticion_http.open("POST", "http://localhost/DAM15/Ejercicio 7 Ajax/servidor/cargaProvinciasJSON.php", true);

        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var query_string = crea_query_string();
        peticion_http.send(query_string);
      }
    }

    function lasProvincias() {
        if(peticion_http.readyState == READY_STATE_COMPLETE) {
            if(peticion_http.status == 200) {
                var lista = document.getElementById("provincias");
                var respuesta_json = peticion_http.responseText;
                var provincias = JSON.parse(respuesta_json);
                
                for(var i = 0; i < provincias.length; i++) {
                     provincias += provincias[i] + "<br/>";
                }
               
            }
        }
    }
    
};
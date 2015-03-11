window.onload = function(){
    "use strict";
    valida();
	document.getElementById("provincias").onchange = valida2;
};

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
	peticion_http.onreadystatechange = cargaProvincias;
	peticion_http.open("GET", "http://localhost/DAM2015/Ejercicio 7 Ajax/servidor/cargaProvinciasJSON.php", true);

	peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	var query_string = crea_query_string();
	//peticion_http.send(query_string);
	peticion_http.send(null);
  }
}

function cargaProvincias() {
	if(peticion_http.readyState == READY_STATE_COMPLETE) {
		if(peticion_http.status == 200) {
			var lista = document.getElementById("provincias");
			var respuesta_json = peticion_http.responseText;
			var objeto_json = JSON.parse(respuesta_json);
			var i =1;
			var code ="";

			for (var objeto in objeto_json){
				
				if(i<=9){
					code = "0"+i;
				}
				else{
					code = ""+i;
				}
				lista.options[i] = new Option(objeto_json[code],code);
				i++;
			}
		   
		}
	}
}

function valida2(){
	peticion_http = inicializa_xhr();
  
	if(peticion_http) {
		peticion_http.onreadystatechange = cargaMunicipios;
		peticion_http.open("POST", "http://localhost/DAM2015/Ejercicio 7 Ajax/servidor/cargaMunicipiosJSON.php", true);

		peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		var query_string = crea_query_string();
		peticion_http.send(query_string);
	}
}

function cargaMunicipios() {
	if(peticion_http.readyState == READY_STATE_COMPLETE) {
		if(peticion_http.status == 200) {
			var lista = document.getElementById("municipios");
			var respuesta_json = peticion_http.responseText;
			var objeto_json = JSON.parse(respuesta_json);

			var i =1;
			for (var objeto in objeto_json){
				
				lista.options[i] = new Option(objeto_json[objeto],objeto);
				i++;
			}
		   
		}
	}
}
    

var date = /(\d{2}\/\d{2}\/\d{4})/;//opcion 1
var date = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/; //opcion 2
var texto = 'Nací el 05/04/1982 en Donostia.';
console.log(date.test(texto));

var expEmail = /([a-zA-Z0-9\.\_])+@(([a-zA-Z0-9])+\.)+([a-zA-Z]{2,3})+$/;
var email = 'isouto002@gma9il.com';
console.log(expEmail.test(email));

var nombre = "John Smith";
var arrayNombre= nombre.split(/\s+/);
console.log(arrayNombre[1]+", " + arrayNombre[0]);

var regExpEscapeHTML = /[<>&"]/g;


//var expScript = //;
//var script= "<p>despues de un parrafo<script>viene un script<div>luego un div</div>weriprowei</script>asdkf`pasodfkpsodfas</p>";

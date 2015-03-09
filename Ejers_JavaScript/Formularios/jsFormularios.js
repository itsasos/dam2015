var nombre = document.getElementById("registro_nombre");

var apellido = document.getElementById("registro_apellido");

var email = document.getElementById("registro_email").value;
if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
    return false;
}

var pass = document.getElementById("registro_password");
if( pass.length < 6 ) {
    return false;
}
else{
    if(){
        return false;
    }

}

var comentarios = documet.getElementById("registro_comentarios");
if (comentarios.length > 50){
    return false;
}

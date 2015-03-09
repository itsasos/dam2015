var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var letra="C";
var num=72502023;


if(num<0 || num >999999999){
    alert("NUMERO ERRONEO");
}
else{
    var resto=num % 23;
    var letraCorrecta = letras[resto];

    //letra = letra.toUpperCase;

    if(letra === letraCorrecta){
        alert("NUMERO Y LETRA CORRECTA");
    }
    else{
        alert("LETRA INCORRECTA");
    }
}




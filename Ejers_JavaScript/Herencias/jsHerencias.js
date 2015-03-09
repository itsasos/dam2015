function Persona (nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.obtDetalles = function(){
        console.log("Nombre:" + this.nombre + ", Edad:" + this.edad + ", Genero:" + this.genero);
        }

}

function Estudiante (nombre, edad, genero, curso, grupo) {
    this.base = Persona;
    this.base(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
    this.registrar = function(){console.log("Registrado: Curso:" + this.curso + ", Grupo:" + this.grupo);}
}
Estudiante.prototype = new Persona;

function Profesor (nombre, edad, genero, asignatura, nivel) {
    this.base = Persona;
    this.base(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
    this.asignar = function(){console.log("Asignado: Asignatura:" + this.asignatura + ", Nivel:" + this.nivel);}
}
Profesor.prototype = new Persona;

var per1 = new Persona("itsaso", 28,"F");
per1.obtDetalles();
var est1 = new Estudiante("ane",34,"F",2,1);
est1.obtDetalles();
est1.registrar();
var prof1 = new Profesor("asier",32,"M","mate",1);
prof1.obtDetalles();
prof1.asignar();

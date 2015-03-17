$(document).ready(function(){
    "use strict"

var video = document.getElementById("miVideo");

$('#bIniciar').on('click', function() {

    video.play();
 });

 $('#bPause').on('click', function() {
    video.pause();
 });

 $('#bParar').on('click', function() {
    video.pause();
    video.currentTime = 0;
 });

 $('#bAvanzar').on('click', function() {
    video.currentTime += 10;
 });

 $('#bRetroceder').on('click', function() {
    video.currentTime -= 10;
 });

 $('#bInicio').on('click', function() {
    video.currentTime = 0;
    video.pause();
 });

 $('#bFin').on('click', function() {;
    var duracion = video.duration;
    video.currentTime = duracion;
 });

 $('#bPantCompl').on('click', function() {
    if(video.requestFullScreen){
        video.requestFullScreen();
    }
    else if(video.mozRequestFullScreen){
        video.mozRequestFullScreen();

     }
     else if(video.webkitRequestFullScreen){
         video.webkitRequestFullScreen();
     }
 });

$('#bVolumen').on('change', function(e) {;
    video.value = e.target.value;
 });

//Progreso barra
var barra = document.getElementById('progreso');
video.currentTime = barra.value;
//barra.min = video.startTime;
//barra.max = video.duration;



});

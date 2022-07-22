// querySelector permite acceder al mundo html
var titulo = document.querySelector(".titulo");

console.log(titulo) // muestra el elmento

console.log(titulo.textContent) // muestra el contenido del elemento

// js nos permite modificar el DOM del html
titulo.textContent= "Buena vida Nutrición" // modifica el contenido de texto de  la clase titulo

// indice de masa corporal
var paciente = document.querySelector("#primerPaciente");

console.log(paciente.textContent);
// console.log(paciente);

// obtener peso

var tdpeso = document.querySelector(".info-peso");

var peso = tdpeso.textContent;

console.log(peso)

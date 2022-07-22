// querySelector permite acceder al mundo html
var titulo = document.querySelector(".titulo");

console.log(titulo) // muestra el elmento

console.log(titulo.textContent) // muestra el contenido del elemento

// js nos permite modificar el DOM del html
titulo.textContent= "Buena vida Nutrición" // modifica el contenido de texto de  la clase titulo

// calculando indice de masa corporal
var paciente = document.querySelector("#primerPaciente");

console.log(paciente.textContent);
// console.log(paciente);


// ***************************************************OBTENER PESO

// var tdpeso = document.querySelector(".info-peso");
// var peso = tdpeso.textContent;


// accediento a la informacion a partir del objeto-paciente y la clase "info-peso"
var peso = paciente.querySelector(".info-peso");
console.log(peso);

// obtener altura

var altura = paciente.querySelector(".info-altura")
console.log(altura)

// imc = peso / altura * altura

imc = peso/(altura*altura);
console.log(imc);
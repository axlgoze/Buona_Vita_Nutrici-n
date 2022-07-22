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

// conversiones

var Peso=parseInt(peso.textContent);
var Altura=parseInt(altura.textContent);

// calculo

var imc =  Peso/(Altura*Altura) ;

console.log(imc);

// colocacion de valor en tabla

// obtener dato de imc
var tdIMC = paciente.querySelector(".info-imc");
console.log(tdIMC.textContent)

// asignando nuevo valor
tdIMC.textContent = imc;

// condicionales

if(Peso < 0 || Peso > 1000){
    var error="error";
    alert("Peso incorrecto");
    peso.textContent=error;
}
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


// Accediento a la informacion a partir del objeto-paciente y la clase "info-peso"
var peso = paciente.querySelector(".info-peso");
console.log(peso);

// obtener altura

var altura = paciente.querySelector(".info-altura")
console.log(altura)

// obtener dato de imc
var tdIMC = paciente.querySelector(".info-imc");
// console.log(tdIMC.textContent)

// conversiones
var Peso=parseInt(peso.textContent);
var Altura=parseInt(altura.textContent);

// calculo
// imc = peso / altura * altura
var imc =  Peso/(Altura*Altura) ;

// condicionales

pesoValido = true;
alturaValida = true;

var error="Error";

if(Peso < 0 || Peso > 1000){
    peso.textContent=error + ": Peso Incorrecto";
    pesoValido = false;
    tdIMC.textContent = error;
    console.log(imc);
}

if(Altura < 0 || Altura > 3.00){
    altura.textContent=error + ": Altura Incorrecta";
    alturaValida=false;
    tdIMC.textContent = error;
    console.log(imc);
}


if(pesoValido && alturaValida){
    // asignando nuevo valor
    tdIMC.textContent = imc;
}


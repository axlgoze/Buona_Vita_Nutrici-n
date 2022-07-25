var titulo = document.querySelector(".titulo");
titulo.addEventListener("click",mostrarMensaje);

function mostrarMensaje(){
    console.log("Listening...");
}



var botonAdicionar = document.querySelector("#adicionar-paciente");

// uso de funcion anonima
botonAdicionar.addEventListener("click",function(event){
    // permite no recargar la pagin una vez realizado el evento
    event.preventDefault();

    var form = document.querySelector("#form-adicional");
    //captura de valores accediendo a los objetos de html
    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var  altura = form.altura.value;
    var porcentaje = form.gordura.value;
    
    //row creation
    var pacienteTr = document.createElement("tr");

    //td creation
    nombreTd = document.createElement("td");
    pesoTd = document.createElement("td");
    alturaTd = document.createElement("td");
    gorduraTd = document.createElement("td");

    nombreTd.textContent = nombre;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = porcentaje;

    //conectar js con html
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabla = document.querySelector("#tabla-pacientes");

    tabla.appendChild(pacienteTr);

    console.log(pacienteTr);

});





// capturando clase paciente de todos los pacientes
var pacientes = document.querySelectorAll(".paciente"); // querySelectorAll permite seleccionar mas de una clase

console.log(pacientes);

for(var i=0;i<pacientes.length;i++){
    // accede a cada elemento del arreglo
    var paciente=pacientes[i];

    var peso = paciente.querySelector(".info-peso");
    // console.log(peso);

    var altura = paciente.querySelector(".info-altura")
    // console.log(altura)

    var tdIMC = paciente.querySelector(".info-imc");

    var Peso=parseInt(peso.textContent);
    var Altura=parseInt(altura.textContent);

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
        paciente.classList.add("paciente-incorrecto");

    }

    if(Altura < 0 || Altura > 3.00){
        altura.textContent=error + ": Altura Incorrecta";
        alturaValida=false;
        tdIMC.textContent = error;
        console.log(imc);
        paciente.classList.add("paciente-incorrecto");
    }


    if(pesoValido && alturaValida){
        // asignando nuevo valor
        tdIMC.textContent = imc;
    }
}

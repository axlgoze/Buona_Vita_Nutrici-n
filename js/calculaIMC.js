var titulo = document.querySelector(".titulo");
titulo.addEventListener("click",mostrarMensaje);

function mostrarMensaje(){
    console.log("Listening...");
}

// capturando clase paciente de todos los pacientes
var pacientes = document.querySelectorAll(".paciente"); // querySelectorAll permite seleccionar mas de una clase

console.log(pacientes);

for(var i=0;i<pacientes.length;i++){
    // accede a cada elemento del arreglo
    var paciente=pacientes[i];

    var Peso = paciente.querySelector(".info-peso");
    // console.log(peso);

    var Altura = paciente.querySelector(".info-altura")
    // console.log(altura)

    var tdIMC = paciente.querySelector(".info-imc");

    var peso=parseInt(Peso.textContent);
    var altura=parseInt(Altura.textContent);

    

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
        tdIMC.textContent = calcularIMC(peso,altura);
    }
}

function calcularIMC(peso,altura){
    var imc =  peso/(altura*altura);
    return imc.toFixed(2);;
}

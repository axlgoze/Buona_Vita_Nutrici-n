var titulo = document.querySelector(".titulo");
titulo.addEventListener("click",mostrarMensaje);

function mostrarMensaje(){
    console.log("Listening...");
}

// capturando clase paciente de todos los pacientes
var pacientes = document.querySelectorAll(".paciente"); // querySelectorAll permite seleccionar mas de una clase

console.log(pacientes);
//recorre todos los pacientes del form
for(var i=0;i<pacientes.length;i++){
    // accede a cada elemento del arreglo
    var paciente=pacientes[i];
    var peso = paciente.querySelector(".info-peso");
    // var peso =peso.textContent;

    var altura = paciente.querySelector(".info-altura");
    // var altura = altura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");
    // console.log(tdIMC)

    // condicionales
    var pesoValido = validaPeso(peso.textContent);
    var alturaValida = validaAltura(altura.textContent);

    var error="Error";
    
    if(!pesoValido){
        peso.textContent=error + ": Peso Incorrecto";
        tdIMC.textContent = error;
        paciente.classList.add("paciente-incorrecto");
    }
    
    if(!alturaValida){
        altura.textContent=error + ": Altura Incorrecta";
        tdIMC.textContent = error;
        paciente.classList.add("paciente-incorrecto");
    }

    if(pesoValido && alturaValida){
        // conversion de datos
        peso = parseInt(peso.textContent)
        altura = parseInt(altura.textContent)
        // asignando nuevo valor
        tdIMC.textContent = calcularIMC(peso,altura);
    }

}

    function calcularIMC(peso,altura){
        var imc =  peso/(altura*altura);
        return imc.toFixed(2);
    }

    function validaPeso(peso){
        if(peso >= 0 && peso <= 1000){
            return true;
        }else{
            return false;
        }
    }

    function validaAltura(altura){
        if(altura > 0 && altura < 3.0){
            return true;
        }else{
            return false;
        }
    }
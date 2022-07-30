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
    var tdpeso = paciente.querySelector(".info-peso");
    var peso =tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");
    // console.log(tdIMC)

    // condicionales
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    var error="Error";
    
    if(!pesoValido){
        peso.textContent=error + ": Peso Incorrecto";
        // pesoValido = false;
        tdIMC.textContent = error;
        paciente.classList.add("paciente-incorrecto");
    }
    
    if(!alturaValida){
        altura.textContent=error + ": Altura Incorrecta";
        // alturaValida=false;
        tdIMC.textContent = error;
        // console.log(imc); 
        paciente.classList.add("paciente-incorrecto");
    }

    if(pesoValido && alturaValida){
        // asignando nuevo valor
        peso = parseInt(peso.textContent)
        // console.log(peso)
        altura = parseInt(altura.textContent)
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
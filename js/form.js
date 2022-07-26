var botonAdicionar = document.querySelector("#adicionar-paciente");

// uso de funcion anonima
botonAdicionar.addEventListener("click",function(event){
    // permite no recargar la pagin una vez realizado el evento
    event.preventDefault();

    var form = document.querySelector("#form-adicional");

    var paciente = capturaDatos(form);
    
    //row creation
    var pacienteTr = document.createElement("tr");

    //td creation
    nombreTd = document.createElement("td");
    pesoTd = document.createElement("td");
    alturaTd = document.createElement("td");
    gorduraTd = document.createElement("td");

    imcTd =document.createElement("td");
    //exhibiendo informacion con propiedad textContent
    nombreTd.textContent = paciente.nombre;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.porcentaje;

    imcTd.textContent = calcularIMC(paciente.peso,paciente.altura);

    //asignar nodos a table row created
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabla = document.querySelector("#tabla-pacientes");

    tabla.appendChild(pacienteTr);

    console.log(pacienteTr);

});


function capturaDatos(form){
    //captura de valores accediendo a los objetos de html

    //creacion de objeto para poder retornarlo
    var paciente = {
        nombre : form.nombre.value,
        peso : form.peso.value,
        altura : form.altura.value,
        porcentaje : form.gordura.value
    }

    return paciente;
}

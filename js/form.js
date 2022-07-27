var botonAdicionar = document.querySelector("#adicionar-paciente");

// uso de funcion anonima
botonAdicionar.addEventListener("click",function(event){
    // permite no recargar la pagina una vez realizado el evento
    event.preventDefault();

    var form = document.querySelector("#form-adicional");
    var paciente = capturaDatos(form);
    var pacienteTr = createTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);

    

});


function capturaDatos(form){
    //creacion de objeto para poder retornarlo
    var paciente = {
        nombre : form.nombre.value,
        peso : form.peso.value,
        altura : form.altura.value,
        porcentaje : form.gordura.value,
        imc : calcularIMC(form.peso.value,form.altura.value)
    }

    return paciente;
}

function createTr(paciente) {
    //row creation
    var pacienteTr = document.createElement("tr");
    //td creation
    var nombreTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd =document.createElement("td");
    //exhibiendo informacion con propiedad textContent
    nombreTd.textContent = paciente.nombre;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.porcentaje;
    imcTd.textContent = paciente.imc
    //asignar nodos a table row created
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    //adicionando clases
    pacienteTr.classList.add("paciente");
    nombreTd.classList.add("info-nombre");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");
    imcTd.classList.add("info-imc");

    return pacienteTr
}

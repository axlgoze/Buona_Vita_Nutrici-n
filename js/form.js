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
    form.reset();
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
    //td creation and ad class name
    var nombreTd = createTd(paciente.nombre,"info-nombre");
    var pesoTd = createTd(paciente.peso,"info-peso");
    var alturaTd = createTd(paciente.altura,"info-altura");
    var gorduraTd = createTd(paciente.porcentaje,"info-gordura");
    var imcTd = createTd(paciente.imc,"info-imc");
    //asignando nodos hijos
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

    return pacienteTr;
}

function createTd(dato,clase){
    //construccion de td
    var td = document.createElement("td");
    //adicion de clase
    td.classList.add(clase);
    //exhibiendo informacion con propiedad textContent
    td.textContent = dato;
    return td;
}

var botonAdicionar = document.querySelector("#adicionar-paciente");

// uso de funcion anonima
botonAdicionar.addEventListener("click",function(event){
    // permite no recargar la pagina una vez realizado el evento
    event.preventDefault();

    var form = document.querySelector("#form-adicional");
    var paciente = capturaDatos(form);
    var pacienteTr = createTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    //validacion de cliente
    var error = validaPaciente(paciente);

    if(error.length > 0){
        imprimeMensajesError(error);
        // var mensajeError = document.querySelector("#mensaje-error");
        // mensajeError.textContent = error;
        return; //vacio, corta la funcion anonima; es como un break
    }

    tabla.appendChild(pacienteTr);
    form.reset();

    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML="";
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
    pacienteTr.classList.add("paciente");
    //asignando nodos hijos + td creation + class asignation
    pacienteTr.appendChild(createTd(paciente.nombre,"info-nombre"));
    pacienteTr.appendChild(createTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(createTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(createTd(paciente.porcentaje,"info-gordura"));
    pacienteTr.appendChild(createTd(paciente.imc,"info-imc"));

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

function validaPaciente(paciente){
    var errores = [];

    
    if(paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacio!");
    }

    if(paciente.peso.length == 0){
        errores.push("El peso no puede estar vacio!");
    }

    if(paciente.altura.length == 0){
        errores.push("La altura no puede estar vacia!");
    }
    
    if(paciente.porcentaje.length == 0){
        errores.push("El % de gordura no puede estar vacia!");
    }

    if(!validaPeso(paciente.peso)){
        errores.push("El peso es incorrecto!");
    }

    if(!validaAltura(paciente.altura)){
        errores.push("La altura es incorrecta!");
    }

    return errores;
}


function imprimeMensajesError(error){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = ""
    error.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}

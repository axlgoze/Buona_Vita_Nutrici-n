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
    nombreTd.textContent = nombre;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = porcentaje;

    imcTd.textContent = calcularIMC(peso,altura);

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

    
    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var  altura = form.altura.value;
    var porcentaje = form.gordura.value;

    return paciente.push
}

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

    imcTd =document.createElement("td");

    nombreTd.textContent = nombre;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = porcentaje;

    imcTd.textContent = calcularIMC(peso,altura);

    //conectar js con html
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabla = document.querySelector("#tabla-pacientes");

    tabla.appendChild(pacienteTr);

    console.log(pacienteTr);

});

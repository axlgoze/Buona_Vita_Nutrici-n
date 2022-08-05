var campoFiltro = document.querySelector("#filtrar-tabla");
// console.log(campoFiltro);

campoFiltro.addEventListener("input",function(){
    // console.log("Entrada detectada");
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");

    // accediendo al nombre de los pacientes
    for(var i=0; i<pacientes.length;i++){
        var paciente = pacientes[i];
        var tdName = paciente.querySelector(".info-nombre");
        var nombre = tdName.textContent;
        console.log(nombre);
    }
});
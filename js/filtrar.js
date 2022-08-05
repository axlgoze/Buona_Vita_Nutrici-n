var campoFiltro = document.querySelector("#filtrar-tabla");
// console.log(campoFiltro);

campoFiltro.addEventListener("input",function(){
    // console.log("Entrada detectada");
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");
    console.log(pacientes)
});
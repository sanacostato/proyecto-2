
const nombrePaciente = document.getElementById("nombrePaciente");
const nombreProcedimiento = document.getElementById("nombreProcedimiento");
const tblInfo = document.getElementById("tblInfo");

let paciente = (localStorage.getItem("paciente")) ? JSON.parse(localStorage.getItem("paciente")) : [];

let procedimiento = (localStorage.getItem("procedimiento")) ? JSON.parse(localStorage.getItem("procedimiento")) : [];

mostrarPacientes();

function guardar(){
    // console.log("entro a guardar")
    const pacientes = nombrePaciente.value;
    // const procedi = nombreProcedimiento.value;
    paciente.push(pacientes);
    // paciente.push(procedi);
    console.log("escribio," , paciente);
    // console.log("escribio," , procedi);
}

function actualizarStorage(){
    localStorage.setItem("paciente", JSON.stringify(paciente));
    mostrarPacientes();
}

function mostrarPacientes(){
    if(paciente.length === 0 ){
        tblInfo.innerHTML = `<tr><td colspan="3" class="text-center font-weight-bold">No hay registros</td></tr>`;
    } else {
        tblInfo.innerHTML = "";
        for (const pacientes of paciente){
            const tr = document.createElement("tr");
            tr.classList.add("text-center");

            const tdPacientes = document.createElement("td");
            tdPacientes.innerText = pacientes;
            tr.appendChild(tdPacientes);
        }
    }
}
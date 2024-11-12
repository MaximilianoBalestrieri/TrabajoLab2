

//----------------------------------------
// Variable para rastrear si se ha presionado el botón "Agregar Evolución"
let isAdded = false; 
function goToPreviousPage() {
    if (isAdded) {
        window.location.href = "/agenda";
    } else {
        alert("Debes agregar una evolución antes de volver a la agenda.");
    }
}

function addEvolution() {
    isAdded = true;  
}

//----------------------------------------

        let idAgenda="<%- JSON.stringify(idAgenda) %>"  //va en esta pagina
 
        // toma el dni del paciente para las agregaciones
        const dniInput = document.getElementById('dnipaciente');
        dniInput.value = dnipaciente;    
        //------- pone la fecha actual en diagnostico y Evolucion  
        const hoy= new Date().toISOString().split('T')[0];
        document.getElementById('fecha4').value =hoy;  
        document.getElementById('fecha5').value =hoy;         
           
//*************** va a la pagina anterior   
    idAgenda=JSON.parse(idAgenda);
    
// **********************Para ingresar los antecedentes
    document.getElementById('antecedentes-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var dnipaciente=document.getElementById('dnipaciente').value;
        var antecedentes = document.getElementById('antecede').value;
        var fechadesde = document.getElementById('fechadesde1').value;
        var fechahasta = document.getElementById('fechahasta1').value;
        // Envía los datos al servidor
        fetch('/antecedentes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dnipaciente:dnipaciente,
                antecedentes: antecedentes,
                fechadesde: fechadesde,
                fechahasta:fechahasta
            })
        })   

    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

     // Limpia los campos
     document.getElementById('antecede').value = '';
     document.getElementById('fechadesde').value = '';
     document.getElementById('fechahasta').value = '';
    // Refresca la tabla
    location.reload();
});
// **********************Para ingresar las alergias
    document.getElementById('alergias-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var dnipaciente=document.getElementById('dnipaciente').value;
        var alergia = document.getElementById('alergia').value;
        var importancia = document.getElementById('importancia').value;
        var fechadesde = document.getElementById('fechadesde').value;
        var fechahasta = document.getElementById('fechahasta').value;
        // Envía los datos al servidor
        fetch('/alergia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dnipaciente:dnipaciente,
                alergia: alergia,
                importancia: importancia,
                fechadesde: fechadesde,
                fechahasta:fechahasta
            })
        })   

    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    location.reload();// Refresca la tabla
});
 // ********************** Para ingresar los medicamentos
document.getElementById('medicamento-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var dnipaciente=document.getElementById('dnipaciente').value;
    var medicamento = document.getElementById('medicamento').value;
    var dosis = document.getElementById('dosis').value;
    var frecuencia = document.getElementById('frecuencia').value;
    
    // Envía los datos al servidor
    fetch('/medicamento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            dnipaciente:dnipaciente,
            medicamento: medicamento,
            dosis: dosis,
            frecuencia: frecuencia
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));   
    location.reload();// Refresca la tabla
});
// **********************Para ingresar los habitos
    document.getElementById('habitos-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var dnipaciente=document.getElementById('dnipaciente').value;
        var habito = document.getElementById('habito').value;
        var fechadesde = document.getElementById('fechadesde2').value;
        var fechahasta = document.getElementById('fechahasta2').value;
        
        // Envía los datos al servidor
        fetch('/habitos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dnipaciente:dnipaciente,
                habito: habito,
                fechadesde: fechadesde,
                fechahasta: fechahasta
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        location.reload();// Refresca la tabla
    });
// ********************** para enviar los datos de la atencion
    document.getElementById('historial-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var dnipaciente=document.getElementById('dnipaciente').value;
    var fecha = document.getElementById('fecha4').value;
    var motivo = document.getElementById('motivo').value;
    var medico = document.getElementById('medico').value=nombreMedico;    
    var diagnostico = document.getElementById('diagnostico').value;
    fetch('/nuevaHistorial', {   // Envía los datos a tu servidor
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            dnipaciente:dnipaciente,
            fecha: fecha,
            motivo: motivo,
            medico: medico,
            diagnostico: diagnostico
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));    
     location.reload();// Refresca la tabla
});
// ********************** Para enviar los datos de la evolucion
    document.getElementById('atencion-form').addEventListener('submit', function(event) {
    event.preventDefault();
    //console.log('el docu del medioco es ', docuMedico);
    var dnimedico = document.getElementById('docmedico').value = docuMedico;
    var dnipaciente = document.getElementById('dnipaciente').value;
    var evaluaciones = document.getElementById('evaluaciones').innerHTML;
    var fecha = document.getElementById('fecha5').value;
    fetch('/evolucion', {// Envía los datos a tu servidor
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            dnimedico:dnimedico,
            dnipaciente:dnipaciente,
            evaluaciones: evaluaciones,
            fecha: fecha
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
     location.reload();// Refresca la tabla
});
/*****************para el texto enriquecido***********************************/
        const Font = Quill.import('formats/font');
        Quill.register(Font, true);
        const Size = Quill.import('formats/size');
        Quill.register(Size, true);
        const evaluaciones = new Quill('#evaluaciones', {
            theme: 'snow',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'font': [] }],
                    [{ 'align': [] }],
                ]
            }
        });
/*********** Formato de la fecha ******************************/
function getTodayDate(fecha) {
        const today = new Date(fecha);
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Mes con dos dígitos
        const day = String(today.getDate()).padStart(2, '0'); // Día con dos dígitos
        return `${year}-${month}-${day}`;
    }

 
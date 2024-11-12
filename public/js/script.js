         
        // Mostrar/Ocultar formulario al hacer clic en el botón login
        document.getElementById('loginBtn').addEventListener('click', function() {
            var loginForm = document.getElementById('loginForm');
          
            if (loginForm.style.display === 'none' || loginForm.style.display === '') {
                loginForm.style.display = 'block';
            } else {
                loginForm.style.display = 'none';
            }
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        });

         // validación de usuario y contraseña
         document.getElementById('submitBtn').addEventListener('click', function() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

           // Enviar datos al servidor
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Mostrar la especialidad y el apellido en un h2
            var especialidad = data.especialidad;
            var especialidadElement = document.getElementById('especialidad');
            especialidadElement.textContent =  especialidad;
            var apellido = data.apellido;
            var apellidoElement = document.getElementById('apellido');
            apellidoElement.textContent = 'Dr/a. ' + apellido;
            let variableTexto = apellidoElement.textContent
          
            // Deshabilitar todos los botones primero
            var buttons = document.querySelectorAll('.menu button');
            buttons.forEach(function(button) {
                button.disabled = true;
                button.classList.remove('enabled');
            });

            // Habilitar solo el botón correspondiente a la especialidad
            if (especialidad === 'Administrador') {
                document.getElementById('usuarios').disabled = false;
                document.getElementById('profesionales').disabled = false;
                document.getElementById('consultas').disabled = false;
                document.getElementById('agenda').disabled = true;
            } else if (especialidad !== 'Administrador') {
                document.getElementById('usuarios').disabled = true;
                document.getElementById('profesionales').disabled = true;
                document.getElementById('consultas').disabled = true;
                document.getElementById('agenda').disabled = false;
                document.getElementById('turnos').disabled = false;
                document.getElementById('salir').disabled = false;
            }
            /* se va el formulario de login  */
            document.getElementById('loginForm').style.display = 'none';

        } else {
            alert(data.message || 'Usuario o contraseña incorrectos.');
        }
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
    });

    document.getElementById("agenda").addEventListener("click", function() {
    var pagina = document.getElementById("pagina");
    pagina.style.display = "block";
    pagina.style.position = "fixed";
    pagina.style.top = "50%";
    pagina.style.left = "50%";
    pagina.style.transform = "translate(-50%, -50%)";

// Obtener el apellido ya almacenado anteriormente cuando se logueó el usuario y
// Asignamos el valor del apellido a la etiqueta h4
let apellido = document.getElementById('apellido').textContent;
document.getElementById('apellidoynombre').textContent = apellido;

let especial = document.getElementById('especialidad').textContent;
document.getElementById('especialidades').textContent = especial;

});

});

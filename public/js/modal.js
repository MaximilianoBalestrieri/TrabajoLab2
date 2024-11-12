// Obtener elementos del DOM
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];
const textArea = document.getElementById("textArea");

// Función para abrir el modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Función para cerrar el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Función para insertar texto en el área de texto
function insertText(text) {
    if (textArea.value) {
        textArea.value += '\n'; // Agrega un salto de línea si ya hay texto
    }
    textArea.value += text; // Coloca el nuevo texto en el área de texto
    modal.style.display = "none"; // Cierra el modal
}

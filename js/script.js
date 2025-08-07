// Función para agregar elementos a la lista
function agregarElemento(texto) {
  const lista = document.getElementById("lista");
  const item = document.createElement("li");
  item.textContent = texto;
  lista.appendChild(item);
}

// Función para manejar el formulario
function manejarFormulario(event) {
  event.preventDefault(); // Evita que se recargue la página

  const nombre = document.getElementById("nombre").value.trim();
  const sugerencia = document.getElementById("sugerencia").value.trim();

  if (nombre === "" || sugerencia === "") {
    alert("Por favor, llena todos los campos.");
    return;
  }

  // Agregar el elemento a la lista con el formato 
  agregarElemento(`${nombre} dijo: ${sugerencia}`);

  // Limpiar los campos
  document.getElementById("nombre").value = "";
  document.getElementById("sugerencia").value = "";
}

// Asignar el evento al formulario
document.querySelector(".form").addEventListener("submit", manejarFormulario);

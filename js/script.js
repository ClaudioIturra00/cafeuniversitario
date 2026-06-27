const formulario = document.getElementById("formulario-solicitud");
const listaSolicitudes = document.getElementById("lista-solicitudes");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const producto = document.getElementById("producto").value;

  const nuevaFila = document.createElement("tr");

  nuevaFila.innerHTML = `
    <td>${nombre}</td>
    <td>${producto}</td>
    <td>${correo}</td>
  `;

  listaSolicitudes.appendChild(nuevaFila);

  formulario.reset();
});
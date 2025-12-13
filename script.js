const boton = document.getElementById("toggleCV");
const detalles = document.getElementById("cvDetalles");

boton.addEventListener("click", () => {
  detalles.classList.toggle("oculto");
});

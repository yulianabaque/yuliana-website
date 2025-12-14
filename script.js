const boton = document.getElementById("toggleCV");
const detalles = document.getElementById("cvDetalles");

boton.addEventListener("click", () => {
  detalles.classList.toggle("oculto");

  if (detalles.classList.contains("oculto")) {
    boton.textContent = "Mostrar detalles";
  } else {
    boton.textContent = "Ocultar detalles";
  }
});
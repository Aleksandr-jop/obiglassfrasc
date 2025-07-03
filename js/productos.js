import {
  mostrarModalCarrito,
  cerrarModalCarrito,
  vaciarCarrito,
  actualizarContadorCarrito
} from './carrito-utils.js';

document.addEventListener("DOMContentLoaded", () => {
  actualizarContadorCarrito();
  document.getElementById("cart-icon")?.addEventListener("click", mostrarModalCarrito);
  document.getElementById("cerrar-modal")?.addEventListener("click", cerrarModalCarrito);
  document.getElementById("vaciar-carrito")?.addEventListener("click", vaciarCarrito);
  document.getElementById("pagar-carrito").addEventListener("click", () => {
  window.location.href = "contactos.html";
});
});
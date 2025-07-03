import {
  mostrarModalCarrito,
  cerrarModalCarrito,
  vaciarCarrito,
  actualizarContadorCarrito
} from './carrito-utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');

  const textarea = document.getElementById('consulta');
  if (textarea) {
    if (carrito.length > 0) {
      let texto = '🧾 Pedido realizado:\n\n';

      carrito.forEach(item => {
        const precioFormateado = Number(item.price).toLocaleString('es-AR');
        const totalFormateado = Number(item.total).toLocaleString('es-AR');

        texto += `${item.name}\n`;
        texto += `${item.color}, ${item.size} ML, ${item.quantity} Ud x $${precioFormateado}, Total - $${totalFormateado}\n`;
      });

      const total = carrito.reduce((acc, item) => acc + Number(item.total), 0);
      texto += `\n💵 Total a pagar: $${total.toLocaleString('es-AR')}`;
      textarea.value = texto;
    } else {
      textarea.value = 'No hay productos en el carrito.';
    }
  }

  const campoCarrito = document.getElementById('campo-carrito');
  if (campoCarrito && carrito.length > 0) {
    campoCarrito.value = JSON.stringify(carrito);
  }

  actualizarContadorCarrito();

  document.getElementById('cart-icon')?.addEventListener('click', mostrarModalCarrito);
  document.getElementById('cerrar-modal')?.addEventListener('click', cerrarModalCarrito);
  document.getElementById('vaciar-carrito')?.addEventListener('click', vaciarCarrito);
  document.getElementById('pagar-carrito')?.addEventListener('click', () => {
    alert('🧾 Gracias por tu compra!');
    localStorage.removeItem('carrito');
    actualizarContadorCarrito();
    cerrarModalCarrito();
  });

  const btnPagar = document.getElementById("pagar-carrito");
if (btnPagar) {
  btnPagar.disabled = true;
  btnPagar.style.opacity = "0.5";
  btnPagar.style.cursor = "not-allowed";
  btnPagar.title = "El pago se realiza en la página de productos";
}

});
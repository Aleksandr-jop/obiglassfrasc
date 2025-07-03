export function actualizarContadorCarrito() {
  const cartCountEl = document.getElementById("cart-count");
  if (!cartCountEl) return;

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const totalItems = carrito.length;

  if (totalItems > 0) {
    cartCountEl.textContent = totalItems;
    cartCountEl.classList.remove("hidden");
  } else {
    cartCountEl.textContent = "0";
    cartCountEl.classList.add("hidden");
  }
}

export function mostrarModalCarrito() {
  const modal = document.getElementById("modal-carrito");
  const lista = document.getElementById("lista-carrito");
  const totalEl = document.getElementById("cart-total");
  if (!modal || !lista || !totalEl) return;

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  let total = 0;
  lista.innerHTML = carrito.map((item, index) => {
    total += Number(item.total);
    return `
      <li style="margin-bottom: 10px;">
        <strong>${item.name}</strong><br>
        ${item.color}, ${item.size} ML, ${item.quantity} Ud x 
        $${Number(item.price).toLocaleString('es-AR')}, 
        <strong>Total - $${Number(item.total).toLocaleString('es-AR')}</strong>
        <button class="eliminar-item" data-index="${index}">🗑️</button>
      </li>
    `;
  }).join("");

  totalEl.textContent = `🧾 Total del carrito: $${total.toLocaleString('es-AR')}`;
  modal.classList.remove("hidden");

  lista.querySelectorAll(".eliminar-item").forEach(btn => {
    btn.addEventListener("click", () => {
      carrito.splice(Number(btn.dataset.index), 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarModalCarrito();
      actualizarContadorCarrito();
    });
  });
}

export function cerrarModalCarrito() {
  const modal = document.getElementById("modal-carrito");
  if (modal) modal.classList.add("hidden");
}

export function vaciarCarrito() {
  localStorage.removeItem("carrito");
  mostrarModalCarrito();
  actualizarContadorCarrito();
}




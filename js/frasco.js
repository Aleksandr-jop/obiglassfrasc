import { productos } from './products.js';

const params = new URLSearchParams(window.location.search);
const productoId = parseInt(params.get("id"), 10);
const producto = productos.find(p => p.id === productoId);

if (!producto) {
  document.querySelector(".contenedor-frasco").innerHTML = "<p>Producto no encontrado.</p>";
}

let selectedColor = null;
let selectedSize = null;

function renderFrasco(producto) {
  const contenedor = document.querySelector(".contenedor-frasco");

  const listasPorColor = Object.entries(producto.variants).map(([color, tamanios]) => {
    const variantes = Object.entries(tamanios).map(([size, price]) => {
      const precio = price.toLocaleString('es-AR');
      return `<li>Frasco ${color} x${size} $${precio}</li>`;
    }).join("");

    return `<div><ul>${variantes}</ul></div>`;
  }).join("");

  contenedor.innerHTML = `
    <div class="img-frasc">
      <img src="${producto.image}" alt="${producto.name}">
      <p>${producto.name}</p>                  
    </div>

    <div class="butt-frasc">
      <div class="item-precio">
        ${listasPorColor}
      </div>

      <div class="botones">
        <p>Selecciona color:</p>
        <div class="color-buttons">
          <button class="green" data-color="Verde/Azul">Verde</button>
          <button class="blue" data-color="Verde/Azul">Azul</button>
          <button class="white" data-color="Claro">Claro</button>
          <button class="brown" data-color="Ambar">Ambar</button>
        </div>

        <p>Selecciona tamaño:</p>
        <div class="medida-buttons">
          <button data-size="10ML">10ml</button>
          <button data-size="15ML">15ml</button>
          <button data-size="20ML">20ml</button>
          <button data-size="30ML">30ml</button>
          <button data-size="50ML">50ml</button>
          <button data-size="100ML">100ml</button>
        </div>

        <div class="cantidad">
          <label for="cantidad">Cantidad:</label>
          <input type="number" id="cantidad" name="cantidad" min="1" value="1">
        </div>

        <button class="buy-button" data-product-id="${producto.id}">Agregar al carrito</button>
      </div>
    </div>
  `;
}

function manejarSeleccion() {
  const colorButtons = document.querySelectorAll(".color-buttons button");
  const sizeButtons = document.querySelectorAll(".medida-buttons button");

  colorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      selectedColor = btn.dataset.color;
      colorButtons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      selectedSize = btn.dataset.size;
      sizeButtons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cart-icon")?.addEventListener("click", mostrarModalCarrito);

  document.getElementById("cerrar-modal")?.addEventListener("click", () => {
    document.getElementById("modal-carrito").classList.add("hidden");
  });

  document.getElementById("vaciar-carrito")?.addEventListener("click", () => {
    localStorage.removeItem("carrito");
    actualizarContadorCarrito();
    cerrarModalCarrito();
  });

  document.getElementById("pagar-carrito")?.addEventListener("click", () => {
    alert("🧾 Gracias por tu compra!");
    window.location.href = "contactos.html";
  });

  renderFrasco(producto);
  manejarSeleccion();
  manejarCompra(producto); // ✅ с передачей самого товара
  actualizarContadorCarrito();
});

function manejarCompra(producto) {
  const buyButton = document.querySelector(".buy-button");

  buyButton.addEventListener("click", () => {
    const cantidadInput = document.getElementById("cantidad");
    const cantidad = parseInt(cantidadInput.value, 10);

    if (!selectedColor || !selectedSize) {
      alert("Por favor, seleccioná un color y un tamaño.");
      return;
    }

    // Объединяем Verde и Azul как "Verde/Azul"
    const colorKey =
      selectedColor === "Verde" || selectedColor === "Azul"
        ? "Verde/Azul"
        : selectedColor;

    const tamanios = producto.variants[colorKey];

    if (!tamanios || !(selectedSize in tamanios)) {
      alert("Esa combinación no está disponible.");
      return;
    }

    const price = tamanios[selectedSize];

    const item = {
      id: producto.id,
      name: producto.name,
      color: selectedColor,
      size: selectedSize,
      quantity: cantidad,
      price,
      total: cantidad * price
    };

    const existingCart = JSON.parse(localStorage.getItem("carrito")) || [];
    existingCart.push(item);

    localStorage.setItem("carrito", JSON.stringify(existingCart));
    actualizarContadorCarrito();

    alert(
      `✔️ EL PRODUCTO AGREGADO:\n\n` +
        `${item.name}\n` +
        `Color - ${item.color}\n` +
        `Tamaño - ${item.size}\n` +
        `Cantidad - ${item.quantity} Ud.\n` +
        `Precio c/u - $${item.price.toLocaleString('es-AR')}\n` +
        `Total - $${item.total.toLocaleString('es-AR')}`
    );
  });
}

function actualizarContadorCarrito() {
  const cartCountEl = document.getElementById("cart-count");
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

function mostrarModalCarrito() {
  const modal = document.getElementById("modal-carrito");
  const lista = document.getElementById("lista-carrito");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  if (carrito.length === 0) {
    lista.innerHTML = "<li>🧺 El carrito está vacío.</li>";
    document.getElementById("cart-total").textContent = "";
  } else {
    let total = 0;

    lista.innerHTML = carrito
      .map((item, index) => {
        total += item.total;
        return `
          <li style="margin-bottom: 10px;">
            <strong>${item.name}</strong><br>
            ${item.color}, ${item.size} ML, ${item.quantity} Ud x $${item.price.toLocaleString('es-AR')}, 
            <strong>Total - $${Number(item.total).toLocaleString('es-AR')}</strong>
            <button class="eliminar-item" data-index="${index}">🗑️</button>
          </li>
        `;
      })
      .join("");

    document.getElementById("cart-total").textContent = `🧾 Total del carrito: $${total.toLocaleString('es-AR')}`;
  }

  modal.classList.remove("hidden");

  document.querySelectorAll(".eliminar-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.getAttribute("data-index"));
      eliminarItemDelCarrito(index);
    });
  });
}

function eliminarItemDelCarrito(index) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContadorCarrito();
  mostrarModalCarrito(); 
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  actualizarContadorCarrito();
  mostrarModalCarrito(); 
}

function cerrarModalCarrito() {
  document.getElementById("modal-carrito").classList.add("hidden");
}
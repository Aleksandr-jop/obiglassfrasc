// 📦 Импорт массива продуктов из файла
import { productos } from './products.js';

const params = new URLSearchParams(window.location.search);
const productoId = parseInt(params.get("id"), 10);
const producto = productos.find(p => p.id === productoId);

// Защита от пустого результата
if (!producto) {
  document.querySelector(".contenedor-frasco").innerHTML = "<p>Producto no encontrado.</p>";
}

// 🧠 Здесь будем хранить выбор пользователя
let selectedColor = null;
let selectedSize = null;

// 🚀 Функция рендера карточки товара
function renderFrasco(producto) {
  const contenedor = document.querySelector(".contenedor-frasco");

  // 🧼 Группировка по цвету
  const colores = ["Ambar", "Claro", "Verde/Azul"];
  const listasPorColor = colores.map(color => {
    const variantes = producto.variants
      .filter(v => v.color === color)
      .map(v => {
        const precio = v.price.toLocaleString('es-AR');
        return `<li>Frasco ${color} x${v.size} $${precio}</li>`;
      }).join("");

    return `<div><ul>${variantes}</ul></div>`;
  }).join("");

  // 🖼️ Рендер карточки
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
          <button class="green" data-color="Verde">Verde</button>
          <button class="blue" data-color="Azul">Azul</button>
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

        <button class="buy-button">Agregar al carrito</button>
      </div>
    </div>
  `;
}

// 🎛 Навешиваем обработчики на кнопки выбора цвета и размера
function manejarSeleccion() {
  const colorButtons = document.querySelectorAll(".color-buttons button");
  const sizeButtons = document.querySelectorAll(".medida-buttons button");

  colorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      selectedColor = btn.textContent.trim();
      colorButtons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      selectedSize = btn.textContent.trim().toUpperCase();
      sizeButtons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });
}

// 📍 Запускаем рендер и навешивание событий после загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
document.getElementById("cart-icon").addEventListener("click", mostrarModalCarrito);
document.getElementById("cerrar-modal").addEventListener("click", () =>
  document.getElementById("modal-carrito").classList.add("hidden")
);
document.getElementById("vaciar-carrito").addEventListener("click", vaciarCarrito);
document.getElementById("pagar-carrito").addEventListener("click", () => {
  window.location.href = "contactos.html";
});
  renderFrasco(producto);
  manejarSeleccion();
  manejarCompra();
  actualizarContadorCarrito();
});

function manejarCompra() {
  const buyButton = document.querySelector(".buy-button");

  buyButton.addEventListener("click", () => {
    const cantidadInput = document.getElementById("cantidad");
    const cantidad = parseInt(cantidadInput.value, 10);


    if (!selectedColor || !selectedSize) {
      alert("Por favor, seleccioná un color y un tamaño.");
      return;
    }

    // Ищем нужную комбинацию цвета и размера
    const variant = producto.variants.find(v => {
    const colorMatch = (
    v.color === selectedColor ||              // прямое совпадение
    v.color === "Verde/Azul" && (selectedColor === "Verde" || selectedColor === "Azul")
  );
  return colorMatch && v.size === selectedSize;
});

    if (!variant) {
      alert("Esa combinación no está disponible.");
      return;
    }

    const item = {
      id: producto.id,
      name: producto.name,
      color: selectedColor,
      size: selectedSize,
      quantity: cantidad,
      price: variant.price,
      total: cantidad * variant.price
    };

     // 💾 Получаем текущую корзину и добавляем товар
    const existingCart = JSON.parse(localStorage.getItem("carrito")) || [];
    existingCart.push(item);

    // 💾 Сохраняем корзину обратно и обновляем счётчик
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

  const totalItems = carrito.length; // ← показываем количество уникальных товаров

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

  // Навесим события на кнопки удаления
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
  mostrarModalCarrito(); // перерисовываем модалку
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  actualizarContadorCarrito();
  mostrarModalCarrito(); // покажет "карзина пуста"
}

function cerrarModalCarrito() {
  document.getElementById("modal-carrito").classList.add("hidden");
}

console.log(typeof item.price, item.price);
console.log(typeof item.total, item.total);
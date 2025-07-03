import { productos } from './products.js';

const contenedor = document.getElementById('contenedor-productos');

productos.forEach(producto => {
  const item = document.createElement('div');
  item.className = 'item-grid';

  item.innerHTML = `
    <a href="frasco.html?id=${producto.id}">
      <img src="${producto.image}" alt="${producto.name}">
    </a>
    <p>${producto.name}</p>
  `;

  contenedor.appendChild(item);
});
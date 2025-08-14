import { productos, updatePricesLocal } from './js/products.js';

document.getElementById('update-prices-btn').addEventListener('click', () => {
const percentInput = document.getElementById('percent-input');
const percent = parseFloat(percentInput.value);
const resultMsg = document.getElementById('result-msg');
if (isNaN(percent)) {
    resultMsg.textContent = '¡Escribe el porcentaje correcto!';
    resultMsg.style.color = 'red';
    return;
}
const nuevosProductos = updatePricesLocal(percent);
localStorage.setItem('productos', JSON.stringify(nuevosProductos));
resultMsg.textContent = `Precios actualizados en ${percent > 0 ? '+' : ''}${percent}% y guardados!`;
resultMsg.style.color = 'green';
});
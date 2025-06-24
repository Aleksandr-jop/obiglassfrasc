document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------
    // 🔸 0. Глобальные переменные и DOM-элементы
    // ------------------------------

    const cart = [];

    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeBtn = document.getElementById('close-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    const buyButton = document.querySelector('.buy-button');
    const cantidadInput = document.getElementById('cantidad');

    let selectedColor = '';
    let selectedSize = '';
    let selectedCantidad = 1;

    // ------------------------------
    // 🔸 1. Таблица цен
    // ------------------------------

    const precios = {
        'Ambar': {
            '10ml': 728, '15ml': 754, '20ml': 806,
            '30ml': 831, '50ml': 936, '100ml': 1040
        },
        'Claro': {
            '10ml': 806, '15ml': 831, '20ml': 859,
            '30ml': 923, '50ml': 1014, '100ml': 1092
        },
        'Verde/Azul': {
            '10ml': 871, '15ml': 910, '20ml': 962,
            '30ml': 1001, '50ml': 1104, '100ml': 1261
        }
    };

    function obtenerGrupoColor(color) {
        if (color === 'Verde' || color === 'Azul') return 'Verde/Azul';
        if (color === 'Claro') return 'Claro';
        return 'Ambar';
    }
    // ----------последнее добавление------------------------
    const colorButtons = document.querySelectorAll('.color-buttons button');

    colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedColor = button.textContent.trim();
        console.log('Цвет выбран:', selectedColor);
    });
});

    const sizeButtons = document.querySelectorAll('.medida-buttons button');

    sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedSize = button.textContent.trim();
        console.log('Размер выбран:', selectedSize);
    });
});

    colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        colorButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        selectedColor = button.textContent.trim();
    });
});

    sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        sizeButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        selectedSize = button.textContent.trim();
    });
});

    // ----------последнее добавление------------------------
    // 🔸 2. Счётчик и количество
    // ------------------------------

    if (cantidadInput) {
    cantidadInput.value = 1; // ← сбрасываем значение при загрузке
    selectedCantidad = 1;     // ← синхронизируем переменную

    cantidadInput.addEventListener('input', () => {
        selectedCantidad = parseInt(cantidadInput.value) || 1;
    });
}

    // ------------------------------
    // 🔸 3. Обработка кнопки покупки
    // ------------------------------

    if (buyButton) {
        buyButton.addEventListener('click', () => {
            if (!selectedColor || !selectedSize) {
                alert('Выберите цвет и размер!');
                return;
            }

            const grupo = obtenerGrupoColor(selectedColor);
            const precioUnitario = precios[grupo][selectedSize];
            const total = precioUnitario * selectedCantidad;

            const item = {
                color: selectedColor,
                size: selectedSize,
                cantidad: selectedCantidad,
                precioUnitario,
                total
            };

            cart.push(item);

            // Обновляем счётчик
            if (cartCount) {
                cartCount.textContent = cart.length;
                cartCount.classList.remove('hidden');
            }

            alert(`Товар добавлен:
Цвет: ${item.color}
Размер: ${item.size}
Кол-во: ${item.cantidad}
Цена за 1: $${item.precioUnitario}
Сумма: $${item.total}`);
        });
    }

    // ------------------------------
    // 🔸 4. Открытие модального окна
    // ------------------------------

    function renderCart() {
    if (!cartItemsList || !cartTotal || !cartCount) return;

    cartItemsList.innerHTML = '';

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li>Корзина пуста.</li>';
        cartTotal.textContent = '';
        cartCount.classList.add('hidden');
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.color}, ${item.size}, ${item.cantidad} шт — $${item.total}
            <button class="remove-item" data-index="${index}" title="Удалить товар">×</button>
        `;
        cartItemsList.appendChild(li);
        total += item.total;
    });

    cartTotal.textContent = `Итого к оплате: $${total}`;
    cartCount.textContent = cart.length;
    cartCount.classList.remove('hidden');

    // Подключаем обработчики удаления
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(button.dataset.index);
            cart.splice(index, 1);
            renderCart(); // пересборка
        });
    });
}

    //  Показываем модалку при клике:

    if (cartIcon && cartModal) {
    cartIcon.addEventListener('click', () => {
        renderCart();
        cartModal.classList.remove('hidden');
    });
}

    // ------------------------------
    // 🔸 5. Закрытие модального окна
    // ------------------------------

    if (closeBtn && cartModal) {
        closeBtn.addEventListener('click', () => {
            cartModal.classList.add('hidden');
        });
    }

    // ------------------------------
    // 🔸 6. Скрытие счётчика при пустой корзине
    // ------------------------------

    if (cartCount && cart.length === 0) {
        cartCount.classList.add('hidden');
    }

    // ✅ Для отладки (временно)
    console.log('script.js загружен и инициализирован.');
});


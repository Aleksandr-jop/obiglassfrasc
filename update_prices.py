import re
import json

def update_price(price, percent):
    return int(round(price * (1 + percent / 100)))

def main():
    percent = float(input("Введите процент изменения (например, 10 или -5): "))
    js_path = r'c:\Users\aleks\Documents\ProgramacioN\obiglas\js\products.js'

    with open(js_path, encoding='utf-8') as f:
        js_code = f.read()

    # Найти массив продуктов
    match = re.search(r'export const productos = (\[.*\]);', js_code, re.DOTALL)
    if not match:
        print("Массив productos не найден!")
        return

    productos_json = match.group(1)
    # Преобразовать JS-объект в JSON-совместимый вид
    productos_json = productos_json.replace("'", '"')
    productos_json = re.sub(r'(\w+):', r'"\1":', productos_json)  # Ключи в кавычки

    productos = json.loads(productos_json)

    # Обновить цены
    for product in productos:
        for variant, sizes in product["variants"].items():
            for size in sizes:
                sizes[size] = update_price(sizes[size], percent)

    # Собрать обратно в JS
    new_json = json.dumps(productos, ensure_ascii=False, indent=2)
    new_js = re.sub(r'export const productos = \[.*\];', f'export const productos = {new_json};', js_code, flags=re.DOTALL)

    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(new_js)

    print("Цены успешно обновлены!")

if __name__ == "__main__":
    main()
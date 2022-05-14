function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    //let products = [
        //{id: 1, title: 'Эчпочмак', count: 2, price: '55.00'},
        //{id: 2, title: 'Пицца', count: 5, price: '500.00'}];
    
    
                
    // например, {id: 1, title: 'Пицца', count: 5, price: '500.00'}, где
    // id - идентификатор
    // title - наименование
    // price - цена
    // count - количество

    // сформируйте строку itemCountText вида:
    // количество × цена ₽ = стоимость ₽
    // например,
    // 5 × 500.00 ₽ = 2500 ₽
    count = product.count;
    price = product.price;

    itemCountText = "";
    itemCountText =  itemCountText + count;
    itemCountText = itemCountText + ' × ';
    itemCountText = itemCountText + price;
    itemCountText = itemCountText + ' ₽ = ';
    sum = count * price;
    itemCountText = itemCountText + sum;
    itemCountText = itemCountText + " ₽";

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}

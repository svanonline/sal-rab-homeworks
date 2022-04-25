function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    message = `${productName} за ${productPrice} теперь в корзине!`
    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    newValue = oldValue + 1
    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    newSum = `${oldSum + difference} ₽`
    // создайте переменную newSumText и присвойте ей результат склеивания переменной newSum и текста ' ₽'
    // замените склеивание, используемое в newSum Text на шаблонную строку

    // Конец решения задания №1.3.

    return newSum;
}


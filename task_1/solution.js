function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    message = `${productName} за ${productPrice} теперь в корзине!`
    return message;
}

function addInCartCountChange(value) {

    let oldValue = value;

    newValue = oldValue + 1
    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    newSum = `${oldSum + difference} ₽`
    return newSum;
}


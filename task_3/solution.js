function renderCartItem(item) {
    const product = item;

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

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}

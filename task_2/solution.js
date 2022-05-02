function calcShipping(sum, min, shipping) {
  let productsSum = sum; // сумма в корзине
  let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
  let shippingPrice = shipping; // стоимость доставки

  // Задание №2.1. Рассчитать доставку

  shippingSum = 0;
  if (sum == 0) {
    shippingSum == 0;
  } else if (sum >= min) {
    shippingSum = 0;
  } else {
    shippingSum = shipping;
  }

  // если productsSum равно 0,
  // то shippingSum присвоить значение 0

  // если productsSum Больше или равна freeShippingMinSum,
  // то shippingSum присвоить значение 0

  // если productsSum больше 0 и меньше freeShippingMinSum,
  // то shippingSum присвоить значение shippingPrice

  // Конец решения задания №2.1.

  return shippingSum;
}

function calcDiscount(sum, min, discount) {
  let productsSum = sum; // сумма в корзине
  let discountMinSum = min; // минимальная цена для скидки
  let discountPart = discount; // величина скидки в процентах

  // Задание №2.2. Рассчитать скидку

  discountSum = 0;
  if (sum >= min) {
    discountSum = (sum * discount) / 100;
  } else {
    discountSum = 0;
  }

  // если productsSum больше или равно discountMinSum,
  // то присвойте discountSum значение discountPart процентов от productsSum,
  // иначе присвойте discountSum значение 0

  // Конец решения задания №2.2.

  return discountSum;
}

function calcInvoice(
  sum,
  discountMinSum,
  discountPart,
  shippingFreeMinSum,
  shippingPrice
) {
  let productsSum = sum;
  let discountSum = calcDiscount(sum, discountMinSum, discountPart);

  // Задача №2.3. Рассчитать скидки и доставку в корзине

  totalSum = productsSum - discountSum;

  // присвойте totalSum значение productsSum
  // уменьшите totalSum на discountSum

  shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
  totalSum = totalSum + shippingSum;
  // прибавьте к totalSum значение shippingSum

  freeShipping = shippingSum != 0;

  // запишите без использования if или любых других условий:
  // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

  // Конец решения задачи №2.3.

  return {
    discount: discountSum,
    freeShipping,
    shipping: shippingSum,
    total: totalSum,
  };
}

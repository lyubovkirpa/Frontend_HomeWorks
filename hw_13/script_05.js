// 5*. Напишите функцию, которая посчитает сумму к оплате в корзине в интернет магазине комп техники. На вход функция получает обьект корзины (пример ниже - наименование товара и количество, а также обьект с ценами на товары, с доп уровнями вложености). К названиям товаров привязываться не стоит, они могут быть другими, в примере просто пример.

// const bucket = { display: 20, videocard: 100, cpu: 40, }

// const products = { warehouse1: { videocard: 12.5, }, warehouse2: { display: 56.2, cpu: 150, }, }

// calculateCost(bucket, products); // результат = 8374

const bucket = { display: 20, videocard: 100, cpu: 40 };

const products = {
  warehouse1: { videocard: 12.5 },
  warehouse2: { display: 56.2, cpu: 150 },
};

function calculateCost(bucket, products) {
    let sum = 0;

  
}

console.log(calculateCost(bucket, products));

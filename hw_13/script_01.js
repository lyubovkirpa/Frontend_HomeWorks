// 1. Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива. Пример работы функции: ['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }

let array = ["apple", "kiwi", "Leo", 2024];

// 1.
const newObject = (array) => {
  return array.reduce((acc, el) => {
    acc[el] = el;
    return acc;
  }, {});
};
console.log(newObject(array));

// 2.
const newObject1 = Object.fromEntries(array.map((el) => [el, el]));
console.log(newObject1);

//3. besser
const newObject2 = (arr) => {
  let obj = {};
  arr.forEach((el) => {
    obj[el] = el;
  });
  return obj;
};
console.log(newObject2(array));

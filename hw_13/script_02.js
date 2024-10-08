// Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект. Первый элемент каждого внутреннего массива ключ, второй - значение. Например такой:
const arrayArrays = [
  ["height", 170],
  ["weight", 80],
  ["sport", "regbi"],
  ["full name", "John Doe"],
  ["sing", "love"],
  ["speed", 90],
];


// 1. с reduce()

function changeToObject(arrayArrays) {
  return arrayArrays.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}

console.log(changeToObject(arrayArrays));

//2. с Object.fromEntries() 
//Этот метод принимает итерируемый объект (например, массив массивов) и возвращает новый объект, где каждый подмассив рассматривается как пара ключ-значение.

function changeToObject1(arrayArrays) {
   return Object.fromEntries(arrayArrays)
};

console.log(changeToObject1(arrayArrays));

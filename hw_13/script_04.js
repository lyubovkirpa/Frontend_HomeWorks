// Напишите функцию, которая принимает объект и возвращает другой обьект, который содержит все свойства исходного обьетка, но значения свойств - это их типы. { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: 'string', '36.6': 'number', 'John Doe': 'string' }

const object = { a: "a", 36.6: 36.6, "John Doe": "John Doe" };

//1. c reduce()
function newObject(object) {
  return Object.keys(object).reduce((acc, key) => {
    acc[key] = typeof object[key];
    return acc;
  }, {});
}
console.log(newObject(object));



//2. c Object.entries() вместе с Object.fromEntries()
function newObject(obj) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, typeof value])
    );
}
console.log(newObject(object));

//3. c forEach()
function newObject(object) {
    let result = {};
   Object.keys(object).forEach(el=> result[el] = typeof object[el])
   return result
  }
  console.log(newObject(object));

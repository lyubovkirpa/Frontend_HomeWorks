// 6*. Напишите функцию, которая сравнивает 2 объекта, и возвращает результат true если они равны или false в противном случае

// Функция принимает 2 аргумента - объекты. Объекты в качестве значений свойств могут иметь только примитивные типы данных

// Объекты равные, если их содержание (пары ключ-значение) совпадает, количество свойств также должно совпадать. Порядок не важен.

// function compareObjects(firstObj, secondObj) { // тут ваш код }

// примеры объектов которые можно использовать для тестирования функции

const obj1 = { name: "John", age: 17 };

const obj2 = { name: "Mark", age: 17 };

const obj3 = { name: "Mark", age: 17, student: false };

const obj4 = { name: "John", age: 17 };


//
// function compareObjects(obj1, obj2) {
//   if (obj1.name === obj2.name && obj1.age === obj2.age) {
//     return true;
//   } else {    
//       return false;
//   }
// };

// console.log(compareObjects(obj1, obj2));


//1.
// function compareObjects1(obj1, obj2) {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length) {
//         return false;
//     }

//     for (const key of keys1) {
//         if (!keys2.includes(key) || obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }
//     return true;
// }

//2.
function compareObjects2(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    // Сравниваем количество ключей и значения
    return keys1.length === keys2.length && keys1.every(key => obj1[key] === obj2[key]);
}



console.log(compareObjects2(obj1, obj2));
console.log(compareObjects2(obj2, obj2));
// console.log(compareObjects1(obj1, obj4));
// console.log(compareObjects1(obj3, obj4));
// console.log(compareObjects1(obj2, obj2));
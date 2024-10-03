//TODO   Задание 1 // Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".

let arrayNames = ["Мария", "Алексей", "Елена", "Дмитрий"];
let arrayAges = [22, 31, 45, 53];
let arrayFamilyName = ["Клименко", "Кравченко", "Подольская", "Казанцев"];

let newArray = [];

// Перебираем массив имен
for (let i = 0; i < arrayNames.length; i++) {
  let name = arrayNames[i]; // Текущее имя
  const age = arrayAges[i]; // Соответствующий возраст
  const family = arrayFamilyName[i];

  // Формируем строку и добавляем в новый массив
  newArray[i] = `${name} ${family} ${age} лет/годов`;
}
// Выводим массив только один раз
console.log(newArray);

console.log();

//TODO   Задание 2 // Используя пройденные на занятии методы массива получите из этого массива новый массив, в котором элементы идут в обратной последовательности.
const animals = ["shark", "panda", "tiger", "dog"];
let newArr = [];
for (let i = animals.length - 1; i >= 0; i--) {
  newArr.push(animals[i]);
}
console.log(newArr);

console.log();

//TODO   Задание 3 // Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия" Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите countries в консоль

let countries = [];
countries.push("Франция", "Германия", "Италия");

let deletEl = countries.pop();
countries.unshift(deletEl);
console.log(countries);

console.log();

//TODO   Задание 4 // Создайте объект car с ключами brand, model, year, и isElectric. Задайте им значения. // Выведите на экран все ключи объекта // Выведите на экран все значения объекта // Добавьте в объект car метод getCarInfo, который будет возвращать строку, содержащую информацию о марке, модели и году выпуска машины. // Вызовите этот метод и выведите результат на экран. // выполните итерацию по ключам с помощью цикла for...in. // Внутри цикла выводите на экран каждую пару ключ: значение. // Затем модифицируйте вывод, чтобы он выглядел как: "Ключ: [ключ], Значение: [значение]". Например, "Ключ: brand, Значение: Toyota".

let car = {
  brand: "Mercedes-Benz",
  model: "Maybach",
  year: 2020,
  isElectric: true,
  getCarInfo: function () {
    return `${this.brand}, ${this.model}, ${this.year}`;
  },
};

// Выводим ключи объекта
console.log(Object.keys(car));

// Выводим значения объекта
console.log(Object.values(car));

console.log(car.getCarInfo());

for (const key in car) {
  console.log(`Ключ: ${key}, Значение: ${car[key]}`);
}

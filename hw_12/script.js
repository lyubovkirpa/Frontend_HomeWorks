// для каждого задания создайте отдельную функцию - используйте возвращенное значение // у вас должная быть как минимум одна стрелочная функция и одна function declaration функция

// Задание 1
// У вас есть массив объектов:

const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];
//
// Используйте методы массивов

// Создайте на основе старого массива новый массив объектов по образу: [{ name: "Luke Skywalker", isJedi: true }, {name: "Han Solo", isJedi: false}...]

// Задание 1.1
// 1-й вариант с циклом
function newArrayStarWarsHeroes(starWarsHeroes) {
  let newArray = [];
  for (let i = 0; i < starWarsHeroes.length; i++) {
    newArray.push({
      name: starWarsHeroes[i].name,
      isJedi: starWarsHeroes[i].isJedi,
    });
  }
  return newArray;
}
console.log(newArrayStarWarsHeroes(starWarsHeroes));

// 2-й вариант с map
let newArrayStarWarsHeroes1 = starWarsHeroes.map((hero) => ({
  name: hero.name,
  isJedi: hero.isJedi,
}));
console.log(newArrayStarWarsHeroes1);

// Задание 1.2
// Создайте новый массив с джедаями младше 40 лет

// 1-й вариант с циклом
function newArrayIsSmallJedi(starWarsHeroes) {
  let newArrayJedi = [];
  for (let i = 0; i < starWarsHeroes.length; i++) {
    let hero = starWarsHeroes[i];

    if (hero.isJedi && hero.age < 40) {
      newArrayJedi.push({
        name: hero.name,
        age: hero.age,
        isJedi: hero.isJedi,
      });
    }
  }
  return newArrayJedi;
}
console.log(newArrayIsSmallJedi(starWarsHeroes));

// 2-й вариант с циклом
// const newJediHeroesYounger40 = [];
// for(const el of starWarsHeroes){
//     if(el.isJedi && el.age < 40){
//         newJediHeroesYounger40.push({
//             name: el.name,
//             age: el.age
//         })
//     }
// };
// console.log(newJediHeroesYounger40);

// 2-й вариант с filter и map
function newArrayIsSmallJedi1(starWarsHeroes) {
  return starWarsHeroes
    .filter((hero) => hero.isJedi && hero.age < 40)
    .map((hero) => ({ name: hero.name, age: hero.age, isJedi: hero.isJedi }));
}
console.log(newArrayIsSmallJedi1(starWarsHeroes));

// 3-й вариант с тернарником
// const filterJadi = (jadi) => (jadi.age < 40 && jadi.isJedi ? true : false);

// const filterJadiHeres = starWarsHeroes.filter(filterJadi);
// console.log(filterJadiHeres);

// Задание 1.3
// Посчитайте возраст всех джедаев

function sumAgeJedi(starWarsHeroes) {
  let sumAgeAllJedi = starWarsHeroes
    .filter((hero) => hero.isJedi)
    .reduce((acc, hero) => acc + hero.age, 0);

  return sumAgeAllJedi;
}
console.log(sumAgeJedi(starWarsHeroes));




// Задание 1.4
// Повысьте возраст героев на 10 лет

function IncreasingAgeHeroes(starWarsHeroes) {
  return starWarsHeroes.map((hero) => ({
    name: hero.name,
    age: hero.age + 10,
    isJedi: hero.isJedi,
  }));
}
console.log(IncreasingAgeHeroes(starWarsHeroes));

// 2-й вариант



// Задание 1.5
// Создайте новый массив, где "Anakin Skywalker" заменен на { name: "Darth Vader", isJedi: false, age: 50 }

function replacedSkywalker(starWarsHeroes) {
  let findName = starWarsHeroes.find(
    (hero) => hero.name === "Anakin Skywalker"
  );

  if (findName) {
    (findName.name = "Darth Vader"),
      (findName.isJedi = false),
      (findName.age = 50);
  }
  return starWarsHeroes;
}
console.log(replacedSkywalker(starWarsHeroes));




// function replacedSkywalker(...starWarsHeroes) {
//     let findName = starWarsHeroes.find(
//       (hero) => hero.name === "Anakin Skywalker"
//     );
  
//     if (findName) {
//       (findName.name = "Darth Vader"),
//         (findName.isJedi = false),
//         (findName.age = 50);
//     }
//     return starWarsHeroes;
//   }
//   console.log(replacedSkywalker(starWarsHeroes));



// Задание 1.5 c преподавателем
// Создайте новый массив, где "Anakin Skywalker" заменен на { name: "Darth Vader", isJedi: false, age: 50 }

function changeHero(hero) {
    // if (hero.name === 'Anakin Skywalker') {
    //     return { name: "Darth Vader", isJedi: false, age: 50 }
    // } else {
    //     return hero
    // }

    // const res = (hero.name === 'Anakin Skywalker') ? { name: "Darth Vader", isJedi: false, age: 50 } : hero;
    // return res;

    return (hero.name === 'Anakin Skywalker') ? { name: "Darth Vader", isJedi: false, age: 50 } : hero;
};

const starWarsHeroesWithDarthVader = starWarsHeroes.map(changeHero);
console.log(starWarsHeroesWithDarthVader);

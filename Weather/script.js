//
// Приложение «Прогноз погоды»

// Нужно разработать простенькое приложение прогноза погоды. Верстка
// прилагается (index.html & style.css файлы).

// Когда пользователь попадает на страницу, js делает запрос на API который вернет
// текущее место положение пользователя. Провайдер данных: https://www.geojs.io/,
// нужный нам endpoint: https://get.geojs.io/v1/ip/geo.json Результат приходит в виде
// обьекта, нам нужно из него вытянуть город пользователя.

// Далее мы делаем запрос на следующий endpoint – для получения погоды текущей.
// Провайдер данных: https://www.weatherapi.com/, пример endpoint:
// http://api.weatherapi.com/v1/current.json?key=1a2481b373aa488995375035240603&
// q=London&aqi=no

// Где нужно заменить часть выделенную красным на свой API ключ, а зеленую на
// город, по которому мы хотим получить прогноз.

// Результат мы получаем как почти всегда в виде обьекта. В нем нужно найти
// свойства которые нам отдают текущую погоду (кратное описание (Sunny, Cloudly и
// т.п.), температуру, ссылку на иконку которая показывает текущую погоду, и дату. И
// вставить эти данные в соответствующие места в нашем приложении.

const date = document.querySelector(".date-text");
const cityName = document.querySelector(".city-text");
const icon = document.querySelector(".icon-big");
const weatherText = document.querySelector(".weather-text");
const temperatureText = document.querySelector(".temperature-now-text");
const iconImg = document.querySelector("img");
// const textWeekDay = document.querySelector(".text-weekDay");
// const temperatureMaxText = document.querySelector(".temperature-max-text");
// const temperatureMinText = document.querySelector(".temperature-min-text");
const weekDays = document.querySelectorAll(".day");

const getLocationInfo = async () => {
  try {
    const fetchResult = await fetch(`https://get.geojs.io/v1/ip/geo.json`);
    const responseBody = await fetchResult.json();
    console.log(responseBody);

    const fetchResult1 = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=94b25103b10948d693083138241610&q=${responseBody.country}&aqi=no`
    );

    const responseBody1 = await fetchResult1.json();
    console.log(responseBody1);

    // cityName.textContent = responseBody.city;
    cityName.textContent = `${responseBody.country}, ${responseBody.country_code}`;
    weatherText.textContent = responseBody1.current.condition.text;
    temperatureText.textContent = `${responseBody1.current.temp_c}°`;
    iconImg.src = responseBody1.current.condition.icon;

    const newDate = new Date("2024-10-17 00:16");
    // console.log(newDate);

    // const dayOfWeek = newDate.getDay(); //3
    // const month = newDate.getMonth(); //10
    // const currentDate = newDate.getDate(); //16

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayOfWeek = daysOfWeek[newDate.getDay()]; // Получаем день недели
    const month = months[newDate.getMonth()]; // Получаем месяц
    const currentDate = newDate.getDate(); // Получаем число

    date.textContent = `${dayOfWeek}, ${month} ${currentDate}`;

    // console.log(responseBody.latitude);
    // console.log(responseBody.longitude);

    const fetchResult2 = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=94b25103b10948d693083138241610&q=${responseBody.country}&days=7&aqi=no`
    );
    const responseBody2 = await fetchResult2.json();
    console.log(responseBody2);

    // Обходим каждый день из прогноза
    responseBody2.forecast.forecastday.forEach((dayData, index) => {
      // Получаем элемент для текущего дня
      const weekDayElement = weekDays[index];
      // console.log(weekDayElement);

      // Обновляем icon для каждого дня
      weekDayElement.querySelector(".icon-small > img").src =
        dayData.day.condition.icon;

      // Получаем день недели
      const dateObj = new Date(dayData.date);
      // console.log(dateObj);
      // console.log(dayData);

      // Обновляем день недели для каждого дня и обрезаем символы
      const dayOfWeek = daysOfWeek[dateObj.getDay()].slice(0, 3);
      // console.log(dayOfWeek);
      weekDayElement.querySelector(".text-weekDay").textContent = dayOfWeek;

      // Обновляем температуру для каждого дня
      weekDayElement.querySelector(
        ".temperature-max-text"
      ).textContent = `${Math.round(dayData.day.maxtemp_c)}°`;

      weekDayElement.querySelector(
        ".temperature-min-text"
      ).textContent = `${Math.round(dayData.day.mintemp_c)}°`;
    });

    
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
};

getLocationInfo();

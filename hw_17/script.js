const btnCreate = document.querySelector(".btn");
const input = document.querySelector(".task-input");
const list = document.querySelector(".list");
const listItem = document.querySelectorAll(".list-item");

const btnAll = document.querySelector("#all");
const btnCompleted = document.querySelector("#completed");
const btnUncompleted = document.querySelector("#uncompleted");

//  Очищает содержимое списка при загрузке
document.addEventListener("DOMContentLoaded", () => {
  listItem.forEach((item) => {
    item.style.display = "none"; // Скрыть каждую задачу
  });
});

btnCreate.addEventListener("click", createNewTask);

function createNewTask() {
  if (input.value === "") {
    showAlert();
    return;
  }

  const li = document.createElement("li");
  li.classList.add("list-item");
  li.textContent = input.value;
  list.append(li);
  input.value = "";

  li.addEventListener("click", changesStatusHandler);
}

listItem.forEach((item) =>
  item.addEventListener("click", changesStatusHandler)
);

function showAlert() {
  const alert = document.querySelector(".alert");
  alert.innerText = `Заполните поле`;
  alert.style.color = "red";
  document.querySelector(".actions").after(alert);

  setTimeout(() => {
    alert.innerText = "";
  }, 2000);
}

function changesStatusHandler() {
  this.classList.toggle("list-item_done");
}

btnAll.addEventListener("click", allTaskHandler);
btnCompleted.addEventListener("click", completedTaskHandler);
btnUncompleted.addEventListener("click", uncompletedTaskHandler);

function allTaskHandler() {
  const items = document.querySelectorAll(".list-item");
  items.forEach((item) => (item.style.display = "flex"));
}

function completedTaskHandler() {
  const items = document.querySelectorAll(".list-item");
  items.forEach((item) => {
    item.style.display = item.classList.contains("list-item_done")
      ? "flex"
      : "none";
  });
}

function uncompletedTaskHandler() {
  const items = document.querySelectorAll(".list-item");
  items.forEach((item) => {
    item.style.display = !item.classList.contains("list-item_done")
      ? "flex"
      : "none";
  });
}

//TODO    
 Задание hw 17
// https://jsonplaceholder.typicode.com/todos
// с помощью fetch взять список дел по ссылке выше, обрезать (slice) до 10-15, потом с помощью map привести элементы к нужному нам виду, и использовать этот массив для вывода в нашем проекте ту ду листа.

const resultOfFetch = fetch("https://jsonplaceholder.typicode.com/todos");
// console.log(resultOfFetch);

resultOfFetch
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((bodyOfResponse) => {
    renderFirst15(bodyOfResponse);
  });

resultOfFetch.catch((error) => {
  console.log("Ошибка", error);
});

function renderFirst15(array) {
  array
    .slice(0, 15)
    .map((el) => el.title)
    .forEach((title) => {
      const newLiElement = document.createElement("li");
      newLiElement.textContent = title;
      newLiElement.classList.add("list-item");
      newLiElement.addEventListener("click", changesStatusHandler);
      list.append(newLiElement);
    });

  list.after(list);
}


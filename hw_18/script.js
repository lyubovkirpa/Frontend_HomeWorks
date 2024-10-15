// Поработайте с двумя новыми APi:
// одна дает случайные факты о кошках https://catfact.ninja/fact другая случайные фото кошек https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1
// заберите данные из API и отобразите на странице используя синтаксис async / await.
// добавьте кнопку для обновление факта и кошки

const content = document.querySelector("#content");

async function getFactsAboutCats() {
  try {
    const catInfoFatch = await fetch("https://catfact.ninja/fact");
    if (!catInfoFatch.ok) {
      console.log(catInfoFatch);
      throw new Error(`Network error: ${catInfoFatch.status}`);
    }
    const data = await catInfoFatch.json();
    const section = document.createElement("section");
    const article = document.createElement("article");
    article.classList.add('textCat')
    article.textContent = data.fact;
    section.append(article);
    content.append(section);
    getFotosCats();
  } catch (error) {
    console.log("Ошибка", error.message);
  }
}

getFactsAboutCats();

async function getFotosCats() {
  try {
    const catFotoFetch = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
    );

    console.log(catFotoFetch);
    if (!catFotoFetch.ok) {
      throw new Error(`Network error: ${catFotoFetch.status}`);
    }

    const foto = await catFotoFetch.json();
    console.log(foto);

    const img = document.createElement("img");

    img.src = foto[0].url;

    document.querySelector("section").append(img);
  } catch (error) {
    console.log("Ошибка", error.message);
  }
}


const btn = document.querySelector("#btn-update");

btn.addEventListener("click", () => {
  // чистим предыдущие результаты
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  getFactsAboutCats();
});

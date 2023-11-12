document.addEventListener("DOMContentLoaded", function () {
  // Запрос к API Википедии для русской Библии
  fetch("https://ru.wikipedia.org/w/api.php?action=query&titles=Библия&prop=revisions&rvprop=content&format=json")
    .then(response => response.json())
    .then(data => {
      // Извлечение текста из API-ответа (получение контента статьи)
      const pageId = Object.keys(data.query.pages)[0];
      const content = data.query.pages[pageId].revisions[0]['*'];

      // Отображение контента на странице
      document.getElementById("bible-content").innerHTML = content;
    })
    .catch(error => {
      console.error("Ошибка при получении данных:", error);
    });
});
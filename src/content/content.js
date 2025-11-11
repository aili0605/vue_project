// // content.js
// console.log("Wishlist content script активен ✨");
// debugger
// // Пример: автоматически достаём название страницы
// const title = document.title;

// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//   if (msg.action === "getTitle") {
//     sendResponse({ title });
//   }
// });

// const container = document.createElement("div");
// container.id = "my-vue-button-container";
// document.body.appendChild(container);

// Находим ul с id catalog-grid
const catalog = document.querySelector("#catalog-grid");

if (catalog) {
  const items = catalog.querySelectorAll("li");

  items.forEach((li) => {
    const button = document.createElement("button");
    button.textContent = "Добавить в вишлист";

    button.style.marginLeft = "10px";
    button.style.padding = "5px 10px";
    button.style.backgroundColor = "#ff4081";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {
      // Запрос к бэкенду
      fetch("http://localhost:3000/api/products/all")
        .then((response) => response.json())
        .then((data) => {
          // Ставим точку останова для дебага
          debugger;
          console.log(data); // Можно посмотреть данные в консоли
        });
    });

    li.appendChild(button);
  });
}

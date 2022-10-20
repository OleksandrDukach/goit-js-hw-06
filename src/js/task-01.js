//==========Кількість категорій
const totalCategoriesEl = document.querySelector("#categories");
const categoriesEl = totalCategoriesEl.querySelectorAll('.item');
console.log("Number of categories: ", categoriesEl.length);

//==========Текст заголовку, та кількість елементів

for (let i = 0; i < categoriesEl.length; i += 1) {
    console.log("Category: ", categoriesEl[i].querySelector("h2").textContent);
    console.log("Elements: ", categoriesEl[i].querySelectorAll("ul li").length);
  }


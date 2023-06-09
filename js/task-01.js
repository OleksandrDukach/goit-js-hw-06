/* Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

В результате, в консоли будут выведены такие сообщения. */


//==========Кількість категорій
const totalCategoriesEl = document.querySelector("#categories");
const categoriesEl = totalCategoriesEl.querySelectorAll('.item');
console.log("Number of categories: ", categoriesEl.length);

//==========Текст заголовку, та кількість елементів

for (let i = 0; i < categoriesEl.length; i += 1) {
    console.log("Category: ", categoriesEl[i].querySelector("h2").textContent);
    console.log("Elements: ", categoriesEl[i].querySelectorAll("ul li").length);
  }


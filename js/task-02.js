/* Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients. */


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


//===============First method (old)==============
const itemEl = document.querySelector("#ingredients");

const elements = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const option = ingredients[i];
  const listEl = document.createElement('li');
  listEl.textContent = ingredients[i];
  elements.push(listEl);
}
console.log(elements)

itemEl.append(...elements)

//===============New method (якщо вийде (мод7 зан13(1:39:00)))==============

// const itemEl = document.querySelector("#ingredients");
// const elements = ingredients.map(option => {
//   const option = ingredients;
//   const listEl = document.createElement('li');
//   listEl.textContent = ingredients;
//   elements.push(listEl);
//   return itemEl
// });
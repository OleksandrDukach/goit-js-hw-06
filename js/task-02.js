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
//   // const option = ingredients;
//   const listEl = document.createElement('li');
//   listEl.textContent = ingredients;
//   // elements.push(listEl);
//   return itemEl
// });
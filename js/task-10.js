/* Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.


Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы. */

/* ------------Початкові дані------------ */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const refs = {
  inpEl: document.querySelector('#controls'),
  createEl: document.querySelector('button[data-create]'),
  deleteEl: document.querySelector('button[data-destro]'),
  boxEl: document.querySelector('#boxes'),
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let newBox = document.createElement('div');

    newBox.style.width = 30 + i * 10;
    newBox.style.heigth = 30;
    newBox.style.backgroundColor = getRandomHexColor();

    refs.boxEl.append(newBox);
  }
}

refs.createEl.addEventListener('click', function () {
  let amount = refs.inpEl.value;
  if (amount > 0) {
    createBoxes(amount);
  }
});

function destroyBox() {
  refs.deleteEl.addEventListener('click', function () {
  refs.boxEl.innerHTML = '';
})
}






//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.



const refs = {
  btn: document.querySelector('.change-color'),
  color: document.querySelector('.color')
};

refs.btn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor()
  refs.color.textContent = getRandomHexColor()
})



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


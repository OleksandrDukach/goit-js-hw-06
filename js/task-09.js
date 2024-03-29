//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.



const refs = {
  btn: document.querySelector('.change-color'),
  color: document.querySelector('.color')
};

refs.btn.addEventListener('click', () => {
  const randomColor = getRandomHexColor()
  document.body.style.backgroundColor = randomColor
  refs.color.textContent = randomColor
})



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


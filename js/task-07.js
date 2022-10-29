//Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text')
};

function changeFontSize() {
  refs.span.style.fontSize = refs.input.value + 'px'
}
refs.input.addEventListener('input', changeFontSize)


//=============Працює так само==============
// const refs = {
//   input: document.querySelector('#font-size-control'),
//   span: document.querySelector('#text')
// };

// const changeFontSize = () => {
//   refs.span.style.fontSize = `${ refs.input.value }px`
// }
// refs.input.addEventListener('input', changeFontSize)
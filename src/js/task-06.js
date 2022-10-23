//Напиши скрипт, который при потере фокуса на
//инпуте(событие blur), проверяет его содержимое
//на правильное количество введённых символов.

const refs = {
    input: document.querySelector('#validation-input')
}

refs.input.addEventListener('input', onInputBlur)

function onInputBlur() {
    console.log(onInputBlur)
}

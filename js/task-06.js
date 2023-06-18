//Напиши скрипт, который при потере фокуса на
//инпуте(событие blur), проверяет его содержимое
//на правильное количество введённых символов.

// const style = document.querySelector('style')
// style.classList.add('js-colors')


const input = document.querySelector('#validation-input')
;

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}


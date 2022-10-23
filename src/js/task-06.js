//Напиши скрипт, который при потере фокуса на
//инпуте(событие blur), проверяет его содержимое
//на правильное количество введённых символов.

// const style = document.querySelector('style')
// style.classList.add('js-colors')


const refs = {
    input: document.querySelector('#validation-input')
};

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length != refs.input.getAttribute('data-length')) {
         refs.input.classList.add('invalid')
    }
    else {
        refs.input.classList.remove('invalid');
            refs.input.classList.add('valid')
         
    }
}


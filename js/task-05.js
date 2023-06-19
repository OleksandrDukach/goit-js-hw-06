//Напиши скрипт который, при наборе текста 
//в инпуте input#name-input (событие input), подставляет 
//его текущее значение в span#name-output. 
//Если инпут пустой, в спане должна отображаться строка "Anonymous".

const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output')
}

// const input = document.querySelector('#name-input');
// console.log(refs.input);
// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur)

// function onInputFocus() {
//     console.log('Focused input')
// }

// function onInputBlur() {
//     console.log('Focused blur')
// }

refs.input.addEventListener('input', onInputChange);

function onInputChange(name) {
    if (refs.input.value.trim()) {
        refs.nameLabel.textContent = name.currentTarget.value
    }
    else {
        refs.nameLabel.textContent = "Anonymous"
    }
    // refs.nameLabel.textContent = name.currentTarget.value
    
}
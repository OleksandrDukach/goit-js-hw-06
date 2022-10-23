// Счетчик состоит из спана и кнопок,
 //которые при клике, должны увеличивать или
 //уменьшать его значение на единицу

let counterValue = 0; 
const decrementBtn = document.querySelector("[data-action='decrement']");
console.log(decrementBtn);
const incrementBtn = document.querySelector("[data-action='increment']");
console.log(incrementBtn)

decrementBtn.addEventListener('click', () => { 
    value.innerHTML =  counterValue -= 1;

});

incrementBtn.addEventListener('click', () => {
    value.innerHTML =  counterValue += 1
});
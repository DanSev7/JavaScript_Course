
function handleCostKeydown (event) {
    let key = event.key;
    if(key === 'Enter'){
        calculate();
    }
 }
 function handleClick() {
    let buttonElement = document.querySelector('.js-button');
    console.log(buttonElement)
    if (buttonElement.innerText === 'Subscribe'){
        buttonElement.innerText = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    }else {
        buttonElement.innerText = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
 }

 function calculate() {
    let cost = document.querySelector('.js-input');
    let totalCost = Number(cost.value);
    let resultElement = document.querySelector('.js-result');
    if(totalCost < 40 && totalCost > 0 ){
        totalCost = totalCost + 10;
        resultElement.innerHTML = `$${totalCost}`; 
        resultElement.style.color = 'black';

    }  else if (totalCost <= 0){
        resultElement.innerHTML = `Error: cost can't be less than or equal $0`;
        resultElement.style.color = 'red'; 
    } else {
        resultElement.innerHTML = `$${totalCost}`;
        resultElement.style.color = 'black';

    }
    
 }
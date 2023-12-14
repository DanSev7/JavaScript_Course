// Method 1
const array = [];

function display() {
  let listsElement = document.querySelector('.js-display-fizzbuzz');

  for (let i = 1; i < 21; i++) {
    array[i] = i;

    if (i % 3 === 0 && i % 5 === 0) {
      array[i] = 'FizzBuzz';
    } else if (i % 3 === 0) {
      array[i] = 'Fizz';
    } else if (i % 5 === 0) {
      array[i] = 'Buzz';
    }

    const list = document.createElement('span');
    list.innerText = array[i];
    
    if (array[i] === 'FizzBuzz') {
      list.style.color = 'red';
    } else if (array[i] === 'Fizz') {
      list.style.color = 'red';
    } else if (array[i] === 'Buzz') {
      list.style.color = 'red';
    }
    
    listsElement.appendChild(list);
    const space = document.createTextNode(' ');
    listsElement.appendChild(space);
  }
}
// Method 2
/*
const array = [];

function display (){
    let allLists = [];
    let listsElement = document.querySelector('.js-display-fizzbuzz');
    for (let i=1; i<21; i++) {
        array[i] = i;
        
        if(i %3 === 0 && i %5 === 0) {
            array[i] = 'FizzBuzz';
        }else if (i % 3 === 0){
            array[i] = 'Fizz';
        }else if ( i % 5 === 0) {
            array[i] = 'Buzz';
        } 

        const list = `<span> ${array[i]} </span>`;
        allLists += list;
    }
    
    listsElement.innerHTML = allLists;
}

*/

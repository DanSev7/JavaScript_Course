const scores = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    tie: 0
} 
console.log(scores);

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay () {

    let autoPlayElement = document.querySelector('.js-autoplay');
    if (!isAutoPlaying) {
        autoPlayElement.innerHTML = 'Stop Play';
    intervalId = setInterval (() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
    }, 1000)
    isAutoPlaying = true;
} else {
    clearInterval(intervalId);
    autoPlayElement.innerHTML = 'Auto Play';
    isAutoPlaying = false;
}
    
}

document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('Rock');
    })


/* or Use 
    document.body.addEventListener('keydown', ()=> {});
*/
document.querySelector('.js-keydown')
    .addEventListener('keydown', (event) => {
        let key = event.key;
        if(key === 'r' || key == 'R') {
        playGame('Rock');
        } else if (key === 'p' || key == 'P') {
            playGame('Paper');
        } else if ( key === 's' || key == 'S') {
            playGame('Scissors');
        }
    })

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('Paper');
    })

document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('Scissors');
    })

document.querySelector('.js-reset-button')
    .addEventListener('click', () => {
        showConfirmation();
    })

document.querySelector('.js-autoplay')
    .addEventListener('click', () => {
        autoPlay();
    })

function playGame (playerMove) {
    const computerMove =  pickComputerMove();
    let result = '';
    
    if(playerMove === 'Scissors'){

        if (computerMove === 'Rock'){
            result = 'You lose.';
        } else if (computerMove === 'Paper') {
            result = 'You win!';
        } else if (computerMove === 'Scissors') {
            result = 'Tie.';
        }


    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock'){
            result = 'You win!';
        } else if (computerMove === 'Paper') {
            result = 'Tie.';
        } else if (computerMove === 'Scissors') {
            result = 'You lose.';
        }

    } else if (playerMove === 'Rock') {
       
        if (computerMove === 'Rock'){
            result = 'Tie.';
        } else if (computerMove === 'Paper') {
            result = 'You lose.';
        } else if (computerMove === 'Scissors') {
            result = 'You win!';
        }
        
    }
    if(result === 'You win!') {
        scores.wins += 1;
    } else if (result === 'You lose.') {
        scores.losses += 1;
    } else if (result === 'Tie.'){
        scores.tie += 1;
    }
    
        localStorage.setItem('score',JSON.stringify(scores));
        document.querySelector('.js-result').innerHTML = `${result}`;
        document.querySelector('.js-pick').innerHTML = `You  <img src = "images/${playerMove}-emoji.png" class = "move-icon"/>  <img src="images/${computerMove}-emoji.png" class= "move-icon" /> Computer`;
        updateScoreElement();
    }

function pickComputerMove() {
    const randomNumber =  Math.random();

    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1 / 3 ) {
    computerMove = 'Rock';
    } else if( randomNumber >= 1/3 && randomNumber < 2/3 ) {
    computerMove = 'Paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1 ) {
    computerMove = 'Scissors';
    }
    return computerMove;
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${scores.wins}, losses: ${scores.losses}, tie: ${scores.tie}`;
}

function showConfirmation() {
    const confirmElement = document.querySelector('.js-confirmation');
   
    confirmElement.style.display = 'block';
}

function hideConfirmation () {
    const confirmElement = document.querySelector('.js-confirmation');
    confirmElement.style.display = 'none';
}
function resetScore(){
    scores.wins = 0;
    scores.losses = 0;
    scores.tie = 0;
    localStorage.removeItem('score');
    document.querySelector('.js-result').innerHTML = 'Score reseted';
    document.querySelector('.js-pick').innerHTML = '';
    updateScoreElement();
    hideConfirmation(); // Hide the confirmation message after resetting
}
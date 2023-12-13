const scores = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    tie: 0
} 
console.log(scores);

updateScoreElement();

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

function resetScore(){
    scores.wins = 0;
    scores.losses = 0;
    scores.tie = 0;
    localStorage.removeItem('score');
    document.querySelector('.js-result').innerHTML = 'Score reseted';
    document.querySelector('.js-pick').innerHTML = '';
    updateScoreElement();
}
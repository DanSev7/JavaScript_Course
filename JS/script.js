let scores = JSON.parse( localStorage.getItem('score') ) || {
    wins:0,
    losses:0,
    };
console.log(scores);

function playGame(guess) {
    let computer = computerMove();

    let result = '';
    if(guess === computer){
        result = 'Yow win';
    } else {
        result = 'You lost';
    }

    if (result === 'Yow win'){
        scores.wins += 1;
    } else if (result === 'You lost'){
        scores.losses += 1;
    }

    localStorage.setItem('score', JSON.stringify(scores));
    alert (`You gussed ${guess} and the computer tosses ${computer}
Wins : ${scores.wins} , losses : ${scores.losses}`);
}

function computerMove() {
    let randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber < 1/2 ){
        computerMove = 'Head';
    } else if (randomNumber >= 1/2 && randomNumber <1 ) {
        computerMove = 'Tail';
    }
    return computerMove;
}

function removeData(){
    scores = {
        wins:0,
        losses:0
    }
    
    alert(`The score has been reseted 
Wins: ${scores.wins}, losses: ${scores.losses}`)
}
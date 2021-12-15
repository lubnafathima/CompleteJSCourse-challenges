'use strict';

let scores1P = document.querySelector('.scores0');
let scores2P = document.querySelector('.scores1');
let diceEl = document.querySelector('.dice');

let newBtn = document.querySelector('.new-game');
let rollBtn = document.querySelector('.roll');
let holdBtn = document.querySelector('.hold');

let current1P = document.querySelector('.currentScore0');
let current2P = document.querySelector('.currentScore1');

let contP1 = document.querySelector('.left-container');
let contP2 = document.querySelector('.right-container');

let scores, currentScore, activePlayer, playing;

const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    scores1P.textContent = 0;
    scores2P.textContent = 0;
    current1P.textContent = 0;
    current2P.textContent = 0;

    diceEl.classList.add('hidden'); // style for hidden class is created in style.css
        
    contP1.classList.remove('win');
    contP2.classList.remove('win');
    contP1.classList.add('act');
    contP2.classList.remove('act');
}
init();

const switchPlayer = function() {
    document.querySelector(`.currentScore${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    contP1.classList.toggle('act');
    contP2.classList.toggle('act');
}

rollBtn.addEventListener('click', () => {
    if (playing) {
        // console.log('working');
        const dice = Math.floor(Math.random() * 6)+ 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `img/dice-${dice}.png`;
        if ( dice !== 1) {
            currentScore += dice;
            document.querySelector(`.currentScore${activePlayer}`).textContent = currentScore;
            // current1P.textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

holdBtn.addEventListener('click', () => {
    if (playing) {
        // console.log('hold btn');
        scores[activePlayer] += currentScore;
        // console.log(scores[activePlayer]);
        document.querySelector(`.scores${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) { 
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.cont${activePlayer}`).classList.add('win');
            document.querySelector(`.cont${activePlayer}`).classList.remove('act');
        } else {
            switchPlayer();
        }
    }
});

newBtn.addEventListener('click', init);
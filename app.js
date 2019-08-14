/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// document.querySelector("#current-" + activePlayer).textContent = dice; // * Changing text content

// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>"; // * Adding html

// var x = document.querySelector("#score-0").textContent; // * Saving stuff in variables

///////////////////////////////////////////////////////////////////
var scores;
var roundScore;
var activePlayer;
var gamePlaying;
var prevRoll;

function init() {
    gamePlaying = true;

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    // document.querySelector(".dice").style.display = "none"; //  Changing css

    document.getElementById("score-0").textContent = "0"; //  Another way of selecting ids
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}
init();

function btn() {}
document.querySelector(".btn-roll").addEventListener("click", btn); //  Calling an external function

document.querySelector(".btn-roll").addEventListener("click", function() {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector(".dice--1"); //  Saving a dom selector as a variable
        var diceDOM2 = document.querySelector(".dice--2"); //  Saving a dom selector as a variable

        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png"; //   Changing the image
        diceDOM2.style.display = "block";
        diceDOM2.src = "dice-" + dice2 + ".png"; //   Changing the image
        console.log(dice, dice2);

        if (dice === 6 && dice2 === 6) {
            document.getElementById("score-" + activePlayer).textContent = "0"; //  Another way of selecting ids
            document.getElementById("current-" + activePlayer).textContent = "0";

            nextPlayer();
        } else if (dice !== 1 && dice2 !== 1) {
            roundScore += dice + dice2;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
    prevRoll = dice;
}); //  Calling an anonymous function
//  Anonymous functions cannot be reused because they don't have a name

document.querySelector(".btn-hold").addEventListener("click", function() {
    // winScore = document.getElementById("score-form").getElementsByClassName["score-input"];
    // console.log(winScore);

    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
        var winScore;

        var input = document.querySelector(".final-score").value;
        if (input) {
            winScore = input;
        } else {
            winScore = 100;
        }

        console.log(winScore);

        if (scores[activePlayer] >= winScore) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".dice--1").style.display = "none";
            document.querySelector(".dice--2").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

            gamePlaying = false;
        }

        nextPlayer();
    }
});

function nextPlayer() {
    roundScore = 0;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;

    // document.querySelector(".player-0-panel").classList.remove("active");
    // document.querySelector(".player-1-panel").classList.add("active");

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); // Ternary operator

    document.querySelector(".dice--1").style.display = "none";
    document.querySelector(".dice--2").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

var x = 4 + 4;
console.log(x);


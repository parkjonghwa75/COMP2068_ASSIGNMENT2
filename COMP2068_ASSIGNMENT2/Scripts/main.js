var stage;
var playerMoney = 1000;
var winnings = 0;
var jackpot = 5000;
var turn = 0;
var playerBet = 0;
var winNumber = 0;
var lossNumber = 0;
var spinResult;
var fruits = "";
var winRatio = 0;
var grapes = 0;
var bananas = 0;
var oranges = 0;
var cherries = 0;
var bars = 0;
var bells = 0;
var sevens = 0;
var blanks = 0;

function init() {
    stage = new createjs.Stage(document.getElementById("mainCanvas"));
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", handleTick);  
    
    drawSlotMachine();
}

function handleTick() {
    stage.update();
}

function drawSlotMachine() {
    var slotMachine = new createjs.Bitmap("img/mainBoard.jpg");
    var spinButton = new createjs.Bitmap("img/spinButton.jpg");
    var betmaxButton = new createjs.Bitmap("img/betmaxButton.jpg");
    var betoneButton = new createjs.Bitmap("img/betoneButton.jpg");
    var cashoutButton = new createjs.Bitmap("img/cashoutButton.jpg");


    var creditsText = new createjs.Text(playerMoney, "30px Arial", "red");
    creditsText.x = 175;
    creditsText.y = 300;
    creditsText.textAlign = "right";

    var betText = new createjs.Text(playerBet, "30px Arial", "red");
    betText.x = 275;
    betText.y = 300;
    betText.textAlign = "right";

    var winnerPaidText = new createjs.Text(winnings, "30px Arial", "green");
    winnerPaidText.x = 455;
    winnerPaidText.y = 300;
    winnerPaidText.textAlign = "right";

    spinButton.x = 370;
    spinButton.y = 390;

    betmaxButton.x = 212;
    betmaxButton.y = 408;

    betoneButton.x = 121;
    betoneButton.y = 407;

    cashoutButton.x = 30;
    cashoutButton.y = 408;
    stage.addChild(slotMachine, spinButton, betmaxButton, betoneButton, cashoutButton, creditsText, betText, winnerPaidText);

    spinButton.addEventListener("click", spinClickHandler);
    betmaxButton.addEventListener("click", betmaxClickHandler);
    betoneButton.addEventListener("click", betoneClickHandler);
    cashoutButton.addEventListener("click", cashoutClickHandler);
    
}

function spinClickHandler() {
    alert("you click spin");
}

function betmaxClickHandler() {
    alert("you click spin");
}

function betoneClickHandler() {
    alert("you click spin");
}

function cashoutClickHandler() {
    alert("you click spin");
}

/* Utility function to reset all fruit tallies */
function resetFruitTally() {
    grapes = 0;
    bananas = 0;
    oranges = 0;
    cherries = 0;
    bars = 0;
    bells = 0;
    sevens = 0;
    blanks = 0;
}

/* Utility function to reset the player stats */
function resetAll() {
    playerMoney = 1000;
    winnings = 0;
    jackpot = 5000;
    turn = 0;
    playerBet = 0;
    winNumber = 0;
    lossNumber = 0;
    winRatio = 0;
}

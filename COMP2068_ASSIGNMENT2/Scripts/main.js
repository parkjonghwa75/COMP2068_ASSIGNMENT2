var stage;
var playerMoney = 100;
var winnings = 0;
var jackpot = 5000;

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

    var firstReel = new createjs.Bitmap("img/blank.jpg");
    firstReel.x = 30;
    firstReel.y = 80;

    var secondReel = new createjs.Bitmap("img/blank.jpg");
    secondReel.x = 185;
    secondReel.y = 80;

    var thirdReel = new createjs.Bitmap("img/blank.jpg");
    thirdReel.x = 340;
    thirdReel.y = 80;


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
    stage.addChild(slotMachine, spinButton, betmaxButton, betoneButton, cashoutButton, creditsText, betText, winnerPaidText, firstReel, secondReel, thirdReel);

    spinButton.addEventListener("click", spinClickHandler);
    betmaxButton.addEventListener("click", betmaxClickHandler);
    betoneButton.addEventListener("click", betoneClickHandler);
    cashoutButton.addEventListener("click", cashoutClickHandler);
    
}

function spinClickHandler() {
    if (playerMoney == 0) {
        if (confirm("You ran out of Money! \nDo you want to play again?")) {
            resetAll();
        }
    }
    else if (playerBet == 0) {
        alert("You should place bets first.");
    }
    else {
        spinResult = Reels();
        fruits = spinResult[0] + " - " + spinResult[1] + " - " + spinResult[2];
        $("div#result>p").text(fruits);
        determineWinnings();
        showPlayerStats();
    }

}

/* Bet amount of ten. */
function betmaxClickHandler() {
    playerBet = playerBet + 10;
    playerMoney = playerMoney - 10;
    if (playerMoney >= 0) {
        drawSlotMachine();
    }
    else {
        alert("You don't have enough money.")
    }
}

/* Bet amount of one. */
function betoneClickHandler() {
    
    playerBet++;
    playerMoney = playerMoney - 1;
    if (playerMoney >= 0) {
        drawSlotMachine();
    }
    else {
        alert("You don't have enough money.")
    }
}

/* Program termination - Cash out button.  */
function cashoutClickHandler() {
    alert("Program terminated. Good bye!");
    window.close();
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
    playerMoney = 100;
    winnings = 0;
    jackpot = 5000;
    playerBet = 0;
    winNumber = 0;
    lossNumber = 0;
    winRatio = 0;
}

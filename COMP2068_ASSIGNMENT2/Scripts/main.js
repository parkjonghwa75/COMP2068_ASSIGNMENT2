var stage;

var playerMoney = 100;
var winnings = 0;
var jackpot = 5000;
var playerBet = 0;
var spinResult;

var grapes = 0;
var bananas = 0;
var oranges = 0;
var cherries = 0;
var bars = 0;
var bells = 0;
var sevens = 0;
var blanks = 0;

var turn = 0;

var firstReel;
var secondReel;
var thirdReel;

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

    if (turn == 0) {
         firstReel = new createjs.Bitmap("img/blank.jpg");
         secondReel = new createjs.Bitmap("img/blank.jpg");
         thirdReel = new createjs.Bitmap("img/blank.jpg");
    }

    firstReel.x = 30;
    firstReel.y = 80;
        
    secondReel.x = 185;
    secondReel.y = 80;
        
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
        turn++;
        spinResult = ReelsResult();
        
            if (spinResult[0] == "blank") {
                firstReel = new createjs.Bitmap("img/blank.jpg")
            }
            else if (spinResult[0] == "Grapes") {
                firstReel = new createjs.Bitmap("img/grape.jpg")
            }
            else if (spinResult[0] == "Banana") {
                firstReel = new createjs.Bitmap("img/banana.jpg")
            }
            else if (spinResult[0] == "Orange") {
                firstReel = new createjs.Bitmap("img/orange.jpg")
            }
            else if (spinResult[0] == "Cherry") {
                firstReel = new createjs.Bitmap("img/cherry.jpg")
            }
            else if (spinResult[0] == "Bar") {
                firstReel = new createjs.Bitmap("img/bar.jpg")
            }
            else if (spinResult[0] == "Bell") {
                firstReel = new createjs.Bitmap("img/bell.jpg")
            }
            else if (spinResult[0] == "Seven") {
                firstReel = new createjs.Bitmap("img/seven.jpg")
            }


            if (spinResult[1] == "blank") {
                secondReel = new createjs.Bitmap("img/blank.jpg")
            }
            else if (spinResult[1] == "Grapes") {
                secondReel = new createjs.Bitmap("img/grape.jpg")
            }
            else if (spinResult[1] == "Banana") {
                secondReel = new createjs.Bitmap("img/banana.jpg")
            }
            else if (spinResult[1] == "Orange") {
                secondReel = new createjs.Bitmap("img/orange.jpg")
            }
            else if (spinResult[1] == "Cherry") {
                secondReel = new createjs.Bitmap("img/cherry.jpg")
            }
            else if (spinResult[1] == "Bar") {
                secondReel = new createjs.Bitmap("img/bar.jpg")
            }
            else if (spinResult[1] == "Bell") {
                secondReel = new createjs.Bitmap("img/bell.jpg")
            }
            else if (spinResult[1] == "Seven") {
                secondReel = new createjs.Bitmap("img/seven.jpg")
            }

            if (spinResult[2] == "blank") {
                thirdReel = new createjs.Bitmap("img/blank.jpg")
            }
            else if (spinResult[2] == "Grapes") {
                thirdReel = new createjs.Bitmap("img/grape.jpg")
            }
            else if (spinResult[2] == "Banana") {
                thirdReel = new createjs.Bitmap("img/banana.jpg")
            }
            else if (spinResult[2] == "Orange") {
                thirdReel = new createjs.Bitmap("img/orange.jpg")
            }
            else if (spinResult[2] == "Cherry") {
                thirdReel = new createjs.Bitmap("img/cherry.jpg")
            }
            else if (spinResult[2] == "Bar") {
                thirdReel = new createjs.Bitmap("img/bar.jpg")
            }
            else if (spinResult[2] == "Bell") {
                thirdReel = new createjs.Bitmap("img/bell.jpg")
            }
            else if (spinResult[2] == "Seven") {
                thirdReel = new createjs.Bitmap("img/seven.jpg")
            }
            drawSlotMachine();
        determineWinnings();

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
    turn = 0;
    drawSlotMachine();
}

/* Utility function to check if a value falls within a range of bounds */
function checkRange(value, lowerBounds, upperBounds) {
    if (value >= lowerBounds && value <= upperBounds) {
        return value;
    }
    else {
        return !value;
    }
}

function determineWinnings() {
    if (blanks == 0) {
        if (grapes == 3) {
            winnings = playerBet * 10;
        }
        else if (bananas == 3) {
            winnings = playerBet * 20;
        }
        else if (oranges == 3) {
            winnings = playerBet * 30;
        }
        else if (cherries == 3) {
            winnings = playerBet * 40;
        }
        else if (bars == 3) {
            winnings = playerBet * 50;
        }
        else if (bells == 3) {
            winnings = playerBet * 75;
        }
        else if (sevens == 3) {
            winnings = playerBet * 100;
        }
        else if (grapes == 2) {
            winnings = playerBet * 2;
        }
        else if (bananas == 2) {
            winnings = playerBet * 2;
        }
        else if (oranges == 2) {
            winnings = playerBet * 3;
        }
        else if (cherries == 2) {
            winnings = playerBet * 4;
        }
        else if (bars == 2) {
            winnings = playerBet * 5;
        }
        else if (bells == 2) {
            winnings = playerBet * 10;
        }
        else if (sevens == 2) {
            winnings = playerBet * 20;
        }
        else if (sevens == 1) {
            winnings = playerBet * 5;
        }
        else {
            winnings = playerBet * 1;
        }
        winNumber++;
        showWinMessage();
    }
    else {
        lossNumber++;
        showLossMessage();
    }

}

function ReelsResult() {
    var betLine = [" ", " ", " "];
    var outCome = [0, 0, 0];

    for (var spin = 0; spin < 3; spin++) {
        outCome[spin] = Math.floor((Math.random() * 65) + 1);
        switch (outCome[spin]) {
            case checkRange(outCome[spin], 1, 27):  // 41.5% probability
                betLine[spin] = "blank";
                blanks++;
                break;
            case checkRange(outCome[spin], 28, 37): // 15.4% probability
                betLine[spin] = "Grapes";
                grapes++;
                break;
            case checkRange(outCome[spin], 38, 46): // 13.8% probability
                betLine[spin] = "Banana";
                bananas++;
                break;
            case checkRange(outCome[spin], 47, 54): // 12.3% probability
                betLine[spin] = "Orange";
                oranges++;
                break;
            case checkRange(outCome[spin], 55, 59): //  7.7% probability
                betLine[spin] = "Cherry";
                cherries++;
                break;
            case checkRange(outCome[spin], 60, 62): //  4.6% probability
                betLine[spin] = "Bar";
                bars++;
                break;
            case checkRange(outCome[spin], 63, 64): //  3.1% probability
                betLine[spin] = "Bell";
                bells++;
                break;
            case checkRange(outCome[spin], 65, 65): //  1.5% probability
                betLine[spin] = "Seven";
                sevens++;
                break;
        }
    }
    return betLine;
}


/* Check to see if the player won the jackpot */
function checkJackPot() {
    /* compare two random values */
    var jackPotTry = Math.floor(Math.random() * 51 + 1);
    var jackPotWin = Math.floor(Math.random() * 51 + 1);
    if (jackPotTry == jackPotWin) {
        alert("You Won the $" + jackpot + " Jackpot!!");
        playerMoney += jackpot;
        jackpot = 1000;
    }
}

/* Utility function to show a win message and increase player money */
function showWinMessage() {
    playerMoney += winnings;
    resetFruitTally();
    checkJackPot();
    drawSlotMachine();
}

/* Utility function to show a loss message and reduce player money */
function showLossMessage() {
    playerMoney -= playerBet;
    resetFruitTally();
    winnings = 0;
    
}
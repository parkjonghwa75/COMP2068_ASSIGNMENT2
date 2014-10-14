var stage;

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
    var slotMachine = new createjs.Bitmap("img/mainBoardoard.jpg");

    stage.addChild(slotMachine);
}

﻿var stage: createjs.Stage;

function init() {
    stage = new createjs.Stage(document.getElementById("mainCanvas"));
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", handleTick);  

    alert("woohoo");
}

function handleTick() {
    stage.update();
}


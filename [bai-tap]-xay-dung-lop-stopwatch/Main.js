"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StopWatch_1 = require("./StopWatch");
var time = new StopWatch_1.StopWatch();
console.log(time.reset());
setTimeout(function () {
    console.log(time.stop());
    console.log(time.getElapsedTime());
}, 1000);

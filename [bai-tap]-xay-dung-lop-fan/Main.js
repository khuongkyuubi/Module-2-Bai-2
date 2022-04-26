"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fan_1 = require("./Fan");
var fan = new Fan_1.Fan();
fan.on = true;
fan.speed = Fan_1.Speed.MEDIUM;
console.log(fan.toString());

import {Fan, Speed} from "./Fan";

let fan = new Fan();
fan.on = true;
fan.speed = Speed.MEDIUM;
console.log(fan.toString());
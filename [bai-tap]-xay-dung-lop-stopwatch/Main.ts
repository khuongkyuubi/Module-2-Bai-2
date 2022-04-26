import {StopWatch} from "./StopWatch";

let time = new StopWatch();
console.log(time.reset())

setTimeout(() => {
    console.log(time.stop())
    console.log(time.getElapsedTime())
}, 1000)

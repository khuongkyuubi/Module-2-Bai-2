"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopWatch = void 0;
var StopWatch = /** @class */ (function () {
    function StopWatch() {
        this.startTime = new Date().getMilliseconds();
        // this.endTime = endTime;
    }
    StopWatch.prototype.reset = function () {
        return this.startTime = (new Date()).getMilliseconds();
    };
    StopWatch.prototype.stop = function () {
        return this.endTime = new Date().getMilliseconds();
    };
    StopWatch.prototype.getElapsedTime = function () {
        return this.endTime - this.startTime;
    };
    return StopWatch;
}());
exports.StopWatch = StopWatch;

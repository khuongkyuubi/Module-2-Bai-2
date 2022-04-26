"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fan = exports.Speed = void 0;
var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 1] = "SLOW";
    Speed[Speed["MEDIUM"] = 2] = "MEDIUM";
    Speed[Speed["FAST"] = 3] = "FAST";
})(Speed = exports.Speed || (exports.Speed = {}));
var Fan = /** @class */ (function () {
    function Fan() {
        this._speed = Speed.SLOW;
        this._on = false;
        this._radius = 5;
        this._color = "blue";
    }
    Object.defineProperty(Fan.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "on", {
        get: function () {
            return this._on;
        },
        set: function (value) {
            this._on = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Fan.prototype.toString = function () {
        if (this.on) {
            return "fan is on. speed = ".concat(this._speed, ", color is ").concat(this._color, ", radius is ").concat(this._radius, "  ");
        }
        return "fan is off. color is ".concat(this._color, ", radius is ").concat(this._radius);
    };
    return Fan;
}());
exports.Fan = Fan;

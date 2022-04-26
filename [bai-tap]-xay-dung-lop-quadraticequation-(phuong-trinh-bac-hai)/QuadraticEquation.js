"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuadraticEquation = void 0;
var QuadraticEquation = /** @class */ (function () {
    function QuadraticEquation(a, b, c) {
        this._a = a;
        this._b = b;
        this._c = c;
    }
    Object.defineProperty(QuadraticEquation.prototype, "a", {
        get: function () {
            return this._a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuadraticEquation.prototype, "b", {
        get: function () {
            return this._b;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuadraticEquation.prototype, "c", {
        get: function () {
            return this._c;
        },
        enumerable: false,
        configurable: true
    });
    QuadraticEquation.prototype.getDiscriminant = function () {
        return this._delta = Math.pow(this._b, 2) - 4 * this._a * this._c;
    };
    QuadraticEquation.prototype.getRoot = function () {
        if (this.getDiscriminant() < 0) {
            return "Ph\u01B0\u01A1ng tr\u00ECnh v\u00F4 nghi\u1EC7m";
        }
        else if (this.getDiscriminant() === 0) {
            return "Ph\u01B0\u01A1ng tr\u00ECnh c\u00F3 nghi\u1EC7m k\u00E9p: x = ".concat(-this._b / 2 * this._a);
        }
        else {
            return "Ph\u01B0\u01A1ng tr\u00ECnh c\u00F3 2 nghi\u1EC7m: x1 = ".concat((-this._b + Math.pow(this.getDiscriminant(), 0.5)) / 2 * this._a, " v\u00E0 x1 = ").concat((-this._b - Math.pow(this.getDiscriminant(), 0.5)) / 2 * this._a);
        }
    };
    return QuadraticEquation;
}());
exports.QuadraticEquation = QuadraticEquation;

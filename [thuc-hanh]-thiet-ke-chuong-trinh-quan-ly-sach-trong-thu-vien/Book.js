"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(ID, name) {
        this.ID = ID;
        this.name = name;
    }
    Book.prototype.getID = function () {
        return this.ID;
    };
    Book.prototype.getName = function () {
        return this.name;
    };
    Book.prototype.setName = function (name) {
        this.name = name;
    };
    return Book;
}());
exports.Book = Book;

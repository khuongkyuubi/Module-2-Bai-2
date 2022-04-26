"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManagers = void 0;
var BookManagers = /** @class */ (function () {
    function BookManagers() {
        this.books = []; // khai báo giá trị mặc định cho thuộc tính luôn
        // this.books = []; // luôn phải khai báo thuộc tính trong constructor
    }
    BookManagers.prototype.add = function (book) {
        this.books.push(book);
    };
    BookManagers.prototype.getList = function () {
        return this.books;
    };
    BookManagers.prototype.delete = function (ID) {
        var indexBookDelete = this.findBook(ID);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        }
        else {
            throw new Error('delete error');
        }
    };
    BookManagers.prototype.update = function (ID, name) {
        var indexBookUpdate = this.findBook(ID);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        }
        else {
            throw new Error("update error");
        }
    };
    // lấy ra index của phần tử book
    BookManagers.prototype.findBook = function (ID) {
        var i = -1;
        this.books.forEach(function (book, index) {
            if (book.ID === ID) {
                i = index;
            }
        });
        return i;
    };
    return BookManagers;
}());
exports.BookManagers = BookManagers;

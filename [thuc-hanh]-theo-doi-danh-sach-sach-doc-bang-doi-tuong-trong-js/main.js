"use strict";
exports.__esModule = true;
var Book_1 = require("./Book");
var book1 = new Book_1.Book("The Design of EverDay Things", "Don Norman", false);
var book2 = new Book_1.Book("The Most Human Human", "Brian Christan", true);
var books = []; // mảng books có kiểu dữ liệu Book
books.push(book1, book2);
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = "".concat(book.title, " by ").concat(book.author);
    if (book.alreadyRead) {
        console.log("Yoy already read ".concat(bookInfo));
    }
    else {
        console.log("You still need read ".concat(bookInfo));
    }
}

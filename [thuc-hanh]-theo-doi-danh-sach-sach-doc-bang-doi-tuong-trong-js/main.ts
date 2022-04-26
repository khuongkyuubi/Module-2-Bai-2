import {Book} from "./Book";

let book1 = new Book("The Design of EverDay Things", "Don Norman", false);
let book2 = new Book("The Most Human Human", "Brian Christan", true);

let books: Book[] = []; // mảng books có kiểu dữ liệu Book

books.push(book1, book2);
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = `${book.title} by ${book.author}`;
    if (book.alreadyRead) {
        console.log(`Yoy already read ${bookInfo}`);
    } else {
        console.log(`You still need read ${bookInfo}`);
    }
}
console.log("tesst nwew")
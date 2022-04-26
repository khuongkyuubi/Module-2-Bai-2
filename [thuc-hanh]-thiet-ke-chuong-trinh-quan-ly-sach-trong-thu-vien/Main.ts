import {Book} from "./Book";
import {BookManagers} from "./BookManagers";

let book1 = new Book("B001", "Lập trình Java");
let book2 = new Book("B001", "Lập trình PHP");
let book3 = new Book("B001", "Lập trình TypeScript");

let bookManager = new BookManagers();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
console.log(bookManager.getList());
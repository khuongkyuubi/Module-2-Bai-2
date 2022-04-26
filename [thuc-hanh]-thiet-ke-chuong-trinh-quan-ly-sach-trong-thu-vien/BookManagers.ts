import {Book} from "./Book";

export class BookManagers {
    books: Book[] = []; // khai báo giá trị mặc định cho thuộc tính luôn

    constructor() {
        // this.books = []; // luôn phải khai báo thuộc tính trong constructor
    }

    add(book: Book): void {
        this.books.push(book);
    }

    getList(): Book[] {
        return this.books;
    }

    delete(ID: string): void {
        let indexBookDelete = this.findBook(ID);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        } else {
            throw new Error('delete error')
        }

    }

    update(ID: string, name: string): void {
        let indexBookUpdate = this.findBook(ID);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        } else {
            throw new Error("update error");
        }


    }

    // lấy ra index của phần tử book
    findBook(ID: string): number {
        let i = -1;
        this.books.forEach((book: Book, index: number) => {
            if (book.ID === ID) {
                i = index;
            }
        });
        return i;
    }
}

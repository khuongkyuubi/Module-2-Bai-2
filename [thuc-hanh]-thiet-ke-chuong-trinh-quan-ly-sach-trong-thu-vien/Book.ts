export class Book {
    ID: string;
    name: string;

    constructor(ID: string, name: string) {
        this.ID = ID;
        this.name = name;
    }

    getID(): string {
        return this.ID;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}
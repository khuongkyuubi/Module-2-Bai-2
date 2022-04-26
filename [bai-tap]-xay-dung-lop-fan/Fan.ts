export enum Speed {
    SLOW = 1,
    MEDIUM,
    FAST
}

export class Fan {
    private _speed: Speed = Speed.SLOW;
    private _on: boolean = false;
    private _radius: number = 5;
    private _color: string = "blue";

    constructor() {
    }

    get speed(): Speed {
        return this._speed;
    }

    set speed(value: Speed) {
        this._speed = value;
    }

    get on(): boolean {
        return this._on;
    }

    set on(value: boolean) {
        this._on = value;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    toString(): string {
        if (this.on) {
            return `fan is on. speed = ${this._speed}, color is ${this._color}, radius is ${this._radius}  `
        }
        return `fan is off. color is ${this._color}, radius is ${this._radius}`;
    }
}
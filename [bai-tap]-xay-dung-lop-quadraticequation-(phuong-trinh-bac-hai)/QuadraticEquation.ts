export class QuadraticEquation {
    private readonly _a: number;
    private readonly _b: number;
    private readonly _c: number;
    private _delta: number;

    constructor(a: number, b: number, c: number) {
        this._a = a;
        this._b = b;
        this._c = c;
    }

    get a(): number {
        return this._a;
    }

    get b(): number {
        return this._b;
    }

    get c(): number {
        return this._c;
    }

    getDiscriminant(): number {
        return this._delta = Math.pow(this._b, 2) - 4 * this._a * this._c;
    }

    getRoot(): string {
        if (this.getDiscriminant() < 0) {
            return `Phương trình vô nghiệm`
        } else if (this.getDiscriminant() === 0) {
            return `Phương trình có nghiệm kép: x = ${-this._b / 2 * this._a}`;
        } else {
            return `Phương trình có 2 nghiệm: x1 = ${(-this._b + Math.pow(this.getDiscriminant(), 0.5)) / 2 * this._a} và x1 = ${(-this._b - Math.pow(this.getDiscriminant(), 0.5)) / 2 * this._a}`
        }


    }


}
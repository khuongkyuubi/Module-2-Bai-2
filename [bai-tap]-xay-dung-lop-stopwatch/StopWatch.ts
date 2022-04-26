export class StopWatch {
    private startTime: number;
    private endTime: number;

    constructor() {
        this.startTime = new Date().getMilliseconds();
        // this.endTime = endTime;
    }

    reset() : number {

        return this.startTime = (new Date()).getMilliseconds();
    }

    stop(): number {
        return this.endTime = new Date().getMilliseconds();
    }
    getElapsedTime(): number {
        return this.endTime - this.startTime;
    }

}
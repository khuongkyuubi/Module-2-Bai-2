/*export default */class Point {
    displayName = "Point";
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance(b) {
        const dx = this.x - b.x;
        const dy = this.y - b.y;
        return Math.hypot(dx, dy); // hàm tính cạnh huyền

    }
}
let p1 = new Point(5,5);
let p2 = new Point(10, 10);
console.log(p1.displayName);
console.log(p1.distance(p2));

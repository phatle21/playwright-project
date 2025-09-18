class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }   
    area(): number {
        return this.width * this.height;
    }
}

const myRectangle = new Rectangle(5, 10);
console.log(`Area of rectangle: ${myRectangle.area()}`);
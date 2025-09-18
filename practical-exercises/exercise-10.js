var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var myRectangle = new Rectangle(5, 10);
console.log("Area of rectangle: ".concat(myRectangle.area()));

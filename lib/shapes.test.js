const { Triangle, Square, Circle } = require("./Shapes.js");

describe("Triangle Test", () => {
    it("Testing for Triangle Shape with a Blue Background", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

describe("Square Test", () => {
    it("Testing for Square Shape with a Purple Background", () => {
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="purple" />');
    })
})

describe("Circle Test", () => {
    it("Testing for Circle Shape with a #ca00ca Background", () => {
        const shape = new Circle();
        shape.setColor("#ca00ca");
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="#ca00ca" />');
    })
})

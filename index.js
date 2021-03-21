class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((sum, x) => sum += x)
    }
}

class Triangle extends Polygon {
    get isValid() {
        const sideOne = this.sides[0];
        const sideTwo = this.sides[1];
        const sideThree = this.sides[2];
        const conditions = [
            (this.countSides === 3), 
            ((sideOne + sideTwo) > sideThree), 
            ((sideTwo + sideThree) > sideOne),
            ((sideOne + sideThree) > sideTwo)
        ];
        return conditions.reduce((acc, x) => acc + x) === 4 ? true : false
    }
}

class Square extends Polygon {
    get isValid() {
        const conditions = [
            (this.countSides === 4), 
            (this.sidesEqual())
        ];
        return conditions.reduce((acc, x) => acc + x) === 2 ? true : false
    }

    get area() {
        return this.sides[0] **2
    }

    sidesEqual() {
        let res = true
        for (let i = 1; i < this.sides.length; i++) {
            if (this.sides[i] !== this.sides[i - 1]) {
                res = false;
            }
        }
        return res
    }
}
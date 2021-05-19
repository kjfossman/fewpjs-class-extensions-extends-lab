// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides 
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce(function(a,b){
            return a + b;
        }, 0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        if(this.countSides !== 3) return 
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        return ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2)) 
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.countSides !== 4) return
        return this.sides.every((val, i, arr) => val === arr[0])
    }

    get area(){
        return this.sides[0] * this.sides[0]
    }
}
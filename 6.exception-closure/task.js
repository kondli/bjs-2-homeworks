"use strict";
//задача1
function parseCount(value) {
    const parsed = Number.parseInt(value);
    if (Number.isNaN(parsed)) {
        const error = new Error ('Невалидное значение');
         throw error;
    }
    return parsed;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
       return error;
    }  
}

//задача2

class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;

        if (side1 + side2 < side3 || side1 + side3 < side2 || side3 + side2 < side1 ) {
            throw new Error ('Треугольник с такими сторонами не существует');
        }
        
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3; 
    }
    

    getArea() {
        const p = this.getPerimeter() / 2;
        const s = Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
        return Number(s.toFixed(3));
    }
}

function getTriangle(side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    } catch {
        return {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    } 
}

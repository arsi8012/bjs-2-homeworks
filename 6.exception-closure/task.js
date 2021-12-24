function parseCount(arg) {
    const parsed = Number.parseInt(arg);
    if (isNaN(parsed)) {
        throw new Error('Невалидное значение');
    }
    return parsed;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        if (b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        if (c + a < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let g = this.getPerimeter() / 2;
        return Number(Math.sqrt(g * (g - this.a) * (g - this.b) * (g - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        const triangle = {
            getArea: () => 'Ошибка! Треугольник не существует',
            getPerimeter: () => 'Ошибка! Треугольник не существует'
        }
        return triangle;
    }
}
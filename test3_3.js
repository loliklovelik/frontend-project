class Calculator {
    add(a, b) {
        return a + b; 
    }

    subtract(a, b) {
        return a - b; 
    }

    multiply(a, b) {
        return a * b; 
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("На ноль делить нельзя"); 
        }
        return a / b; 
    }
}

const calculator = new Calculator();
console.log('5 + 13 =', calculator.add(5, 13));
console.log('17 - 11 =', calculator.subtract(17, 11));
console.log('7 * 3 =', calculator.multiply(7, 3));
console.log('2 : 1 =', calculator.divide(2, 1));
